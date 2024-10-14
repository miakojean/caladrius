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

// Fonction pour activer les champs d'input et select
function enableEditing(inputClass, editButtonId, saveButtonId, selectClass = null) {
  // Récupérer tous les champs d'input
  const inputs = document.querySelectorAll(inputClass);

  // Activer les inputs et ajouter une bordure ou un style distinctif
  inputs.forEach(input => {
    input.removeAttribute('readonly');
    input.classList.add('editable');  // Utilisez une classe CSS pour styliser les champs activés
  });

  // Si un selectClass est spécifié, activer également les selects
  if (selectClass) {
    const selects = document.querySelectorAll(selectClass);
    selects.forEach(select => {
      select.removeAttribute('disabled');
      select.classList.add('editable');  // Ajouter un style pour distinguer les champs activés
    });
  }

  // Masquer le bouton "Modifier" et afficher le bouton "Sauvegarder"
  document.getElementById(editButtonId).style.display = 'none';
  document.getElementById(saveButtonId).style.display = 'inline-block';
}

// Ajout d'écouteurs pour chaque section
document.getElementById('editButton').addEventListener('click', function(event) {
  event.preventDefault();  // Empêche le rechargement de la page
  enableEditing('.myInput_perso', 'editButton', 'saveButton');
});

document.getElementById('info__sup').addEventListener('click', function(event) {
  event.preventDefault();
  enableEditing('.myInput_sup', 'info__sup', 'saveinfo__sup');
});

document.getElementById('fin').addEventListener('click', function(event) {
  event.preventDefault();
  enableEditing('.myInput_fin', 'fin', 'saveinfo__fin', '.myInput_fin');  // Inclut les selects
});

document.getElementById('fin_sup').addEventListener('click', function(event) {
  event.preventDefault();
  enableEditing('.myInput_finsup', 'fin_sup', 'saveinfo__finsup');
});

