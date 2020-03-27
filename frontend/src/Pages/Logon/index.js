import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import HeroesIMG from '../../assets/heroes.png';
import Logo from '../../assets/logo.svg';


export default function Logon()
{
    const history = useHistory();
    const [id, setId] = useState('');
    
        async function handleLogin(e)
        {
            e.preventDefault(); 
            try {
                const response = await api.post('sessions', {id});
                localStorage.setItem('ongId', id);
                localStorage.setItem('ongName', response.data.name);

                history.push('/profiles')
                }catch(err)
                    {
                        alert('Failed to Login, try again.');
                    }
            
        }
    
    return  (
        <div className="logon-container">

            <section className="form">
                <img src={Logo} alt="Be The Hero"/>

                <form onSubmit={handleLogin}>
                <h1> Sing-In </h1>

                <input placeholder = "Your ID"
                value={id}
                onChange={e => setId(e.target.value)}
                 />
                <button className="button"  type="submit"> Enter </button>

                <Link className="back-link" to= "/register">
                <FiLogIn size={16} color="#E02041"/>    
                Register a new account
                </Link>

                </form>


            </section>

            <img src={HeroesIMG} alt="heroes"/>

        </div>
        
    
            );

}