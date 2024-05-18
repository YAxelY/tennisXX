import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory for navigation
import { useStorage } from '@ionic/react-hooks/storage'; // Import useStorage hook
import PlayerInputName from '../components/ui/PlayerInputName';
import TennisNavBar from '../components/ui/TennisNavBar';
import { Storage } from '@capacitor/storage';
import './NameEntryPage.css';

const NameEntryPage = () => {
  const history = useHistory(); // Initialize useHistory hook for navigation
  const { set } = useStorage(); // Initialize useStorage hook for saving data
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');

  const handlePlayer1NameChange = (name: React.SetStateAction<string>) => {
    setPlayer1Name(name);
  };

  const handlePlayer2NameChange = (name: React.SetStateAction<string>) => {
    setPlayer2Name(name);
  };

const handleValidate = async () => {
  try {
    // Save player names to storage
    await Storage.set({ key: 'player1Name', value: player1Name });
    await Storage.set({ key: 'player2Name', value: player2Name });

    // Navigate back to the home page
    history.push('/');
  } catch (error) {
    console.error('Error saving data to AsyncStorage:', error);
    // Handle error
  }
};
  
  return (
    <div>
      <TennisNavBar />
      <div className="NameEntryPage">
        <h3 className="labelText">Saisie du nom des joueurs</h3>
        <h3 className="labelText">Joueur 1</h3>
        <PlayerInputName playerNumber={1} onNameChange={handlePlayer1NameChange} />
        <h3 className="labelText">Joueur 2</h3>
        <PlayerInputName playerNumber={2} onNameChange={handlePlayer2NameChange} />

        <button className="validateButton" onClick={handleValidate}>Validate</button>
      </div>
    </div>
  );
};

export default NameEntryPage;
