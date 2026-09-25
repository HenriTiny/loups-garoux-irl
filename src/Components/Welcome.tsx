//Welcome.tsx
import React from 'react';
import { ArrowRight, Sparkles} from 'lucide-react'


export function Welcome({ onStart }: { onStart: () => void }) {

  return (
    <main className="welcome">
        
        <div className="stars">✦　·　✧　·　✦</div><div className="moon">☾</div>
        
        <p className="eyebrow">UN JEU DE STRATÉGIE & D’INTUITION</p>
        
        <h1>Loups<br /><em>Garous</em></h1>
        
        <p className="intro">La nuit tombe sur le village. Saurez-vous démasquer les loups avant qu’il ne soit trop tard&nbsp;?</p>
        
        <button className="primary big" onClick={onStart}>Jouer <ArrowRight size={20} /></button>
        
        <p className="hint"><Sparkles size={14} /> De 4 à 18 joueurs</p>

    </main>
  )
}