//GameStarted.tsx
import { Check } from 'lucide-react'
import { SoundButton } from './SoundButton'

import nuit1 from '../assets/sounds/nuit-1.mp3'
import nuit2 from '../assets/sounds/nuit-2.mp3'
import nuit3 from '../assets/sounds/nuit-3.mp3'

import jour1 from '../assets/sounds/jour-1.mp3'
import jour2 from '../assets/sounds/jour-2.mp3'
import jour3 from '../assets/sounds/jour-3.mp3'

import loup1 from '../assets/sounds/loup-1.mp3'
import loup2 from '../assets/sounds/loup-2.mp3'
import loup3 from '../assets/sounds/loup-3.mp3'

import sorciere1 from '../assets/sounds/sorciere-1.mp3'
import sorciere2 from '../assets/sounds/sorciere-2.mp3'

export function GameStarted({ onNext }: { onNext: () => void }) {
  return (
    <section className="panel">
        <div className="panel-heading">
          <p className="eyebrow">Début de la partie</p>
          <h2>Partie débutée</h2>
          <p>Jouez des sons pour mettre de l'ambiance.</p>
        </div>

        <div className="sound-grid">

        <h3>Nuit</h3>
        <SoundButton label="Nuit 1" src={nuit1} />
        <SoundButton label="Nuit 2" src={nuit2} />
        <SoundButton label="Nuit 3" src={nuit3} />

        <h3>Loup</h3>
        <SoundButton label="Loup 1" src={loup1} />
        <SoundButton label="Loup 2" src={loup2} />
        <SoundButton label="Loup 3" src={loup3} />
        
        <h3>Sorcière</h3>
        <SoundButton label="Sorcière 1" src={sorciere1} />
        <SoundButton label="Sorcière 2" src={sorciere2} />

        <h3>Jour</h3>
        <SoundButton label="Jour 1" src={jour1} />
        <SoundButton label="Jour 2" src={jour2} />
        <SoundButton label="Jour 3" src={jour3} />

      </div>

      <footer className="actions">
        <button className="primary" onClick={onNext}>
          Fin de la partie <Check size={18} />
        </button>
      </footer>

    </section>
  )
}
