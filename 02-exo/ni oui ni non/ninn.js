// Exo Ni Oui Ni Non

// Enoncé
/**
 * Créer un programme qui demande à l'utilisateur si il veut jouer à ni oui ni non
 * Si l'utilisateur répond oui ou non, il a perdu. On lui affiche un message dans la console
 * Si il répond autre chose, on lui repose la question
 */

let reponse;

while( reponse != 'oui' && reponse != 'non'){
    reponse = window.prompt(`Voulez-vous jouer à ni oui ni non ?`);
}
console.log(`Vous avez perdu ! `);