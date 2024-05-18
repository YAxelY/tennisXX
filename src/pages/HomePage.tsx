// HomePage.tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/react';
import TennisNavBar from '../components/ui/TennisNavBar'
import ButtonGroup from '../components/ButtonGroup';

import './HomePage.css'
const HomePage: React.FC = () => {
  const startGame = () => {
    // Navigate to NameEntryPage
  };

  return (
    <div className='firstcolor'>
  
         <TennisNavBar/>

        <ButtonGroup />
        
   
    </div>
  );
};

export default HomePage;
