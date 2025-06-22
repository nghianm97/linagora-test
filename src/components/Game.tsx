import React, { useState } from 'react';
import GameChoice, { type Choice } from './GameChoice';
import GamePlay from './GamePlay';
import GameResult, { type GameResult as GameResultType } from './GameResult';
import { ORIGINAL_CHOICES, BONUS_CHOICES, WIN_CONDITIONS, GAME_TIMING, UI_LABELS } from '../constants';

type GameState = 'choosing' | 'playing' | 'revealing' | 'result';

interface GameProps {
  mode: string;
}

const Game = ({ mode } : GameProps) => {
  const [gameState, setGameState] = useState<GameState>('choosing');
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<GameResultType | null>(null);
  const [score, setScore] = useState(0);

  const getGameChoices = (): Choice[] => {
    return mode === 'bonus' ? BONUS_CHOICES : ORIGINAL_CHOICES;
  };

  const getRandomChoice = (): Choice => {
    const choices = getGameChoices();
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const determineWinner = (player: Choice, computer: Choice): GameResultType => {
    if (player === computer) return 'draw';

    return WIN_CONDITIONS[player].includes(computer) ? 'win' : 'lose';
  };

  const handlePlayerChoice = (choice: Choice) => {
    setPlayerChoice(choice);
    setGameState('playing');
    
    setTimeout(() => {
      setGameState('revealing');
      // Generate computer choice after a short delay
      setTimeout(() => {
        const compChoice = getRandomChoice();
        setComputerChoice(compChoice);

        // Calculate result
        const gameResult = determineWinner(choice, compChoice);
        setResult(gameResult);

        // Update score
        if (gameResult === 'win') {
          setScore(prev => prev + 1);
        }

        // Show result after computer choice is revealed
        setTimeout(() => {
          setGameState('result');
        }, GAME_TIMING.RESULT_DISPLAY_DELAY);
      }, GAME_TIMING.COMPUTER_CHOICE_DELAY);
    }, GAME_TIMING.COMPUTER_THINKING_DELAY);
  };

  const handlePlayAgain = () => {
    setGameState('choosing');
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
  };

  const renderGameContent = () => {
    switch (gameState) {
      case 'choosing':
        return <GameChoice onChoice={handlePlayerChoice} mode={mode} />;
      
      case 'playing':
      case 'revealing':
        return (
          <GamePlay
            playerChoice={playerChoice!}
            computerChoice={computerChoice ?? undefined}
            isRevealing={gameState === 'revealing'}
          />
        );
      
      case 'result':
        return (
          <GameResult
            playerChoice={playerChoice!}
            computerChoice={computerChoice!}
            result={result!}
            onPlayAgain={handlePlayAgain}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <header className="flex justify-between items-center p-6 mx-auto border-2 border-gray-400 rounded-2xl">
        <div className="flex items-center">
          <img 
            src={`${mode === "original" ? "../assets/logo.svg" : "../assets/logo-bonus.svg"}`}
            alt="Rock Paper Scissors" 
            className="h-16"
          />
        </div>
        
        <div className="bg-white rounded-lg px-6 py-4 text-center min-w-[120px]">
          <p className="text-blue-600 text-sm font-semibold tracking-wider uppercase">
            {UI_LABELS.SCORE}
          </p>
          <p className="text-gray-800 text-3xl font-bold">
            {score}
          </p>
        </div>
      </header>

      {/* Game Content */}
      <main className="flex-1 flex items-center justify-center px-4">
        {renderGameContent()}
      </main>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-5 rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white opacity-5 rounded-full"></div>
      </div>
    </div>
  );
};

export default Game;
