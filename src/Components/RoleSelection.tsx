import { ArrowLeft, WandSparkles, Check } from 'lucide-react'
import { roles } from '../data/roles'

type RoleSelectionProps = {
  selectedRoleNames: string[]
  wolfCount: number
  maxWolfCount: number
  onWolfCountChange: (count: number) => void
  onToggleRole: (name: string) => void
  onBack: () => void
  onNext: () => void
  isNextDisabled: boolean
}

export function RoleSelection({ selectedRoleNames, wolfCount, maxWolfCount, onWolfCountChange, onToggleRole, onBack, onNext, isNextDisabled }: RoleSelectionProps) {
  return (
    <section className="panel">
      <div className="panel-heading">
        <p className="eyebrow">ÉTAPE 2</p>
        <h2>Choisissez les rôles</h2>
        <p>Composez votre village. Les rôles non sélectionnés ne seront pas distribués.</p>
      </div>

      <div className="role-grid">
        {roles.map((role) => {
          const isSelected = selectedRoleNames.includes(role.name)
          const isRequiredRole = role.name === 'Villageois' || role.name === 'Loup-garou'

          if (role.name === 'Loup-garou') {
            return (
              <div className="role-card selected locked role-card-wolf" key={role.name}>
                <span className="role-icon">{role.icon}</span>
                <span><strong>{role.name}</strong><small>{role.description}</small></span>
                <div className="wolf-counter" aria-label="Nombre de loups-garous">
                  <button onClick={() => onWolfCountChange(wolfCount - 1)} disabled={wolfCount <= 1} aria-label="Retirer un loup-garou">−</button>
                  <strong>{wolfCount}</strong><span>loup{wolfCount > 1 ? 's' : ''}</span>
                  <button onClick={() => onWolfCountChange(wolfCount + 1)} disabled={wolfCount >= maxWolfCount} aria-label="Ajouter un loup-garou">+</button>
                </div>
                <i title="Rôle obligatoire"><Check size={14} /></i>
              </div>
            )
          }

          return (
            <button className={`role-card ${isSelected ? 'selected' : ''} ${isRequiredRole ? 'locked' : ''}`} onClick={() => onToggleRole(role.name)} disabled={isRequiredRole} key={role.name}>
              <span className="role-icon">{role.icon}</span>
              <span><strong>{role.name}</strong><small>{role.description}</small></span>
              {isSelected && <i><Check size={14} /></i>}
            </button>
          )
        })}
      </div>

      <footer className="actions">
        <button className="secondary" onClick={onBack}><ArrowLeft size={18} /> Retour</button>
        <button className="primary" disabled={isNextDisabled} onClick={onNext}>Distribuer les rôles <WandSparkles size={18} /></button>
      </footer>
    </section>
  )
}
