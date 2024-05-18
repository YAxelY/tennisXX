import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory for navigation
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/react';
import { arrowForwardOutline } from 'ionicons/icons'; // Assuming you have the arrow icon imported
import { Storage } from '@capacitor/storage';
import './GameManagementPage.css';

const GameManagementPage: React.FC = () => {
  const history = useHistory(); // Initialize useHistory hook for navigation
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

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

  const handlePrev = () => {
    // Implement scoring logic for the first player
    // For simplicity, let's increment the score by 15 for each click
    if (player1Score === 40 && player2Score === 40) {
      // Égalité (deuce) state
      // Reset both players' scores to 40
      setPlayer1Score(40);
      setPlayer2Score(40);
    } else if ((player1Score === 40 && player2Score < 40) || (player1Score === 50 && player2Score >= 40)) {
      // Advantage player 1 or player 2
      // Reset both players' scores to 40
      setPlayer1Score(40);
      setPlayer2Score(40);
    } else if (player1Score === 50) {
      // Player 1 won the point
      // Reset both players' scores to 0
      setPlayer1Score(0);
      setPlayer2Score(0);
    } else {
      // Increment player 1 score by 15
      setPlayer1Score(player1Score + 15);
    }
  };

  const handleNext = () => {
    // Implement scoring logic for the second player
    // For simplicity, let's increment the score by 15 for each click
    if (player1Score === 40 && player2Score === 40) {
      // Égalité (deuce) state
      // Reset both players' scores to 40
      setPlayer1Score(40);
      setPlayer2Score(40);
    } else if ((player2Score === 40 && player1Score < 40) || (player2Score === 50 && player1Score >= 40)) {
      // Advantage player 2 or player 1
      // Reset both players' scores to 40
      setPlayer1Score(40);
      setPlayer2Score(40);
    } else if (player2Score === 50) {
      // Player 2 won the point
      // Reset both players' scores to 0
      setPlayer1Score(0);
      setPlayer2Score(0);
    } else {
      // Increment player 2 score by 15
      setPlayer2Score(player2Score + 15);
    }
  };

  useEffect(() => {
    // Check if either player has won the set
    // If so, navigate back to the match management page
    if (player1Score >= 50 || player2Score >= 50) {
      history.push('/match-management');
    }
  }, [player1Score, player2Score]); // Run whenever player scores change

  return (
    <div className="container">
      <header className="header">
        <h1>Tennis</h1>
        <div className="status-bar">
          <span>📶</span>
          <span>🔋</span>
          <span>5:51</span>
        </div>
      </header>
      <main>
        <h2>{player1Name} vs {player2Name}</h2>
        <div className="scoreboard">
          <div className="player">
            <h3>{player1Name}</h3>
            <span className="score">{player1Score}</span>
          </div>
          <div className="player">
            <h3>{player2Name}</h3>
            <span className="score">{player2Score}</span>
          </div>
        </div>
      </main>
      <footer>
        <button className="prev" onClick={handlePrev}>⬅️ Table du point</button>
        <button className="next" onClick={handleNext}>Table du point ➡️</button>
      </footer>
    </div>
  );
};

export default GameManagementPage;
