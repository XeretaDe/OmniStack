import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';

import Logo from '../../assets/logo.svg';



export default function NewIncident()
{

  const[title, setTitle] = useState('');
  const[description, setDescription] = useState('');
  const[value, setValue] = useState('');

  const history = useHistory();

  const ongId = localStorage.getItem('ongId');



  async function handleNewIncident(e)
  {
    e.preventDefault();

    const data =
    {
      title,
      description,
      value,
    };

    try
    {
  await api.post('incidents', data, {
    headers:{ Authorization: ongId, 
    }
    })
    history.push('/profiles');
    }
    catch(err)
    {
      alert('Error on creating a new case, try again.');

    }

  }


     return(
          <div className="newincident-container">
            <div className="content">
                <section>
                    <img src={Logo} alt="BeTheHero"/>
                <h1>
                Register new case
                </h1>
                <p>
                Put up details of your case, to find the Hero needed to solve this!
                </p>
                <Link className="back-link" to= "/profiles">
                <FiArrowLeft size={16} color="#E02041"/>    
                Home
                </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                <input 
                placeholder= "Title of the case"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />

                <textarea 
                placeholder="Description"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />

                <input 
                placeholder="Reward"
                  value={value}
                  onChange={e => setValue(e.target.value)}
                />
                

                <button className="button" type="submit"> 
                Register 
                </button>
                </form>
            </div>
          </div>
        )
}