import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';

import api from '../../services/api';

import './style.css';

import Logo from '../../assets/logo.svg';

export default function Profile()
{
  const history = useHistory();
  const [incidents, setIncidents] = useState([]);
  const ongName = localStorage.getItem('ongName');  
  const ongId = localStorage.getItem('ongId');  
  
  useEffect(( ) => {
     api.get('profile', {
       headers: {
         Authorization: ongId,
         }
        }).then(response => {
           setIncidents(response.data);
           })
           }, [ongId]);

async function handleDeleteIncident(id){
try{ 
  await api.delete(`incidents/${id}`, {
    headers:{
      Authorization: ongId,
    }
  });
  setIncidents(incidents.filter(incident => incident.id !== id));
}catch (err)
  {
    alert('Error on deleting case, try again.');
  }


}

function handleLogout()
{
localStorage.clear();
history.push('/');
}

return(
        <div className="profile-container">
          <header>
              <img src={Logo} alt="BeTheHero"/>
              <span> Welcome, {ongName}! </span>

              <Link className="button" to="/incidentes/new">
                Register new case
              </Link>

              <button onClick={handleLogout} type="button">
                <FiPower size={18} color= "#E02041" />
              </button>
            </header>
            
            <h1>
              Registered Cases
            </h1>
            
            <ul>
              {incidents.map(incident => (              
              <li key={incident.id}>
                <strong>CASE:</strong>
                <p>{incident.title}</p>

                <strong> DESCRIPTION: </strong>
                <p> {incident.description}  </p>

                <strong> VALUE: </strong>
                <p> {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(incident.value) } </p>

                <button onClick={ () => handleDeleteIncident(incident.id)} type="button">
                  <FiTrash2 size={20} color="#a8a8b3"/>
                </button>
              </li>)
              )
              }

              
            </ul>
        </div>


      )


}