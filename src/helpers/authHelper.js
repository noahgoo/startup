export function checkAuth(email, password) {
  const userPassword = localStorage.getItem(email);

  return password === userPassword;
}

export function newUser(email, password) {
  localStorage.setItem(email, password);
}

export function setCurrentUser(email) {
  localStorage.setItem("currentUser", email);
}

export function getCurrentUser() {
  return localStorage.getItem("currentUser");
}

export function logoutUser() {
  localStorage.removeItem("currentUser");
}
