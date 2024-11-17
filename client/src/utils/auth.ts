import { jwtDecode, JwtPayload } from 'jwt-decode';

class AuthService {
  // Decode the token to get the user profile or other payload data
  getProfile() {
    const token = this.getToken();
    if (token) {
      return jwtDecode<JwtPayload>(token); // Decode the token using jwtDecode
    }
    return null;
  }

  // Check if the user is logged in by verifying if a valid token exists
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }
  
  // Check if the token is expired by comparing its expiration timestamp
  isTokenExpired(token: string) {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      if (decoded.exp) {
        const currentTime = Math.floor(Date.now() / 1000); // Get current time in seconds
        return decoded.exp < currentTime; // Return true if token is expired
      }
      return false; // If no exp field, assume the token does not expire
    } catch (error) {
      console.error("Invalid token", error);
      return true; // Assume token is expired if decoding fails
    }
  }

  // Get the token from localStorage
  getToken(): string {
    return localStorage.getItem('id_token') || '';
  }

  // Set the token in localStorage and redirect to the home page
  login(idToken: string) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/'); // Redirect to home page
  }

  // Remove the token from localStorage and redirect to the login page
  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/login'); // Redirect to login page
  }
}

export default new AuthService();
