const BASE_URL = "http://localhost:5000"; // backend URL

// Signup function
export async function signup(name, email, role, password) {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, role, password })
  });
  return res.json();
}

// Login function
export async function login(email, password) {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  return res.json();
}
