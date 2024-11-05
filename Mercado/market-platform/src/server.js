const express = require('express');
const mercadopago = require('mercadopago');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Configurar Mercado Pago SDK
mercadopago.configurations.setAccessToken('APP_USR-6760034769144819-110508-c340688a2c545b133489b13066e14f1d-182610845');

app.use(express.json());
app.use(cors());

// Rota para criar uma preferência de pagamento
app.post('/create_preference', async (req, res) => {
  const { paymentMethod } = req.body;

  const preference = {
    items: [
      {
        title: 'Produto Exemplo',
        quantity: 1,
        currency_id: 'BRL',
        unit_price: 1.0,
      },
    ],
    payment_methods: {
      excluded_payment_types: paymentMethod === 'pix' ? [{ id: 'credit_card' }] : [{ id: 'pix' }],
    },
    back_urls: {
      success: 'https://testemercadopago-production.up.railway.app/success',
      failure: 'https://testemercadopago-production.up.railway.app/failure',
      pending: 'https://testemercadopago-production.up.railway.app/pending',
    },
    auto_return: 'approved',
  };

  try {
    const response = await mercadopago.preferences.create(preference);
    res.json({ id: response.body.id });
  } catch (error) {
    console.error('Erro ao criar preferência:', error);
    res.status(500).send('Erro ao criar preferência de pagamento');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
