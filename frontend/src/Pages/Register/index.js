import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import Logo from '../../assets/logo.svg';



export default function Register()
{
  async function handleRegister(e)
  {
  e.preventDefault(); 
  const data = 
  {
    name,
    email,
    whatsapp,
    city,
    uf,
  };
try{
  const response = await api.post('ongs', data)

  alert(`Your ID: ${response.data.id}`);
  history.push('/');
  }catch (err)
  {
    alert('Error: Try again.');
  }
  }
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

     return(
          <div className="register-container">
            <div className="content">
                <section>
                    <img src={Logo} alt="BeTheHero"/>
                <h1>
                Register
                </h1>
                <p>
                Register your NGO to join the platform and help other people to find your NGO's cases
                </p>
                <Link className="back-link" to= "/">
                <FiArrowLeft size={16} color="#E02041"/>    
                I already have a Login
                </Link>
                </section>

                <form onSubmit={handleRegister}>
                <input placeholder= "Name of the NGO" 
                value={name} 
                onChange={e => setName(e.target.value)} 
                />

                <input type="email" 
                placeholder="E-mail" 
                value={email}
                onChange={e => setEmail(e.target.value)} 
                />

                <input placeholder="WhatsApp" 
                value={whatsapp} 
                onChange={e => setWhatsapp(e.target.value)} 
                />

                <div className="Input-Group">
                    <input placeholder="City"
                    value={city} 
                    onChange={e => setCity(e.target.value)} 
                    />  

                    <input placeholder="UF" 
                    style={ {  width: 80  }} value={uf} 
                    onChange={e => setUf(e.target.value)}
                    />

                </div>

                <button className="button" type="submit"> 
                Register 
                </button>
                </form>
            </div>
          </div>
        )
}