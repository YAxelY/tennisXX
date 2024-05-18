import React, { useState } from 'react';
import './PlayerInputName.css'
interface PlayerInputNameProps {
  playerNumber: number;
  onNameChange: (name: string) => void;
}

const PlayerInputName: React.FC<PlayerInputNameProps> = ({ playerNumber, onNameChange }) => {
  const [playerName, setPlayerName] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setPlayerName(name);
    onNameChange(name);
  };

  return (
    <div className="playerInputName">
      <label htmlFor={`player${playerNumber}`}>Joueur {playerNumber}</label>
      <input className='inputline'
        type="text" 
        id={`player${playerNumber}`} 
        value={playerName} 
        onChange={handleNameChange} 
        placeholder={`Joueur ${playerNumber} name`}
      />
    </div>
  );
};

export default PlayerInputName;
