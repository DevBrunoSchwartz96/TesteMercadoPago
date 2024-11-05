import React from 'react';
import { Typography, Box } from '@mui/material';

const Description = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ padding: 3, backgroundColor: 'transparent', marginTop: 10 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Intensificando seu dia
        </Typography>
        <Typography variant="body1" paragraph>
        Na INTENSIFYD, estamos comprometidos em oferecer segurança e qualidade excepcionais <br></br> aos nossos clientes.  Nosso principal objetivo é garantir a satisfação de todos, tanto dos <br></br> contratantes quanto dos acompanhantes, proporcionando uma experiência fluida <br></br> e agradável em nossa plataforma.
        </Typography>
        <Typography variant="body1" paragraph>
        Acreditamos que intensificar o seu dia pode gerar resultados extraordinários. Nosso site <br></br> foi projetado para acolher a todos,  permitindo que cada usuário encontre o que precisa <br></br> de forma fácil e eficaz. Junte-se a nós e descubra como podemos transformar a sua <br></br>  rotina!
        </Typography>
      </Box>
    </Box>
  );
};

export default Description;
