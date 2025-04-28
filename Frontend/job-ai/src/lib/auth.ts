export function login(token: string): void {
    localStorage.setItem('authToken', token);
}

export function logout(): void {
    localStorage.removeItem('authToken');
}

export function checkAuthStatus(): boolean {
    const token = localStorage.getItem('authToken');
    return !!token;
}