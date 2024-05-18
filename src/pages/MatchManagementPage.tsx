import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory for navigation
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { Storage } from '@capacitor/storage';
import './MatchManagementPage.css';

const MatchManagementPage: React.FC = () => {
  const history = useHistory(); // Initialize useHistory hook for navigation
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');

  useEffect(() => {
    const fetchPlayerNames = async () => {
      try {
        const player1 = await Storage.get({ key: 'player1Name' });
        const player2 = await Storage.get({ key: 'player2Name' });
        setPlayer1Name(player1.value ?? 'Player 1'); // Set default value if player name is not found
        setPlayer2Name(player2.value ?? 'Player 2'); // Set default value if player name is not found
      } catch (error) {
        console.error('Error fetching player names from storage:', error);
        // Handle error
      }
    };

    fetchPlayerNames();
  }, []); // Run only once on component mount

  const startGame = () => {
    // Implement functionality to start managing a game
    history.push('/game-management'); // Navigate to the game management page
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Tennis</h1>
        <button className="settings">⚙️</button>
      </header>
      <main>
        <h2 className='matchTitle'>{player1Name} vs {player2Name}</h2>
        <div className="scoreboard">
          <div className="set">
            <h3>Set 1</h3>
            <div className="scores">
              <span>0</span>
              <span>0</span>
            </div>
          </div>
          <div className="set">
            <h3>Set 2</h3>
            <div className="scores">
              <span>0</span>
              <span>0</span>
            </div>
          </div>
          <div className="set">
            <h3>Set 3</h3>
            <div className="scores">
              <span>0</span>
              <span>0</span>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <button className="enter-game" onClick={startGame}>SAISIR UN JEU</button>
      </footer>
    </div>
  );
};

export default MatchManagementPage;
