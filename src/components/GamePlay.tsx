
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
      <div className="flex flex-col items-center space-y-4 px-2 md:px-4">
        {/* Label - Desktop: above, Mobile: below */}
        <p className="hidden md:block text-white text-lg font-semibold tracking-wider uppercase text-center">
          {label}
        </p>
        
        <div 
          className={`
            relative w-32 h-32 md:w-40 md:h-40 rounded-full
            ${isHidden 
              ? 'bg-gradient-to-b from-gray-700 to-gray-800 animate-pulse' 
              : config 
                ? `bg-gradient-to-b ${config.gradient}` 
                : 'bg-gray-300'
            }
            border-4 md:border-8 border-white
            flex items-center justify-center
            ${isWinner ? 'ring-4 md:ring-8 ring-white ring-opacity-30 shadow-2xl' : ''}
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
          <div className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center shadow-inner relative z-10">
            {!isHidden && config ? (
              <img
                src={config.icon}
                alt={choice}
                className="w-10 h-10 md:w-14 md:h-14"
              />
            ) : isHidden ? (
              <div className="w-10 h-10 md:w-14 md:h-14 bg-gray-400 rounded-full animate-pulse"></div>
            ) : null}
          </div>
        </div>

        {/* Label - Mobile: below circle */}
        <p className="block md:hidden text-white text-lg font-semibold tracking-wider uppercase text-center whitespace-nowrap">
          {label}
        </p>
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center min-h-[400px] px-4 md:px-8">
      <div className="flex items-center justify-center w-full max-w-4xl gap-8 md:gap-16 lg:gap-24 xl:gap-32">
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


