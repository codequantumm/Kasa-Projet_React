import React from 'react';
import '../styles/notFound.scss'

const NotFound: React.FC = () => {
  return <div className='not-found'>
    <h1>404 </h1>
  <p className='message'>Oupsi, la page que vous demandez n'existe pas</p>
  <a href="/">Retourner à l'accueil</a></div>
};

export default NotFound;
