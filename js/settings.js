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

function enableEditing(inputClass, editButtonId, saveButtonId) {
  // Récupérer tous les champs de saisie
  const inputs = document.querySelectorAll(inputClass);
  
  // Parcourir tous les inputs pour enlever readonly et ajouter une bordure
  inputs.forEach(input => {
      input.removeAttribute('readonly');
      input.classList.add('editable'); // Ajouter la classe pour la bordure
  });
  
  // Cacher le bouton Modifier et afficher le bouton Sauvegarder
  document.getElementById(editButtonId).style.display = 'none';
  document.getElementById(saveButtonId).style.display = 'inline-block';
}

// Utilisation de la fonction pour chaque section
document.getElementById('editButton').addEventListener('click', function() {
  enableEditing('.myInput_perso', 'editButton', 'saveButton');
});

document.getElementById('info__sup').addEventListener('click', function() {
  enableEditing('.myInput_sup', 'info__sup', 'saveinfo__sup');
});

document.getElementById('fin').addEventListener('click', function() {
  enableEditing('.myInput_fin', 'fin', 'saveinfo__fin');
});

document.getElementById('fin_sup').addEventListener('click', function() {
  enableEditing('.myInput_finsup', 'fin_sup', 'saveinfo__finsup');
});
