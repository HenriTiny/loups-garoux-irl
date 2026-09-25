export type RoleKind = 'village' | 'wolf' | 'special'

export type Role = {
  name: string
  icon: string
  description: string
  kind: RoleKind
}

export type GameStep = 1 | 2 | 3 | 4 | 5
