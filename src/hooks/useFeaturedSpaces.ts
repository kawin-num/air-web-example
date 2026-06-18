import { useEffect, useState } from 'react'
import { getFeaturedSpaces } from '../services/spacesService'
import type { SpaceExperience } from '../types/space'

interface FeaturedSpacesState {
  data: SpaceExperience[]
  error: string | null
  isLoading: boolean
}

export function useFeaturedSpaces() {
  const [state, setState] = useState<FeaturedSpacesState>({
    data: [],
    error: null,
    isLoading: true,
  })

  useEffect(() => {
    const controller = new AbortController()

    getFeaturedSpaces(controller.signal)
      .then((data) => setState({ data, error: null, isLoading: false }))
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return
        }

        const message =
          error instanceof Error ? error.message : 'ไม่สามารถโหลดข้อมูลบริการได้'

        setState({ data: [], error: message, isLoading: false })
      })

    return () => controller.abort()
  }, [])

  return state
}
