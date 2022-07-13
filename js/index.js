// hidden dropdown
const language__select = document.querySelector(".language__select");
const language__option = document.querySelector(".language__option");
const value__languge = document.querySelectorAll(".lg__value");
language__select.addEventListener("click", () => {
  language__option.classList.toggle("active");
});

[...value__languge].map((course, index) => {
  course.addEventListener("click", () => {
    value__languge[0].innerHTML = value__languge[index].outerHTML;
    if (index > 0) {
      language__option.classList.toggle("active");
    }
  });
});

const nav__languge = document.querySelector(".nav-laguage");
document.addEventListener("click", (e) => {
  if (nav__languge.outerHTML.includes(e.target.outerHTML) === false) {
    language__option.classList.remove("active");
  }
});
