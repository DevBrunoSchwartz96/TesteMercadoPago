import React from 'react';
import { Container, Typography, Grid, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#610202', color: 'white', padding: '2rem 0', marginTop: '6rem' }}>
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Conecte-se Conosco</Typography>
            <div>
              <IconButton href="https://facebook.com" target="_blank" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank" color="inherit">
                <Instagram />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank" color="inherit">
                <Twitter />
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Suporte</Typography>
            <Typography variant="body2">
              <a href="/support" style={{ color: 'white', textDecoration: 'none' }}>Central de Suporte</a>
            </Typography>
            <Typography variant="body2">
              <a href="/terms" style={{ color: 'white', textDecoration: 'none' }}>Termos de Uso</a>
            </Typography>
            <Typography variant="body2">
              <a href="/privacy" style={{ color: 'white', textDecoration: 'none' }}>Política de Privacidade</a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
