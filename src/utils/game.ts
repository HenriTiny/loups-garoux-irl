import { roles } from '../data/roles'
import type { Role } from '../types/game'

/** Mélange un tableau sans modifier le tableau d'origine. */
export function shuffle<T>(items: T[]): T[] {
  const shuffledItems = [...items]

  for (let currentIndex = shuffledItems.length - 1; currentIndex > 0; currentIndex -= 1) {
    const randomIndex = Math.floor(Math.random() * (currentIndex + 1))
    ;[shuffledItems[currentIndex], shuffledItems[randomIndex]] = [shuffledItems[randomIndex], shuffledItems[currentIndex]]
  }

  return shuffledItems
}

/** Crée les cartes à distribuer aux participants. */
export function createRoleAssignments(playerCount: number, selectedRoles: Role[], wolfCount: number): Role[] {
  const specialRoles = selectedRoles.filter((role) => role.kind !== 'wolf' && role.name !== 'Villageois')
  const wolfCard = roles.find((role) => role.name === 'Loup-garou')!
  const villagerCard = roles.find((role) => role.name === 'Villageois')!
  // Une place est réservée à un villageois : ce rôle est toujours présent.
  const availableSpecialRoleSlots = Math.max(0, playerCount - wolfCount - 1)
  const cards = [...Array.from({ length: wolfCount }, () => wolfCard), ...specialRoles.slice(0, availableSpecialRoleSlots)]

  while (cards.length < playerCount) cards.push(villagerCard)

  return shuffle(cards)
}
