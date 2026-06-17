import { apiPost } from './apiClient'
import type { LeadRequest, LeadResponse } from '../types/space'

export function submitLead(payload: LeadRequest) {
  return apiPost<LeadRequest, LeadResponse>('/leads', payload)
}
