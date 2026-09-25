import { ArrowLeft, Users, HatGlasses } from 'lucide-react'

type PlayerSetupProps = {
  playerCount: number; playerNames: string[]; onPlayerCountChange: (count: number) => void
  onPlayerNameChange: (index: number, name: string) => void; onBack: () => void; onNext: () => void; isNextDisabled: boolean
}

export function PlayerSetup({ playerCount, playerNames, onPlayerCountChange, onPlayerNameChange, onBack, onNext, isNextDisabled }: PlayerSetupProps) {
  return (
    <section className="panel narrow">
      <div className="panel-heading">
        <p className="eyebrow">ÉTAPE 1</p>
        <h2>Qui participe&nbsp;?</h2>
        <p>Choisissez le nombre de joueurs, puis renseignez leurs prénoms.</p>
      </div>
      <div className="counter">
        <button onClick={() => onPlayerCountChange(playerCount - 1)} disabled={playerCount <= 4}>−</button>
        <div><Users size={20} /><strong>{playerCount}</strong><span>joueurs</span></div>
        <button onClick={() => onPlayerCountChange(playerCount + 1)} disabled={playerCount >= 18}>+</button>
      </div>
      <div className="name-grid">
        {playerNames.map((name, index) => <label key={index}><span>Joueur {index + 1}</span><input value={name} onChange={(event) => onPlayerNameChange(index, event.target.value)} placeholder={`Prénom du joueur ${index + 1}`} maxLength={24} /></label>)}
      </div>
      <footer className="actions">
        <button className="secondary" onClick={onBack}>
          <ArrowLeft size={18} /> Retour</button>
          <button className="primary" disabled={isNextDisabled} onClick={onNext}>Sélectionner les rôles <HatGlasses size={18} /></button>
          </footer>
    </section>
  )
}
