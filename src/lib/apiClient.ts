const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

/*
  FUTURE NESTJS USE:
  When your backend is ready, set VITE_API_BASE_URL in .env.
  Example: VITE_API_BASE_URL=http://localhost:3000
*/
export async function apiRequest<TResponse>(path: string, options: RequestInit = {}): Promise<TResponse> {
  if (!API_BASE_URL) {
    throw new Error("API base URL is not configured yet.");
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  return response.json() as Promise<TResponse>;
}
