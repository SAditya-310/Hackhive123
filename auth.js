import { login, signup } from "./api.js";

const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const loginError = document.getElementById("loginError");
const signupError = document.getElementById("signupError");

// Toggle tabs
loginTab.addEventListener("click", () => {
  loginTab.classList.add("active");
  signupTab.classList.remove("active");
  loginForm.classList.remove("hidden");
  signupForm.classList.add("hidden");
});

signupTab.addEventListener("click", () => {
  signupTab.classList.add("active");
  loginTab.classList.remove("active");
  signupForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
});

// Login
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  loginError.textContent = "";

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  try {
    const data = await login(email, password);
    if (data.token) {
      localStorage.setItem("hackhive_token", data.token);
      localStorage.setItem("hackhive_user", JSON.stringify(data.user));
      window.location.href = "index.html";
    } else {
      loginError.textContent = data.message || "Login failed";
    }
  } catch (err) {
    loginError.textContent = "Server error. Try again.";
    console.error(err);
  }
});

// Signup
signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  signupError.textContent = "";

  const firstName = document.getElementById("signupFirstName").value;
  const lastName = document.getElementById("signupLastName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const role = document.getElementById("signupRole").value;

  try {
    const data = await signup(`${firstName} ${lastName}`, email, role, password);
    if (data.token) {
      localStorage.setItem("hackhive_token", data.token);
      localStorage.setItem("hackhive_user", JSON.stringify(data.user));
      window.location.href = "index.html";
    } else {
      signupError.textContent = data.message || "Signup failed";
    }
  } catch (err) {
    signupError.textContent = "Server error. Try again.";
    console.error(err);
  }
});
