import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory for navigation
import { Storage } from '@capacitor/storage'; // Import Storage from Capacitor
import Button from './ui/Button';
import './ButtonGroup.css';

const ButtonGroup = () => {
  const history = useHistory(); // Initialize useHistory hook for navigation
  const [playerNamesSet, setPlayerNamesSet] = useState(false); // State to track if player names have been set

  useEffect(() => {
    checkPlayerNames(); // Check if player names have been set on component mount
  }, []);

  const checkPlayerNames = async () => {
    try {
      // Check if player names are set in storage
      const player1NameResult = await Storage.get({ key: 'player1Name' });
      const player2NameResult = await Storage.get({ key: 'player2Name' });
  
      // Ensure that the retrieved values are not null
      const player1Name = player1NameResult.value || '';
      const player2Name = player2NameResult.value || '';
  
      // Update playerNamesSet based on whether player names are set
      setPlayerNamesSet(player1Name !== '' && player2Name !== '');
    } catch (error) {
      console.error('Error checking player names:', error);
    }
  };
  

  const handlePlayerNamesClick = () => {
    history.push('/name-entry'); // Navigate to the name entry page
  };

  const handleStartGameClick = () => {
    if (playerNamesSet) {
      history.push('/match-management'); // Navigate to the match management page if player names are set
    } else {
      console.log("Player names not set. Cannot start game.");
    }
  };

  return (
    <div className="buttonGroup">
      <Button buttonText="Saisie des joueurs" onClick={handlePlayerNamesClick} />
      <Button buttonText="Démarrer une partie" onClick={handleStartGameClick} />
    </div>
  );
};

export default ButtonGroup;
