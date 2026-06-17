const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? '/api'

export class ApiError extends Error {
  readonly status: number

  constructor(message: string, status: number) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

async function parseJson<TResponse>(response: Response): Promise<TResponse> {
  if (!response.ok) {
    throw new ApiError(
      `API request failed with status ${response.status}`,
      response.status,
    )
  }

  return response.json() as Promise<TResponse>
}

export async function apiGet<TResponse>(endpoint: string, signal?: AbortSignal) {
  const response = await fetch(`${apiBaseUrl}${endpoint}`, {
    headers: { Accept: 'application/json' },
    signal,
  })

  return parseJson<TResponse>(response)
}

export async function apiPost<TRequest, TResponse>(endpoint: string, payload: TRequest) {
  const response = await fetch(`${apiBaseUrl}${endpoint}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  return parseJson<TResponse>(response)
}
