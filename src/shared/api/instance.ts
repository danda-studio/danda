export async function customFetch<T>(url: string, options: RequestInit): Promise<T> {
  const response = await fetch(url, options);

  if (!response.ok) {
    const error = new Error(response.statusText) as Error & { status?: number; info?: unknown };
    error.status = response.status;
    error.info = await response.json().catch(() => undefined);
    throw error;
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}

export default customFetch;
