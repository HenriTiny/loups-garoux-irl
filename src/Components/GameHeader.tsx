import { MoonStar } from 'lucide-react'
import type { GameStep } from '../types/game'

type GameHeaderProps = { step: GameStep; onGoHome: () => void }

export function GameHeader({ step, onGoHome }: GameHeaderProps) {
  return (
    <header className="topbar">
      <button className="brand" onClick={onGoHome} aria-label="Retour à l’accueil">
        <MoonStar size={21} /> <span>Loups Garous</span>
      </button>
      <div className="stepper" aria-label={`Étape ${step} sur 4`}>
        {[2, 3, 4].map((number) => <span key={number} className={step >= number ? 'active' : ''} />)}
      </div>
    </header>
  )
}
