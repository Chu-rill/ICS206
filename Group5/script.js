const displauButton = document.querySelector(".cta-button");
displauButton.addEventListener("click", function () {
  const volunteerForm = document.getElementById("volunteerFormSection");
  if (
    volunteerForm.style.display === "none" ||
    volunteerForm.style.display === ""
  ) {
    volunteerForm.style.display = "block";
    displauButton.textContent = "Hide Volunteer Form";
  } else {
    volunteerForm.style.display = "none";
    displauButton.textContent = "Show Volunteer Form";
  }
});
function submitVolunteerForm(event) {
  event.preventDefault();

  // Get form elements
  const fullName = document.getElementById("fullName");
  const email = document.getElementById("email");
  const program = document.getElementById("program");

  let isValid = true;

  // Clear previous error styles
  clearErrors();

  // Validate full name
  if (!fullName.value.trim()) {
    showError(fullName, "Full name is required");
    isValid = false;
  }

  // Validate email
  if (!email.value.trim()) {
    showError(email, "Email is required");
    isValid = false;
  } else if (!isValidEmail(email.value)) {
    showError(email, "Please enter a valid email");
    isValid = false;
  }

  // Validate program selection
  if (!program.value) {
    showError(program, "Please select a program");
    isValid = false;
  }

  // If form is valid, submit it
  if (isValid) {
    alert("Thank you! Your volunteer application has been submitted.");
    document.getElementById("volunteerForm").reset();
  }
}

function showError(element, message) {
  element.style.borderColor = "#e74c3c";

  // Remove existing error message
  const existingError = element.parentNode.querySelector(".error-message");
  if (existingError) {
    existingError.remove();
  }

  // Add new error message
  const errorDiv = document.createElement("div");
  errorDiv.className = "error-message";
  errorDiv.textContent = message;
  errorDiv.style.color = "#e74c3c";
  errorDiv.style.fontSize = "14px";
  errorDiv.style.marginTop = "5px";

  element.parentNode.appendChild(errorDiv);
}

function clearErrors() {
  // Reset border colors
  const inputs = document.querySelectorAll(
    "#volunteerForm input, #volunteerForm select"
  );
  inputs.forEach((input) => {
    input.style.borderColor = "";
  });

  // Remove error messages
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((error) => error.remove());
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
