/*
Créer un programme qui fait 10 tours de manège en affichant le numéro du tour à chaque tour dans la console :

Le manège démarre
C'est le tour numéro 1
C'est le tour numéro 2
...
C'est le tour numéro 10
Le manège s'arrête
*/

console.log(`le manège démarre`);
for( let tour = 1 ; tour<= 10 ; tour++){
    console.log( `C'est le tour numéro  ${tour}`);
}

console.log(`Le manège s'arrete`);