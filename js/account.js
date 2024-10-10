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

// Fonction pour ouvrir la modal
function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

// Fonction pour fermer la modal
function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Fermer la modal en cliquant à l'extérieur
window.onclick = function(event) {
  const depositModal = document.getElementById('depositModal');
  const withdrawModal = document.getElementById('withdrawModal');
  if (event.target === depositModal) {
    depositModal.style.display = "none";
  } else if (event.target === withdrawModal) {
    withdrawModal.style.display = "none";
  }
};

function calculateAmount() {
  // Récupérer les valeurs des éléments pour le dépôt
  const depositAmount = document.getElementById("depositAmount").value;
  const feesField = document.getElementById("Fees");
  const netAmountField = document.getElementById("NetDepositAmount");

  // Récupérer les valeurs des éléments pour le retrait
  const withdrawAmount = document.getElementById("withdrawAmount").value;
  const withFees = document.getElementById("withdrawFees");
  const NetwithdrawAmount = document.getElementById("NetWithdrawAmount");

  // Calcul pour le dépôt
  if (depositAmount && depositAmount > 0) {
    const fees = depositAmount * 0.01;
    const netAmount = depositAmount - fees;
    
    feesField.value = fees.toFixed(2);  // Format avec 2 décimales
    netAmountField.value = netAmount.toFixed(2);
  } else {
    feesField.value = "";
    netAmountField.value = "";
  }

  // Calcul pour le retrait
  if (withdrawAmount && withdrawAmount > 0) {
    const Fees = withdrawAmount * 0.01;
    const netCash = withdrawAmount - Fees;
    
    withFees.value = Fees.toFixed(2);
    NetwithdrawAmount.value = netCash.toFixed(2);  // Mettre à jour la valeur correcte
  } else {
    withFees.value = "";
    NetwithdrawAmount.value = "";
  }
}

// Ajouter un événement pour recalculer à chaque saisie
document.getElementById("depositAmount").addEventListener("input", calculateAmount);
document.getElementById("withdrawAmount").addEventListener("input", calculateAmount);
