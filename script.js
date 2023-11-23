const consultButton = document.querySelector(".light__button");
const closeBtn = document.querySelector(".close__form");
const main = document.querySelector(".main");

consultButton.addEventListener("click", (e) => {
  main.classList.add("formshow");
});

closeBtn.addEventListener("click", () => {
  main.classList.remove("formshow");
});

main.addEventListener("click", (e) => {
  if (e.target.classList.contains("formshow")) {
    main.classList.remove("formshow");
  }
});
