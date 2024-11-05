import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid } from '@mui/material';

const Cards = () => {
  return (
    <Grid container justifyContent="center" sx={{ marginTop: 10 }}>
      {/* Título acima dos cartões */}
      <Grid item xs={12}>
        <Typography variant="h4" align="center" sx={{ marginBottom: 10, fontSize: 20 }}>
          Acesse outros conteúdos sobre nossa plataforma.
        </Typography>
      </Grid>
      
      <Grid item xs={12} sm={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ maxWidth: 345, margin: 0, borderRadius: 2 }}>
          <CardMedia
            component="img"
            height="140"
            image="./verificado.png"
            alt="verificado"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              A importância do verificado na plataforma.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Com a verificação, o anunciante passa a ter mais credibilidade, pois os documentos pessoais são verificados pela plataforma. 
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Saiba Mais
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ maxWidth: 345, margin: 0, borderRadius: 2 }}>
          <CardMedia
            component="img"
            height="140"
            image="./verificado.png"
            alt="verificado"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              A importância do verificado na plataforma.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Com a verificação, o anunciante passa a ter mais credibilidade, pois os documentos pessoais são verificados pela plataforma. 
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Saiba Mais
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ maxWidth: 345, margin: 0, borderRadius: 2 }}>
          <CardMedia
            component="img"
            height="140"
            image="./verificado.png"
            alt="verificado"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              A importância do verificado na plataforma.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Com a verificação, o anunciante passa a ter mais credibilidade, pois os documentos pessoais são verificados pela plataforma. 
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Saiba Mais
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Cards;
