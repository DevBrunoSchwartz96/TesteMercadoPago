import React from 'react';
import { Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import SecurityIcon from '@mui/icons-material/Security';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import './Indicate.css';

const Indicate = () => {
  return (
    <div className="indicate-section">
      <div className="indicate-message">
        <h2>Para anunciantes, maximize sua visibilidade. Para clientes, encontre exatamente o que você procura.</h2>
       
      </div>
      
      <div className="benefits-container">
       
        <div className="benefits-row"> {/* Nova div para alinhar os itens lado a lado */}
          <div className="benefit-item">
            <StarIcon className="icon" />
            <p className="benefit-title">Acesso Exclusivo</p>
            <p className="benefit-description">Tenha acesso prioritário a novos conteúdos e ofertas exclusivas antes de todos.</p>
          </div>
          
          <div className="benefit-item">
            <SecurityIcon className="icon" />
            <p className="benefit-title">Privacidade Avançada</p>
            <p className="benefit-description">Proteja suas informações com nossa tecnologia de segurança avançada.</p>
          </div>

          <div className="benefit-item">
            <AccessTimeIcon className="icon" />
            <p className="benefit-title">Atendimento Prioritário</p>
            <p className="benefit-description">Suporte dedicado 24/7 para ajudar você em qualquer momento.</p>
          </div>
          
          <div className="benefit-item">
            <LoyaltyIcon className="icon" />
            <p className="benefit-title">Descontos e Ofertas</p>
            <p className="benefit-description">Desfrute de descontos exclusivos e aproveite promoções especiais.</p>
          </div>
        </div>
      </div>

      <Button
        variant="contained"
        color="primary"
        className="action-button"
        sx={{
          marginTop: '2rem',
          bgcolor: '#ff4081',
          color: 'white',
          borderRadius: '30px',
          padding: '0.8rem 2rem',
          fontWeight: 'bold',
          '&:hover': {
            bgcolor: '#e0356d',
          }
        }}
      >
        Quero Ser Premium
      </Button>
    </div>
  );
};

export default Indicate;
