// eslint-disable-next-line no-unused-vars
import React, { useRef, useEffect, useState } from 'react';
import './index.css';
import ContactForm from './components/ContacForm';

function App() {

  
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
    const [status, setStatus] = useState('');
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

    console.log(formData)
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        const response = await fetch('/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          setStatus('Email sent successfully.');
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        } else {
          setStatus('There was an error sending the email.');
        }
      } catch (error) {
        setStatus('There was an error sending the email.');
      }
    };
  

  return (
    <div className='main'>
      
      
      <div className='greeterText'>
        <h1>Rauno Vaher</h1>
      </div>


      <div className="alakategooria">
        <h3>TUTVUSTAV VIDEO</h3>
      </div>

      <div className="video-container">
        <video width="1000" controls autoPlay muted>
          <source src="/rauno_promoclip_final (video-converter.com).mp4" />
            Your browser does not support the video tag.
        </video>
      </div>


      <div className='raunolilledes-bg'>

        <div className="alakategooria" >
          <h3 id='pildid'>PILDID</h3>
        </div>

        <div className="images">
          <img src="rauno.JPG" alt="Rauno bändiga" /*width={500}*/ />
          <img src='RAUNOKOSMOS.jpg' alt='rauno astronaut' />
          <img src='raunonaer_cropped.jpg' alt='rauno naer' />
          <img src='1-rauno_cropped.jpg' alt='rauno lamab' />
        </div>
      </div>

      <div className="alakategooria">
        <h3>SAADA MULLE EMAIL</h3>
      </div>

      <ContactForm
        onSubmit={handleSubmit}
        formData={formData}
        onChange={handleChange}
        status={status}
      />


    </div>
  );
}

export default App