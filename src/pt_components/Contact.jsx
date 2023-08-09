import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'

const Contact = () => {

    // Estado para armazenar os valores dos campos do formulário
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false); // Estado para controlar o sucesso do envio


  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Parâmetros a serem enviados para o serviço de email
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    // Enviar email usando a biblioteca emailjs-com
    emailjs.send(
      'service_277vnru',      // Substitua pelo seu Service ID do EmailJS
      'template_0ozxvb9',     // Substitua pelo seu Template ID do EmailJS
      templateParams,
      '4aClZYwNhTMBqeAbw'          // Substitua pelo seu User ID do EmailJS
    )
    .then((response) => {
      console.log('Email enviado com sucesso!', response);
      // Lógica adicional após o envio do email (por exemplo, exibir uma mensagem de sucesso)
      setIsSuccess(true); // Definir o estado de sucesso como verdadeiro

    })
    .catch((error) => {
      console.error('Erro ao enviar o email:', error);
    });
    
    // Limpar os campos do formulário após o envio
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='container-fluid'>
      
      <section id="contact" className="contact section-bg">
        <div className="container">
          <div className="section-title contact">
            <h2>CONTATO</h2>
            <p>Fale comigo e agende uma entrevista</p>
          </div>
            <div>
                <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="name" placeholder="Nome" required />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder="Email" required />
                  </div>
                </div>
       
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Mensagem" required></textarea>
                </div>
                {isSuccess && <p style={{ color: 'green' }}>Email enviado com sucesso!</p>}
                <div className="text-center">
                  <button type="submit" className="btn-get-started">Enviar</button>
                  </div>
              </form>
            </div>


        </div>
    </section>
    </div>
  )
}

export default Contact