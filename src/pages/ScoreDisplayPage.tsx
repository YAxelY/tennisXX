// ScoreDisplayPage.tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';

const ScoreDisplayPage: React.FC = () => {
  // Sample scores (replace with actual scores)
  const scores = [
    'Player 1: 6 - Player 2: 4',
    'Player 1: 7 - Player 2: 5',
    'Player 1: 6 - Player 2: 3',
    // Add more scores as needed
  ];

  return (
    <div className="container">
      <header className="header">
        <h1>Tennis</h1>
        <div className="status-bar">
          <span>📶</span>
          <span>🔋</span>
        </div>
      </header>
      <main>
        <h2>Évolution du score</h2>
        <div className="scoreboard">
          <div className="set">
            <h3>Set 1: Noah 4 - 2 Wilander</h3>
          </div>
          <div className="set">
            <h3>Set 1: Noah 4 - 3 Wilander</h3>
          </div>
          <div className="set">
            <h3>Set 1: Noah 5 - 3 Wilander</h3>
          </div>
          <div className="set">
            <h3>Set 1: Noah 6 - 3 Wilander</h3>
          </div>
          <div className="set">
            <h3>Set 2: Noah 0 - 1 Wilander</h3>
          </div>
          <div className="set">
            <h3>Set 2: Noah 0 - 2 Wilander</h3>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ScoreDisplayPage;
