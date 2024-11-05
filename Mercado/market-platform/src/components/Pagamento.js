import React, { useState } from 'react';

function Pagamento() {
  const [paymentMethod, setPaymentMethod] = useState(null);

  const handlePayment = async () => {
    if (!paymentMethod) {
      alert('Selecione uma opção de pagamento');
      return;
    }

    try {
      const response = await fetch('https://testemercadopago-production.up.railway.app/create_preference', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ paymentMethod }),
      });

      const data = await response.json();
      if (data.id) {
        window.location.href = `https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=${data.id}`;
      }
    } catch (error) {
      console.error('Erro ao iniciar o pagamento:', error);
    }
  };

  return (
    <div>
      <h2>Escolha o método de pagamento:</h2>
      <button onClick={() => setPaymentMethod('pix')}>Pix</button>
      <button onClick={() => setPaymentMethod('credit_card')}>Cartão de Crédito</button>
      <br />
      <button onClick={handlePayment}>Ir para pagamento</button>
    </div>
  );
}

export default Pagamento;