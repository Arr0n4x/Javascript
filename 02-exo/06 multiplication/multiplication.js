// Exo Table de multiplication

// Enoncé
/**
 * Demander à l'utilisateur un chiffre entre 1 et 10
 * Afficher la table de multiplication complete de ce chiffre dans la console
 * 
 * Ex
 * Voici la table de multiplication de 1
 * 0 X 1 = 0
 * 1 X 1 = 1
 * 2 X 1 = 2
 * Etc...
 */

//  let chiffre = window.prompt(`Entrez un chiffre entre 0 et 10`);
//  for(chiffre <= 10 ; chiffre = chiffre*0++){
//     console.log()
//  }
let nombre = window.prompt(`Entrez un chiffre netre 1 et 10`);

console.log(`Voici la table de multiplication de ${nombre}`);

for(let i = 0 ; i<= 10 ; i++){
    console.log(`${i} x ${nombre} = ${i * nombre}`);
}
