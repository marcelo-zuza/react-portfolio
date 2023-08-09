import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EmailService = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send(
      'service_277vnru',      
      'template_0ozxvb9',    
      templateParams,
      '4aClZYwNhTMBqeAbw'         
    )
    .then((response) => {
      console.log('Email enviado com sucesso!', response);
    })
    .catch((error) => {
      console.error('Erro ao enviar o email:', error);
    });
    
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h1>Formulário de Contato</h1>
      <form onSubmit={handleSubmit}>
        {/* Campos do formulário */}
        <div>
          <label>Nome:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Mensagem:</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default EmailService;
