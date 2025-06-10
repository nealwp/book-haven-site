function sayThanks() {
  alert("Thank you for subscribing!");
}

const subscribeButton = document.getElementById("subscribe-btn");

const modal = document.getElementById("subscribeModal");
const closeBtn = document.getElementById("closeModalBtn");
const cancelBtn = document.getElementById("cancelBtn");

subscribeButton.onclick = () => (modal.style.display = "block");
closeBtn.onclick = () => (modal.style.display = "none");
cancelBtn.onclick = () => (modal.style.display = "none");

const emailInput = document.getElementById("emailInput");
const emailError = document.getElementById("emailError");
const subscribeNowBtn = document.getElementById("subscribeNowBtn");

subscribeNowBtn.onclick = () => {
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailRegex.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
    alert("Thank you for subscribing!");
    modal.style.display = "none";
    emailInput.value = "";
  }
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
