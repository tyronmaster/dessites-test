const consultButton = document.querySelector(".light__button");
const form = document.querySelector(".mainframe__form");
const closeBtn = document.querySelector(".close__form");

consultButton.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(form);
  form.classList.add("visible");
});

closeBtn.addEventListener("click", () => {
  form.classList.remove("visible");
});
