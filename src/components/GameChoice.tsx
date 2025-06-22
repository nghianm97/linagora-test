
import React from 'react';
import { CHOICE_CONFIGS } from '../constants';

export type Choice = 'rock' | 'paper' | 'scissors' | 'lizard' | 'spock';

interface GameChoiceProps {
  onChoice: (choice: Choice) => void;
  mode: string;
}

const GameChoice: React.FC<GameChoiceProps> = ({ onChoice, mode }) => {
  const BONUS_LAYOUT = [
    [['scissors']],
    [['spock', 'paper']],
    [['lizard', 'rock']]
  ] as Choice[][][];

  const ORIGINAL_LAYOUT = [
    [['paper']],
    [['scissors', 'rock']]
  ] as Choice[][][];

  const choices = mode === 'bonus' ? BONUS_LAYOUT : ORIGINAL_LAYOUT;

  const renderButton = (choice: Choice) => (
    <button
      key={choice}
      onClick={() => onChoice(choice)}
      className={`
        w-30 h-30 rounded-full
        bg-gradient-to-b ${CHOICE_CONFIGS[choice].gradient}
        flex items-center justify-center
        shadow-lg
        transform transition-all duration-200
        hover:scale-105 active:scale-95
        cursor-pointer group
      `}
      style={{
        borderRadius: "100%",
        boxShadow: CHOICE_CONFIGS[choice].boxShadow
      }}
    >
      {/* Center white circle for icon */}
      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center" style={{ borderRadius: "100%"}}>
        <img
          src={CHOICE_CONFIGS[choice].icon}
          alt={choice}
          className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
        />
      </div>
    </button>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8">
      {choices.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`
            flex justify-center
            ${rowIndex < choices.length - 1 ? (mode === 'bonus' ? 'mb-6' : 'mb-8') : ''}
            ${row[0].length > 1 ? 'gap-16' : ''}
          `}
        >
          {row[0].map(choice => renderButton(choice))}
        </div>
      ))}
    </div>
  );
};

export default GameChoice;




