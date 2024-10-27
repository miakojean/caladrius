const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const myInputFields = document.querySelectorAll(".myInput")

myInputFields.forEach(inputField =>{
    inputField.addEventListener("input", checkInput);
    inputField.addEventListener("blur", checkInput);
});

function checkInput(event) {
    const inputField = event.target; // Récupérer l'input spécifique
    if (inputField.value.trim() !== "") {
        // Si l'input est rempli, ajouter la classe 'filled'
        inputField.classList.add("filled");
    } else {
        // Si l'input est vide, retirer la classe 'filled'
        inputField.classList.remove("filled");
    }
}
  
  