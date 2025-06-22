import React from 'react';
import { type Choice } from './GameChoice';
import { CHOICE_CONFIGS, RESULT_TEXT, UI_LABELS } from '../constants';

export type GameResult = 'win' | 'lose' | 'draw';

interface GameResultProps {
  playerChoice: Choice;
  computerChoice: Choice;
  result: GameResult;
  onPlayAgain: () => void;
}

const GameResult: React.FC<GameResultProps> = ({
  playerChoice,
  computerChoice,
  result,
  onPlayAgain
}) => {
  const getChoiceConfig = (choice: Choice) => {
    return CHOICE_CONFIGS[choice];
  };

  const getResultText = () => {
    return RESULT_TEXT[result] || '';
  };

  const ChoiceDisplay: React.FC<{
    choice: Choice;
    label: string;
    isWinner: boolean;
    isPlayer?: boolean;
  }> = ({ choice, label, isWinner, isPlayer }) => {
    const config = getChoiceConfig(choice);

    return (
      <div className="flex flex-col items-center space-y-4 relative">
        {/* Winner glow rings */}
        {isWinner && (
          <>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-60 h-60 rounded-full bg-white opacity-5 animate-pulse"></div>
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-56 h-56 rounded-full bg-white opacity-5 animate-pulse animation-delay-300"></div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-52 h-52 rounded-full bg-white opacity-5 animate-pulse animation-delay-600"></div>
          </>
        )}

        {/* Label - Desktop: above, Mobile: below */}
        <p className="hidden md:block text-white text-lg font-semibold tracking-wider uppercase text-center">
          {label}
        </p>

        <div
          className={`
            relative w-40 h-40 rounded-full
            bg-gradient-to-b ${config.gradient}
            border-8 border-white
            flex items-center justify-center
            ${isWinner ? 'ring-8 ring-white ring-opacity-20 shadow-2xl scale-110' : ''}
            transition-all duration-500
            z-10
          `}
          style={{
            boxShadow: config.boxShadow
          }}
        >
          {/* Inner circle */}
          <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-inner">
            <img
              src={config.icon}
              alt={choice}
              className="w-14 h-14"
            />
          </div>
        </div>

        {/* Label - Mobile: below circle */}
        <p className="block md:hidden text-white text-lg font-semibold tracking-wider uppercase text-center">
          {label}
        </p>
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center min-h-[400px] px-8">
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between w-full max-w-4xl gap-8">
        {/* Player choice */}
        <ChoiceDisplay
          choice={playerChoice}
          label={UI_LABELS.PLAYER_CHOICE}
          isWinner={result === 'win'}
          isPlayer={true}
        />

        {/* Result section */}
        <div className="flex flex-col items-center space-y-6 mx-8">
          <h2 className="text-white text-5xl font-bold tracking-wider animate-fadeIn">
            {getResultText()}
          </h2>
          <button
            onClick={onPlayAgain}
            className="
              bg-white text-gray-800
              px-12 py-3 rounded-lg
              text-lg font-semibold tracking-wider uppercase
              hover:bg-gray-100
              transform transition-all duration-200
              hover:scale-105 active:scale-95
              shadow-lg hover:shadow-xl
              animate-fadeIn animation-delay-300
            "
          >
            {UI_LABELS.PLAY_AGAIN}
          </button>
        </div>

        {/* Computer choice */}
        <ChoiceDisplay
          choice={computerChoice}
          label={UI_LABELS.COMPUTER_CHOICE}
          isWinner={result === 'lose'}
        />
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden flex-col items-center space-y-8 w-full max-w-sm">
        {/* Choices row */}
        <div className="flex items-center justify-center gap-8">
          <ChoiceDisplay
            choice={playerChoice}
            label={UI_LABELS.PLAYER_CHOICE}
            isWinner={result === 'win'}
            isPlayer={true}
          />
          <ChoiceDisplay
            choice={computerChoice}
            label={UI_LABELS.COMPUTER_CHOICE}
            isWinner={result === 'lose'}
          />
        </div>

        {/* Result section below */}
        <div className="flex flex-col items-center space-y-6">
          <h2 className="text-white text-4xl font-bold tracking-wider animate-fadeIn text-center">
            {getResultText()}
          </h2>
          <button
            onClick={onPlayAgain}
            className="
              bg-white text-gray-800
              px-8 py-3 rounded-lg
              text-base font-semibold tracking-wider uppercase
              hover:bg-gray-100
              transform transition-all duration-200
              hover:scale-105 active:scale-95
              shadow-lg hover:shadow-xl
              animate-fadeIn animation-delay-300
            "
          >
            {UI_LABELS.PLAY_AGAIN}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameResult;
