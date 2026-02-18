export function checkAuth(email, password) {
  const userPassword = localStorage.getItem(email);

  return password === userPassword;
}

export function newUser(email, password) {
  localStorage.setItem(email, password);
}
