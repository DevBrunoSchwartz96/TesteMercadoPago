import React, { useEffect, useState } from 'react';
import { TextField, Autocomplete } from '@mui/material';
import axios from 'axios';
import './SearchBar.css';

const CityAutocomplete = () => {
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const removeAccents = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  useEffect(() => {
    const fetchCities = async (query) => {
      try {
        const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/distritos');
        const cities = response.data.map(district => ({
          label: district.nome,
          estado: district.municipio.microrregiao.mesorregiao.UF.sigla,
        }));

        const normalizedQuery = removeAccents(query.toLowerCase());
        const filteredCities = cities.filter(city => 
          removeAccents(city.label.toLowerCase()).includes(normalizedQuery)
        );
        
        setOptions(filteredCities);
      } catch (error) {
        console.error('Erro ao buscar cidades:', error);
      }
    };

    if (inputValue.length >= 3) {
      fetchCities(inputValue);
    } else {
      setOptions([]); // Limpa as opções se menos de 3 caracteres
    }
  }, [inputValue]); // Dependência apenas de inputValue

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Se o valor estiver vazio, limpa as opções
    if (value === '') {
      setOptions([]);
    }
  };

  const handleBlur = () => {
    setInputValue(''); // Limpa o valor do input
    setOptions([]); // Limpa as opções do autocomplete
  };

  return (
    <div className="search-bar-container">
      <Autocomplete
        options={options}
        getOptionLabel={(option) => `${option.label} (${option.estado})`}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Pesquise uma cidade"
            variant="outlined"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleBlur} // Adiciona o manipulador de evento onBlur
            sx={{
              width: '700px', // Ajuste a largura aqui
              height: '56px', // Ajuste a altura aqui
            }}
          />
        )}
        filterOptions={(options) => options} // Não filtra na lista
        noOptionsText="Nenhuma cidade encontrada"
        autoHighlight
      />
    </div>
  );
};

export default CityAutocomplete;
