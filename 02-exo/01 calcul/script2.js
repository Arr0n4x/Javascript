// Enoncé
// Demander à l'utilisateur son prénom via un prompt
// Afficher dans la page : Bonjour "prénom de l'utilisateur"
// Demander à l'utilisateur de saisir 2 nombres entiers (Attention prompt() renvoie une chaine de caractère, voir parseInt() pour convertir en nombre entier)
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/parseInt
// Afficher le résultat de l'addition de ces chiffres dans une phrase de type : Le resultat est de xx. Merci d'avoir participé prénom.

 let prenom = window.prompt(`Bonjour ! quel est votre prénom ?`);
// document.write(`<p>Bonjour ! ${prenom} .</p>`);

// let premier = window.prompt('Veuillez fournir un premier nombre entier');
// let second = window.prompt('Veuillez fournir un second nombre entier');
// premier = parseInt(premier);
// second = parseInt(second);
// document.write(`Le total de vos nombre entier est ${premier + second}`);

let nombre1 = parseInt(window.prompt('Saisissez un nombre entier'));
let nombre2 = parseInt(window.prompt('Saisissez un deuxième nombre entier'));

document.write(`<p>Le resultat est de ${nombre1 + nombre2} merci d'avoir participer ${prenom}.`)