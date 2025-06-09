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

const mainButton = document.querySelector(".submit-button");

mainButton.addEventListener("click", function (event) {
  function submitVolunteerForm(event) {
    event.preventDefault();

    // Get form elements
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const program = document.getElementById("program");
    const comments = document.getElementById("comments");

    // Get checkbox values
    const availabilityCheckboxes = document.querySelectorAll(
      'input[name="availability"]:checked'
    );
    const availability = Array.from(availabilityCheckboxes).map(
      (cb) => cb.value
    );

    // Get radio button value
    const experienceRadio = document.querySelector(
      'input[name="experience"]:checked'
    );
    const experience = experienceRadio ? experienceRadio.value : "Not selected";

    // Check if required fields are empty
    if (!fullName.value.trim() || !email.value.trim() || !program.value) {
      alert("Please fill in all required fields");
      return;
    }

    // If all fields are filled, alert all values
    alert(`Form submitted with:
Full Name: ${fullName.value}
Email: ${email.value}
Phone: ${phone.value || "Not provided"}
Program: ${program.value}
Availability: ${
      availability.length > 0 ? availability.join(", ") : "Not selected"
    }
Experience: ${experience}
Comments: ${comments.value || "None"}`);

    document.getElementById("volunteerForm").reset();
  }
});
