const navbarnav = document.querySelector(".nav");
const hm = document.querySelector("#hamburger-menu");
const navlinks = document.querySelectorAll(".nav a");
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const sb = document.querySelector(".search-button");
const autocompleteList = document.querySelector("#autocomplete-list");

// Hamburger menu toggle
hm.onclick = (e) => {
  navbarnav.classList.toggle("active");
  e.preventDefault();
};

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!hm.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});

// Close menu when clicking on a link
navlinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbarnav.classList.remove("active");
  });
});

// Search form toggle
sb.onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.remove("active");
};

// Close search form when clicking outside
document.addEventListener("click", (e) => {
  if (
    !sb.contains(e.target) &&
    !searchForm.contains(e.target) &&
    !autocompleteList.contains(e.target)
  ) {
    searchForm.classList.remove("active");
  }
});
