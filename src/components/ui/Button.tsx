import React from 'react';
import './Button.css'
interface ButtonProps {
  buttonText: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ buttonText, onClick }) => {
  return (
    <button className="customButton" onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
