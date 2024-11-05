import React from 'react';
import { Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import VideocamIcon from '@mui/icons-material/Videocam';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './ContentCategories.css';

const ContentCategories = () => {
  return (
    <div className="content-categories">
      <Button
        variant="contained"
        sx={{
          bgcolor: '#ff6666', // Default red background
          color: 'white',
          borderRadius: '30px',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease, bgcolor 0.3s ease',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '5px 0 15px rgba(0, 0, 0, 0.3)', // Sombra à esquerda
          
          '&:hover': {
            bgcolor: '#ff4d4d', // Lighter red on hover
            transform: 'scale(1.05) translateY(-3px)',
            boxShadow: '8px 0 20px rgba(0, 0, 0, 0.5)', // Sombra mais intensa ao passar o mouse
          },
        }}
        className="category-button"
        startIcon={<FavoriteIcon />}
        endIcon={<ArrowForwardIcon />}
      >
        <strong>Acompanhantes</strong>
        <div className="red-detail" />
      </Button>
      <Button
        variant="contained"
        sx={{
          bgcolor: '#ff6666', // Default red background
          color: 'white',
          borderRadius: '30px',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease, bgcolor 0.3s ease',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '5px 0 15px rgba(0, 0, 0, 0.3)', // Sombra à esquerda
        
          '&:hover': {
            bgcolor: '#ff4d4d', // Lighter red on hover
            transform: 'scale(1.05) translateY(-3px)',
            boxShadow: '8px 0 20px rgba(0, 0, 0, 0.5)', // Sombra mais intensa ao passar o mouse
          },
        }}
        className="category-button"
        startIcon={<CameraAltIcon />}
        endIcon={<ArrowForwardIcon />}
      >
        <strong>Hot Stream</strong>
        <div className="red-detail" />
      </Button>
      <Button
        variant="contained"
        sx={{
          bgcolor: '#ff6666', // Default red background
          color: 'white',
          borderRadius: '30px',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease, bgcolor 0.3s ease',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '5px 0 15px rgba(0, 0, 0, 0.3)', // Sombra à esquerda
          
          '&:hover': {
            bgcolor: '#ff4d4d', // Lighter red on hover
            transform: 'scale(1.05) translateY(-3px)',
            boxShadow: '8px 0 20px rgba(0, 0, 0, 0.5)', // Sombra mais intensa ao passar o mouse
          },
        }}
        className="category-button"
        startIcon={<VideocamIcon />}
        endIcon={<ArrowForwardIcon />}
      >
        <strong>Videos</strong>
        <div className="red-detail" />
      </Button>
    </div>
  );
};

export default ContentCategories;
