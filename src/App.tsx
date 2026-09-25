import { useState } from 'react'
import { GameStarted } from './Components/GameStarted'
import { GameHeader } from './Components/GameHeader'
import { PlayerSetup } from './Components/PlayerSetup'
import { RoleReveal } from './Components/RoleReveal'
import { RoleSelection } from './Components/RoleSelection'
import { Welcome } from './Components/Welcome'
import { roles } from './data/roles'
import type { GameStep, Role } from './types/game'
import { createRoleAssignments, shuffle } from './utils/game'

const DEFAULT_SELECTED_ROLES = ['Villageois', 'Loup-garou']
const REQUIRED_ROLE_NAMES = ['Villageois', 'Loup-garou']
const MIN_PLAYERS = 4
const MAX_PLAYERS = 18

export default function App() {
  const [step, setStep] = useState<GameStep>(1)
  const [selectedRoleNames, setSelectedRoleNames] = useState(DEFAULT_SELECTED_ROLES)
  const [wolfCount, setWolfCount] = useState(1)
  const [playerCount, setPlayerCount] = useState(6)
  const [playerNames, setPlayerNames] = useState<string[]>(Array(6).fill(''))
  const [distributionPlayerNames, setDistributionPlayerNames] = useState<string[]>([])
  const [assignments, setAssignments] = useState<Role[]>([])
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0)
  const [isRoleRevealed, setIsRoleRevealed] = useState(false)

  const completedPlayerNames = playerNames.map((name) => name.trim()).filter(Boolean)
  const selectedRoles = roles.filter((role) => selectedRoleNames.includes(role.name))

  function toggleRole(roleName: string) {
    if (REQUIRED_ROLE_NAMES.includes(roleName)) return

    setSelectedRoleNames((currentNames) => currentNames.includes(roleName)
      ? currentNames.filter((name) => name !== roleName)
      : [...currentNames, roleName],
    )
  }

  function updatePlayerCount(nextCount: number) {
    const safeCount = Math.max(MIN_PLAYERS, Math.min(MAX_PLAYERS, nextCount))
    setPlayerCount(safeCount)
    setWolfCount((currentCount) => Math.min(currentCount, safeCount - 1))
    setPlayerNames((currentNames) => Array.from({ length: safeCount }, (_, index) => currentNames[index] ?? ''))
  }

  function updateWolfCount(nextCount: number) {
    setWolfCount(Math.max(1, Math.min(playerCount - 1, nextCount)))
  }

  function updatePlayerName(index: number, name: string) {
    setPlayerNames((currentNames) => currentNames.map((currentName, currentIndex) => (
      currentIndex === index ? name : currentName
    )))
  }

  function startRoleDistribution() {
    setAssignments(createRoleAssignments(completedPlayerNames.length, selectedRoles, wolfCount))
    setDistributionPlayerNames(shuffle(completedPlayerNames))
    setCurrentPlayerIndex(0)
    setIsRoleRevealed(false)
    setStep(4)
  }

  function showNextPlayer() {
    if (currentPlayerIndex === distributionPlayerNames.length - 1) {
      setStep(5)
      return
    }

    setCurrentPlayerIndex((index) => index + 1)
    setIsRoleRevealed(false)
  }

  if (step === 1) return <Welcome onStart={() => setStep(2)} />

  const currentPlayerName = distributionPlayerNames[currentPlayerIndex]
  const currentRole = assignments[currentPlayerIndex]
  const progress = `${currentPlayerIndex + 1} / ${distributionPlayerNames.length}`

  return (
    <main className="app-shell">
      <GameHeader step={step} onGoHome={() => setStep(1)} />

      {step === 2 && <PlayerSetup playerCount={playerCount} playerNames={playerNames} onPlayerCountChange={updatePlayerCount} onPlayerNameChange={updatePlayerName} onBack={() => setStep(1)} onNext={() => setStep(3)} isNextDisabled={completedPlayerNames.length !== playerCount} />}
      {step === 3 && <RoleSelection selectedRoleNames={selectedRoleNames} wolfCount={wolfCount} maxWolfCount={playerCount - 1} onWolfCountChange={updateWolfCount} onToggleRole={toggleRole} onBack={() => setStep(2)} onNext={startRoleDistribution} isNextDisabled={selectedRoleNames.length === 0} />}
      {step === 4 && <RoleReveal playerName={currentPlayerName} role={currentRole} isRevealed={isRoleRevealed} progress={progress} isLastPlayer={currentPlayerIndex === distributionPlayerNames.length - 1} onReveal={() => setIsRoleRevealed(true)} onNext={showNextPlayer} />}
      {step === 5 && <GameStarted onNext={() => setStep(1)}  />}
    </main>
  )
}
