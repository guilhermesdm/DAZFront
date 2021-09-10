const dropdownGenre = document.getElementById("dropdown-link-g");
const dropdownPublisher = document.getElementById("dropdown-link-p");
const dropdownDeveloper = document.getElementById("dropdown-link-d");

function toggleGenre() {
  const genre = document.getElementById("dropdown-g");
  genre.classList.toggle("active");
}

function togglePublisher() {
  const publisher = document.getElementById("dropdown-p");
  publisher.classList.toggle("active");
}

function toggleDeveloper() {
  const developer = document.getElementById("dropdown-d");
  developer.classList.toggle("active");
}

dropdownDeveloper.addEventListener("click", toggleDeveloper);
dropdownPublisher.addEventListener("click", togglePublisher);
dropdownGenre.addEventListener("click", toggleGenre);
