import type { Role } from '../types/game'

export const roles: Role[] = [
  { name: 'Villageois', icon: '👨🏼‍🌾', description: 'Cherche les loups-garous avec le village.', kind: 'village' },
  { name: 'Loup-garou', icon: '🐺', description: 'Dévore un villageois chaque nuit.', kind: 'wolf' },
  { name: 'Voyante', icon: '🔮', description: 'Découvre le rôle d’un joueur chaque nuit.', kind: 'special' },
  { name: 'Sorcière', icon: '🧙🏼‍♀️', description: 'Possède une potion de vie et une potion de mort.', kind: 'special' },
  { name: 'Chasseur', icon: '🏹', description: 'En mourant, peut emporter un joueur avec lui.', kind: 'special' },
  { name: 'Cupidon', icon: '💘', description: 'Unit deux amoureux au début de la partie.', kind: 'special' },
  { name: 'Chien loup', icon: '🐶', description: 'Devient loup si éliminé par les loups.', kind: 'special' },
  { name: 'Petite fille', icon: '👧', description: 'Peut tenter d’observer les loups la nuit.', kind: 'village' },
  { name: 'Voleur', icon: '🎭', description: 'Choisit sa carte parmi deux cartes supplémentaires.', kind: 'special' },
]
