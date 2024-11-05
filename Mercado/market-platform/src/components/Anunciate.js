import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import VisibilityIcon from '@mui/icons-material/Visibility';
import RateReviewIcon from '@mui/icons-material/RateReview';
import './Anunciate.css';

const Anunciate = () => {
  const [isAnunciante, setIsAnunciante] = useState(true);

  const handleToggle = () => {
    setIsAnunciante(!isAnunciante);
  };

  return (
    <div className="anunciate-section">
      <div className="toggle-button-container">
        <Button
          variant="outlined"
          color="primary"
          onClick={handleToggle}
          sx={{
            marginBottom: '2rem',
            color: '#ff4081',
            borderColor: '#ff4081',
            fontWeight: 'bold',
            marginTop: '3rem',
          }}
        >
          {isAnunciante ? 'Ver opções para Clientes' : 'Ver opções para Anunciantes'}
        </Button>
      </div>

      <div className="anunciate-message">
        <Typography variant="h4" component="h2" gutterBottom>
          {isAnunciante 
            ? "Conecte-se com Mais Pessoas: Seja Anunciante!" 
            : "Encontre o Profissional Ideal: Seja Cliente!"}
        </Typography>
      </div>

      <div className="benefits-container">
        {isAnunciante ? (
          <div className="benefits-column">
            <Typography variant="h5" component="h3" className="column-title">
              Para Anunciantes
            </Typography>
            <div className="benefit-item">
              <FavoriteIcon className="icon" />
              <Typography variant="h6" className="benefit-title">
                Destaque Seu Perfil
              </Typography>
              <Typography variant="body2" className="benefit-description">
                Apareça nas primeiras posições e atraia mais clientes em potencial.
              </Typography>
            </div>
            <div className="benefit-item">
              <CameraAltIcon className="icon" />
              <Typography variant="h6" className="benefit-title">
                Exiba Suas Fotos
              </Typography>
              <Typography variant="body2" className="benefit-description">
                Mostre sua galeria e aumente a interação com seus clientes.
              </Typography>
            </div>
            <div className="benefit-item">
              <VideocamIcon className="icon" />
              <Typography variant="h6" className="benefit-title">
                Promova Seus Vídeos
              </Typography>
              <Typography variant="body2" className="benefit-description">
                Conecte-se através de vídeos e ofereça uma experiência interativa.
              </Typography>
            </div>
          </div>
        ) : (
          <div className="benefits-column">
            <Typography variant="h5" component="h3" className="column-title">
              Para Clientes
            </Typography>
            <div className="benefit-item">
              <PersonSearchIcon className="icon" />
              <Typography variant="h6" className="benefit-title">
                Encontre o Profissional Ideal
              </Typography>
              <Typography variant="body2" className="benefit-description">
                Navegue entre diversos perfis e ache quem melhor atende às suas necessidades.
              </Typography>
            </div>
            <div className="benefit-item">
              <VisibilityIcon className="icon" />
              <Typography variant="h6" className="benefit-title">
                Veja Avaliações
              </Typography>
              <Typography variant="body2" className="benefit-description">
                Acesse comentários e classificações para escolher com confiança.
              </Typography>
            </div>
            <div className="benefit-item">
              <RateReviewIcon className="icon" />
              <Typography variant="h6" className="benefit-title">
                Avalie Seu Atendimento
              </Typography>
              <Typography variant="body2" className="benefit-description">
                Compartilhe sua experiência e ajude outros a tomarem decisões informadas.
              </Typography>
            </div>
          </div>
        )}
      </div>

      <div className="action-buttons-container">
        <Button
          variant="contained"
          color="primary"
          className="action-button"
          sx={{
            backgroundColor: '#ff4081',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '30px',
            padding: '0.8rem 2rem',
            fontSize: '1.2rem',
            marginTop: '1.5rem',
            '&:hover': {
              backgroundColor: '#ff1a66',
            },
          }}
        >
          {isAnunciante ? 'Quero Anunciar' : 'Quero Encontrar'}
        </Button>
      </div>
    </div>
  );
};

export default Anunciate;
