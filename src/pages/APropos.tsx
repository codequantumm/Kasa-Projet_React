import React from 'react';
import BannerAbout from '../assets/banner-a-propos.png';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';

const APropos: React.FC = () => {
  return (
    <>
     <Banner 
        src={BannerAbout} 
        alt="Bannière À propos" 
        text="" 
      />

      <div className="about-page">
      <div className='collapse-container'>
        <Collapse title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiés par nos équipes." />
        <Collapse title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discrimiatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
        <Collapse title="Service" content="La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce aue chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance." />
        <Collapse title="Sécurité" content="La sécurité est la priorité de Kasa. aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
      </div>
      </div>
    </>
  );
};

export default APropos;

