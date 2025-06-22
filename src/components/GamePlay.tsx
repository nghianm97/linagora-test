
import React from 'react';
import { type Choice } from './GameChoice';
import { CHOICE_CONFIGS, UI_LABELS } from '../constants';

interface GamePlayProps {
  playerChoice: Choice;
  computerChoice?: Choice;
  isRevealing: boolean;
}

const GamePlay: React.FC<GamePlayProps> = ({ 
  playerChoice, 
  computerChoice, 
  isRevealing 
}) => {
  const getChoiceConfig = (choice: Choice) => {
    return CHOICE_CONFIGS[choice];
  };

  const ChoiceDisplay: React.FC<{ 
    choice?: Choice; 
    label: string; 
    isHidden?: boolean;
    isWinner?: boolean;
  }> = ({ choice, label, isHidden = false, isWinner = false }) => {
    const config = choice ? getChoiceConfig(choice) : null;

    return (
      <div className="flex flex-col items-center space-y-4 px-3">
        {/* Label at top */}
        <p className="text-white text-2xl font-semibold tracking-wider uppercase whitespace-nowrap">
          {label}
        </p>
        
        <div 
          className={`
            relative w-40 h-40 rounded-full 
            ${isHidden 
              ? 'bg-gradient-to-b from-gray-700 to-gray-800 animate-pulse' 
              : config 
                ? `bg-gradient-to-b ${config.gradient}` 
                : 'bg-gray-300'
            }
            border-8 border-white
            flex items-center justify-center
            ${isWinner ? 'ring-8 ring-white ring-opacity-30 shadow-2xl' : ''}
            transition-all duration-500
          `}
          style={{
            boxShadow: !isHidden && config ? config.boxShadow : undefined
          }}
        >
          {/* Winner glow effect */}
          {isWinner && (
            <>
              <div className="absolute inset-0 rounded-full bg-white opacity-10 animate-ping"></div>
              <div className="absolute inset-0 rounded-full bg-white opacity-5 animate-ping animation-delay-200"></div>
              <div className="absolute inset-0 rounded-full bg-white opacity-5 animate-ping animation-delay-400"></div>
            </>
          )}
          
          {/* Inner circle */}
          <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-inner relative z-10">
            {!isHidden && config ? (
              <img 
                src={config.icon} 
                alt={choice}
                className="w-14 h-14"
              />
            ) : isHidden ? (
              <div className="w-14 h-14 bg-gray-400 rounded-full animate-pulse"></div>
            ) : null}
          </div>
        </div>

      </div>
    );
  };

  return (
    <div className="flex items-center justify-center min-h-[400px] px-8">
      <div className="flex items-center justify-center w-full max-w-4xl gap-16 md:gap-24 lg:gap-32">
        {/* Player choice */}
        <ChoiceDisplay
          choice={playerChoice}
          label={UI_LABELS.PLAYER_CHOICE}
        />

        {/* Computer choice */}
        <ChoiceDisplay
          choice={computerChoice}
          label={UI_LABELS.COMPUTER_CHOICE}
          isHidden={!computerChoice || isRevealing}
        />
      </div>
    </div>
  );
};

export default GamePlay;


