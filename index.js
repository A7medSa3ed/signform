const signInBtn = document.querySelector("#sign-in-btn");
const signUpBtn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

signUpBtn.addEventListener("click", () => {
  container.classList.add("sign_up_mode");
});

signInBtn.addEventListener("click", () => {
  container.classList.remove("sign_up_mode");
});
