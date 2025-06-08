const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

function saveData(data) {
  const id = (localStorage.length + 1).toString();
  localStorage.setItem(id, JSON.stringify(data));
}

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  let hasError = false;

  if (name === "") {
    nameError.textContent = "Name is required.";
    hasError = true;
  }

  if (email === "") {
    emailError.textContent = "Email is required.";
    hasError = true;
  }

  if (message === "") {
    messageError.textContent = "Message is required.";
    hasError = true;
  }

  if (!hasError) {
    formMessage.style.display = "block";
    saveData({ name, email, message });
    alert("Thank you for contacting us!");
    contactForm.reset();
  } else {
    formMessage.style.display = "none";
  }
});
