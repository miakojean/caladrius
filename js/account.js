// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

document.addEventListener("DOMContentLoaded", function() {
    // Sélectionne tous les boutons de dépôt et retrait
    const depositButtons = document.querySelectorAll(".deposit");
    const withdrawButtons = document.querySelectorAll(".withdraw");

    // Récupère les popups de dépôt et de retrait
    const popupDeposit = document.getElementById("popupForm");
    const popupWithdraw = document.getElementById("popupFormreservation");

    // Récupère les boutons de fermeture des popups
    const closeDeposit = document.getElementById("closeOrder");
    const closeWithdraw = document.getElementById("closeReservation");

    // Afficher la popup de dépôt lorsqu'on clique sur un bouton dépôt
    depositButtons.forEach(button => {
        button.addEventListener("click", function() {
            popupDeposit.style.display = "block";
        });
    });

    // Afficher la popup de retrait lorsqu'on clique sur un bouton retrait
    withdrawButtons.forEach(button => {
        button.addEventListener("click", function() {
            popupWithdraw.style.display = "block";
        });
    });

    // Fermer la popup de dépôt
    closeDeposit.addEventListener("click", function() {
        popupDeposit.style.display = "none";
    });

    // Fermer la popup de retrait
    closeWithdraw.addEventListener("click", function() {
        popupWithdraw.style.display = "none";
    });

    // Fermer les popups si on clique en dehors du contenu
    window.addEventListener("click", function(event) {
        if (event.target == popupDeposit) {
            popupDeposit.style.display = "none";
        }
        if (event.target == popupWithdraw) {
            popupWithdraw.style.display = "none";
        }
    });
});

function calculerFrais(){
    let montant = parseFloat(document.getElementById('montant').value)|| 0;
    let frais = montant *0.015;
    let montantNet = montant - frais;

    document.getElementById('frais').value = frais.toFixed(2);
    document.getElementById('net').value = montantNet.toFixed(2);
}

document.getElementById('montant').addEventListener('input', calculerFrais);