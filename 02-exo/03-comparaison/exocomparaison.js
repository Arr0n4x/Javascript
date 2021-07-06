// Enoncé
/**
 * Demandez l'age à l'utilisateur
 * S'il a moins de 18ans -> lui écrire dans le navigateur : Vous êtes mineur
 * S'il a 18 ans ou plus -> lui écrire : Vous êtes majeur
 * S'il a 100 ans ou plus de 100 ans -> lui écrire : Vous etes centenaire
 */

 let age = window.prompt('Quel age as tu ?')

// if(age < 18){
//     document.write(`Vous êtes mineur`);
// }else if (age >= 100){
//     document.write(`vous êtes centenaire`);
// }else{
//     document.write(`vous êtes majeur`);
// }

let est_min = age < 18;
let est_majeur = age >= 18;
let est_centenaire = age >= 100;

document.write(`
    <p>Vous êtes mineur : ${est_min} </p>
    <p>Vous êtes majeur : ${est_majeur}</p>
    <p>Vous êtes centenaire : ${est_centenaire}</p>
`);

