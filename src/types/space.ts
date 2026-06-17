export interface SpaceExperience {
  id: string
  title: string
  location: string
  summary: string
  capacity: number
  accent: 'blue' | 'pearl' | 'slate'
}

export interface LeadRequest {
  name: string
  email: string
  interest: string
  message: string
}

export interface LeadResponse {
  id: string
  receivedAt: string
}
