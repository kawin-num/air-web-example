export interface SpaceExperience {
  id: string
  title: string
  category: string
  summary: string
  result: string
  asset: string
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
