import { apiGet } from './apiClient'
import type { SpaceExperience } from '../types/space'

export function getFeaturedSpaces(signal?: AbortSignal) {
  return apiGet<SpaceExperience[]>('/spaces', signal)
}
