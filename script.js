// Déclaration des variables
const colorBox = document.getElementById('color-box'); // La boîte dont la couleur va être changée
const changeColorButton = document.getElementById('change-color-btn'); // Le bouton pour changer la couleur

// Fonction pour générer une couleur aléatoire en format hexadécimal
function getRandomColor() {
    const letters = '0123456789ABCDEF'; // Caractères hexadécimaux possibles
    let color = '#'; // Initialisation de la couleur hexadécimale

    // Boucle pour générer 6 caractères hexadécimaux
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]; // Choisir un caractère aléatoire
    }

    return color; // Retourner la couleur générée
}

// Fonction pour changer la couleur de la boîte
function changeColor() {
    colorBox.style.backgroundColor = getRandomColor(); // Appliquer une couleur aléatoire à la boîte
}

// Ajouter un écouteur d'événements 'click' pour le bouton
changeColorButton.addEventListener('click', changeColor);
