import { ArrowRight, MoonStar } from 'lucide-react'
import type { Role } from '../types/game'

type RoleRevealProps = { playerName: string; role: Role; isRevealed: boolean; progress: string; isLastPlayer: boolean; onReveal: () => void; onNext: () => void }

export function RoleReveal({ playerName, role, isRevealed, progress, isLastPlayer, onReveal, onNext }: RoleRevealProps) {
  return (
    <section className="reveal">
      <p className="eyebrow">DISTRIBUTION DES RÔLES · {progress}</p>
      <h2>À toi, <em>{playerName}</em></h2>
      <p className="reveal-note">Assure-toi que personne ne regarde ton écran.</p>
      <button className={`role-reveal ${isRevealed ? 'flipped' : ''}`} onClick={onReveal} aria-label="Révéler mon rôle">
        <div className="card-inner">
          <div className="card-face card-back">
            <MoonStar size={44} />
            <span>Ton rôle est caché</span><small>Clique pour le découvrir</small>
          </div>
          <div className="card-face card-front">
            <span className="role-icon">{role.icon}</span>
            <p>TON RÔLE</p><strong>{role.name}</strong><small>{role.description}</small>
          </div>
        </div>
      </button>
      <div>
        {isRevealed && <button className="primary next-player" onClick={onNext}>{isLastPlayer ? 'Lancer le jeu' : 'Joueur suivant'} <ArrowRight size={18} /></button>}
      </div>
    </section>
  )
}
