const passwordInput = document.getElementById("password");
const lengthInput = document.getElementById("length");
const uppercaseInput = document.getElementById("uppercase");
const lowercaseInput = document.getElementById("lowercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const message = document.getElementById("message");
const themeToggle = document.getElementById("themeToggle");

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

function setTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
}

function generatePassword() {
  const length = Number(lengthInput.value);

  let characters = "";

  if (uppercaseInput.checked) characters += uppercaseLetters;
  if (lowercaseInput.checked) characters += lowercaseLetters;
  if (numbersInput.checked) characters += numbers;
  if (symbolsInput.checked) characters += symbols;

  if (characters === "") {
    message.textContent = "Please select at least one option.";
    passwordInput.value = "";
    return;
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  passwordInput.value = password;
  message.textContent = "";
}

function copyPassword() {
  if (passwordInput.value === "") {
    message.textContent = "Generate a password first.";
    return;
  }

  navigator.clipboard.writeText(passwordInput.value);
  message.textContent = "Password copied!";
}

const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark");
  setTheme(isDark ? "light" : "dark");
});

generatePassword();