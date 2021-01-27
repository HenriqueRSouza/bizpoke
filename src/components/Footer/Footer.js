import React from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logos/logo-nav.png';
import Honey from './honey.PNG';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-text'>

        <div className='footer-text-wrapper'>
            <h2>Bizpoke</h2>
            <p>A Bizpoke é uma start-up focada em ajudar empresas a viabilizarem estratégias de negócio dinâmicas sobre operações em campo.</p>
            <p>Somos parceiros de negócio Honeywell e nossa equipe é treinada e certificada em desenvolvimento e implantação de soluções sobre plataforma Movilizer.</p> 
        </div>

        <div className="footer-text-about">
          <div className="icons">
            <a href="https://www.google.com.br/maps/place/Av.+Nove+de+Julho,+765+-+Jardim+Apolo,+S%C3%A3o+Jos%C3%A9+dos+Campos+-+SP,+12243-000/@-23.1995683,-45.897357,17z/data=!3m1!4b1!4m5!3m4!1s0x94cc4a7211dbf917:0xae5df08a5a83dc8d!8m2!3d-23.1995732!4d-45.8951683" className="maps">
              
              <i className="fa fa-map-marker">
                <p>Av. Nove de Julho, 765 - 3º andar</p>
              </i>
              
            </a>

        <br></br>

            <a href="mailto:henriqueikesouza@gmail.com" className="email">
              <i className="fa fa-envelope">
                <p>info@bizpoke.com.br</p>
              </i>
            </a>

        <br></br>

            <a className="telefone">
              <i className="fa fa-phone">
                <p>(12) 3042-0252</p>
              </i>
            </a>

        <br></br>

        <div className="footer-img">
          <img src={Honey} alt="honey"></img>
        </div>
      </div>
    </div>
  </div>

      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Bizpoke
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
          </form>
        </div>
      </section>

      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
                <Link to='/' className='logo'>
                    <img src={Logo} alt="logo"></img>
                </Link>
          </div>
          <small className='website-rights'>Bizpoke © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer