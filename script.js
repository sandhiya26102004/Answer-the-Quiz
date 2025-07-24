const form = document.getElementById("questionsForm");
const resultMsg = document.getElementById("resultMsg");
const radioInputs = document.querySelectorAll('input[name="capital"]');

// Handle form submit
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const selectedOption = document.querySelector('input[name="capital"]:checked');

  if (!selectedOption) {
    resultMsg.textContent = "Please select an answer!";
  } else if (selectedOption.value === "Delhi") {
    resultMsg.textContent = "Correct! Delhi is the capital of India.";
  } else {
    resultMsg.textContent = "Incorrect. The correct answer is Delhi.";
  }
});

// Handle change event for radio buttons
radioInputs.forEach((radio) => {
  radio.addEventListener("change", function () {
    resultMsg.textContent = ""; // Clear message when user selects a new option
  });
});
