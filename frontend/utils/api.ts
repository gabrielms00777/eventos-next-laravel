export async function baseApi(path: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET', data: object | null) {
    const response = fetch(`${process.env.API_BASE_URL}/${path}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: method !== 'GET' ? JSON.stringify(data) : null,
    })
    return response
}

export const api = {
    async get(path: string, data: object = {}) {
        return baseApi(path, 'GET', data)
    }
}