// eslint-disable-next-line no-unused-vars
import React from 'react';
import './index.css';


function App() {
    
  

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
        <h3>KONTAKT</h3>
      </div>
      
      <div class="kontakt">
        <div className='elements'>
          <div class="text">
              <h2>Your Title</h2>
              <p>Your text goes here. This can be a description or any other content.</p>
          </div>
          <img src="raunolilledes_cropped2.jpg" alt="Rauno lilledes" class="image" />
        </div>
      </div>

      <div className='footer'>
        <p>Created by TaaviCode</p>
      </div>


    </div>
  );
}

export default App