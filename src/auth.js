export function isAuthenticated() {
  return localStorage.getItem("token") !== null;
}

export function isAdmin() {
  return localStorage.getItem("role") === "admin";
}

export function login(token, role) {
  localStorage.setItem("token", token);
  localStorage.setItem("role", role);
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
}
