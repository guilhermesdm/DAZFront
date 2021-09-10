class Buttons {
  constructor() {
      this.dropdownGenre = document.getElementById("dropdown-link-g");
      this.dropdownPublisher = document.getElementById("dropdown-link-p");
      this.dropdownDeveloper = document.getElementById("dropdown-link-d");

      this.dropdownDeveloper.addEventListener("click", this.toggleDeveloper);
      this.dropdownPublisher.addEventListener("click", this.togglePublisher);
      this.dropdownGenre.addEventListener("click", this.toggleGenre);
    };
  
  toggleGenre() {
    const genre = document.getElementById("dropdown-g");
    genre.classList.toggle("active");
  };
  
  togglePublisher() {
    const publisher = document.getElementById("dropdown-p");
    publisher.classList.toggle("active");
  };
  
  toggleDeveloper() {
    const developer = document.getElementById("dropdown-d");
    developer.classList.toggle("active");
  };
};

new Buttons()