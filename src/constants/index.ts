import { type Choice } from '../components/GameChoice';

// Game choices for different modes
export const ORIGINAL_CHOICES: Choice[] = ['rock', 'paper', 'scissors'];
export const BONUS_CHOICES: Choice[] = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

// Win conditions for Rock Paper Scissors Lizard Spock
export const WIN_CONDITIONS: Record<Choice, Choice[]> = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock']
};

export const CHOICE_CONFIGS = {
  rock: {
    icon: '../assets/icon-rock.svg',
    gradient: 'from-red-400 to-red-600',
    shadow: 'shadow-red-600/50',
    color: 'red',
    shadowColor: 'hsl(349, 71%, 52%)',
    boxShadow: '0 4px 8px rgba(220, 38, 38, 0.3), 0 8px 16px rgba(220, 38, 38, 0.2)'
  },
  paper: {
    icon: '../assets/icon-paper.svg',
    gradient: 'from-blue-400 to-blue-600',
    shadow: 'shadow-blue-600/50',
    color: 'blue',
    shadowColor: 'hsl(230, 89%, 62%)',
    boxShadow: '0 4px 8px rgba(30, 64, 175, 0.3), 0 8px 16px rgba(30, 64, 175, 0.2)'
  },
  scissors: {
    icon: '../assets/icon-scissors.svg',
    gradient: 'from-yellow-400 to-yellow-600',
    shadow: 'shadow-yellow-600/50',
    color: 'yellow',
    shadowColor: 'hsl(39, 89%, 49%)',
    boxShadow: '0 4px 8px rgba(217, 119, 6, 0.3), 0 8px 16px rgba(217, 119, 6, 0.2)'
  },
  lizard: {
    icon: '../assets/icon-lizard.svg',
    gradient: 'from-purple-400 to-purple-600',
    shadow: 'shadow-purple-600/50',
    color: 'purple',
    shadowColor: 'hsl(261, 73%, 60%)',
    boxShadow: '0 4px 8px rgba(124, 58, 237, 0.3), 0 8px 16px rgba(124, 58, 237, 0.2)'
  },
  spock: {
    icon: '../assets/icon-spock.svg',
    gradient: 'from-cyan-400 to-cyan-600',
    shadow: 'shadow-cyan-600/50',
    color: 'cyan',
    shadowColor: 'hsl(189, 59%, 53%)',
    boxShadow: '0 4px 8px rgba(8, 145, 178, 0.3), 0 8px 16px rgba(8, 145, 178, 0.2)'
  }
} as const;

// Original mode layout (triangle)
export const ORIGINAL_CHOICE_CONFIGS = [
  {
    id: 'paper' as Choice,
    icon: '../assets/icon-paper.svg',
    gradient: 'blue',
    shadow: 'shadow-blue-600/50',
    position: 'top-0 left-1/2 transform -translate-x-1/2'
  },
  {
    id: 'scissors' as Choice,
    icon: '../assets/icon-scissors.svg',
    gradient: 'yellow',
    shadow: 'shadow-yellow-600/50',
    position: 'bottom-0 right-0'
  },
  {
    id: 'rock' as Choice,
    icon: '../assets/icon-rock.svg',
    gradient: 'red',
    shadow: 'shadow-red-600/50',
    position: 'bottom-0 left-0'
  }
] as const;

// Bonus mode layout (pentagon)
export const BONUS_CHOICE_CONFIGS = [
  {
    id: 'scissors' as Choice,
    icon: '../assets/icon-scissors.svg',
    gradient: 'from-yellow-500 to-yellow-600',
    shadow: 'shadow-yellow-600/50',
    position: 'top-0 left-1/2 transform -translate-x-1/2'
  },
  {
    id: 'spock' as Choice,
    icon: '../assets/icon-spock.svg',
    gradient: 'from-cyan-500 to-cyan-600',
    shadow: 'shadow-cyan-600/50',
    position: 'top-8 right-4'
  },
  {
    id: 'paper' as Choice,
    icon: '../assets/icon-paper.svg',
    gradient: 'from-blue-500 to-blue-600',
    shadow: 'shadow-blue-600/50',
    position: 'bottom-4 right-8'
  },
  {
    id: 'rock' as Choice,
    icon: '../assets/icon-rock.svg',
    gradient: 'from-red-500 to-red-600',
    shadow: 'shadow-red-600/50',
    position: 'bottom-4 left-8'
  },
  {
    id: 'lizard' as Choice,
    icon: '../assets/icon-lizard.svg',
    gradient: 'from-purple-500 to-purple-600',
    shadow: 'shadow-purple-600/50',
    position: 'top-8 left-4'
  }
] as const;

export const GAME_TIMING = {
  COMPUTER_THINKING_DELAY: 500,
  COMPUTER_CHOICE_DELAY: 1000,
  RESULT_DISPLAY_DELAY: 500
} as const;

export const RESULT_TEXT = {
  win: 'YOU WIN',
  lose: 'YOU LOSE',
  draw: 'DRAW'
} as const;

export const UI_LABELS = {
  PLAYER_CHOICE: 'You Picked',
  COMPUTER_CHOICE: 'The House Picked',
  PLAY_AGAIN: 'Play Again',
  SCORE: 'Score'
} as const;