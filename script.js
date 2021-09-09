const newsletterBtn = document.querySelector(".showAlert");
const alert = document.querySelector(".alert");
const newsletterInput = document.querySelector(".newsletterInput");
const validationIcon = document.querySelector(".icon-green");
const closeAlertBtn = document.querySelector(".btn-close");

newsletterBtn.addEventListener("click", function () {
  if (alert) {
    //   console.log(document.querySelector(".alert").classList);
    alert.classList.toggle("d-none");
    alert.classList.add("d-flex");
  }
  validationIcon.classList.add("d-none");
});

const enableBtn = () => {
  //   console.log(
  //     newsletterInput.value !== "" && !newsletterInput.validity.typeMismatch
  //   );

  if (newsletterInput.value !== "" && !newsletterInput.validity.typeMismatch) {
    validationIcon.style.color = "green";
    newsletterBtn.removeAttribute("disabled");
  }
};
newsletterInput.addEventListener("mouseover", enableBtn);

closeAlertBtn.addEventListener("click", function () {
  newsletterBtn.toggleAttribute("disabled");

  newsletterInput.value = "";

  console.log(validationIcon.classList);

  validationIcon.style.color = "white";
  validationIcon.classList.remove("d-none");
});
