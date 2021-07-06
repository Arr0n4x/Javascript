// LES BASES DE JAVASCRIPT

// 01 - commentaire, affichage, concaténation

// commentaire sur une seule ligne 


/*
    commentaire 
    multiligne
*/

// Affichage

// Ecrire du texte dans la page en js 
document.write("Bienvenue dans le monde du JS");
//objet.fonction(`argument`);

//document -> objet
//write -> fonction
/*fonction -> procedure javascript , un ensemble d'insctruction effectuant 
une tache précise */
//toujours le nom de la fonction + parenthèse
//objet.fonction(arguement)
//finir l'instruction Javascript par un ; ( point virgule).
//chaine de caractère -> toujours entre guillemet simple ou double

document.write("<h2>01 commentaire, affichage, concaténation</h2>")

//Boite de dialogue
//  window.alert("Bonjour ! ");
// ou 
// alert('bonjour !');

//Boite de dialogue avec bouton de confirmation et annulation 
// window.confirm('Etes-vous pret ???');

//boite de dialogue avec un champs à remplir
// window.prompt('Quel age as tu ?');

//Message écrit dans la console de debug
// console.log('Console de debug');

// ------- Concaténation

//la concaténation va nous permettre d'assembler plusieur chaines de caractères ensemble

document.write('Bonjour ' + ' tout le ' + 'monde.');

//-- 02 - Variable, constante

// Une variable est une 'boite virtuelle dans laquelle nouis allons stocker une donnée.
// Cette donnée peut etre de n'importe quel type, comme des chifres, des caractère ..etc

//- Variable : Déclaration et affectation

// Keyword var

var pays = "France";

// le mot clé var permet de déclarer la variable nommée "pays"
// Caractères acceptés : 0 à 9 de A à Z de a à z $ _
// Par convention, $ de s'utilise pas ( reservé aux librairies jquery par exemple)
// et jamais de _ comme 1er ou dernier caractère d'un variable.
// Jamais de chiffre au debut.
//Sans accent ni caractère spéciaux
// Essayer d'être le plus descriptif possible
// Ne pas utiliser les mots clés reservés JS ex: var for class document....
//.etc.
//nomDeLEleve -> CamelCase
// nom_de_eleve -> snake case

//Une variable déclarée est utilisable partout dans le code
document.write(" Nous sommes en " + pays + "<br>");

//Déclaration et affectation de plusieurs varaibles sur une meme ligne 
//(pas recommandé car pas asez clair)
var prenom = "Bruce", nom = "Wayne";
document.write("Bonjour " + prenom + " " + nom + "<br>");

prenom = 'steven';
document.write("Bonjour " + prenom + '' + nom + '<br>');

var fruit = 'pomme';
document.write(fruit + '<br>');
fruit = fruit + 'fraise';
// ajout d'une valeur à une variable
// fruit = fruit + ' fraise';
// ou en raccourci : 
fruit += 'fraise';
document.write(fruit + '<br>');

//Affichage d'une variable l'affectation
var myVar;// Déclaration d'une variable sans lui affecter de valeur 
console.log(myVar); //undefined
myVar = 'Hello World !'; // A  ffectation d'une variable
console.log(myVar);

//Affichage d'une variable qui n'existe pas 
//console.log(myvar2); // erreur dans la console -> not defined

//Affichage d'une variable avant sa déclaration
console.log(myVar3);
var myVar3; // undefined mais pas d'erreur alors que la variable est déclaré aprs son affichage
// -> subtilité du JS, le hoisting
//Avant d'executer le code, le navigateur va créer toutes les boites virtuelles et dans un deuxieme 
//temps executer le reste du code . Donc quand on appelle console.log, la variable MyVar3 existe déjà.

//--- délcaration de variable avec le Keyword let
// apparu en ES6 -> quasi identique à var

var myVar4 = 'Hello';
console.log(myVar4);
var myVar4 = 'Salut'; // on a réassigner une nouvelle valeur à la variable MyVar4
console.log(myVar4);

let myVar5 = 'Hello';

// let myVar5 = 'Salut'; -> erreur dans la console, on ne peut pas redeclarer
// une variable avec le même non si elle a déjà été utilisé au dessus 

//Portée de bloc
// Un bloc est une suite d'instruction entre accolade
/*
{
    var myVar6 = 'Je suis dans un bloc' ;
}
console.log(myVar6); -> tout fonctionnera, la variable myVar6 sera accessible
-> var ne reconnait pas la portée de bloc, une variable déclaré dans un bloc,
sera accessible de manière globale

//Exemple avec let
{
    let myVar7 = 'Je suis dans un bloc let';
    {
        console.log(myVar7) -> accesible
    }
}
console.log(myVar7); -> erreur dans la console : not defined
-> un let déclaré dans un bloc à une portée de bloc -> accesbile seulement depuis le bloc
ou elle a été déclaré ou ans les blocs enfants 
*/

//---- Constantes

const VILLE = 'Paris';// par convention une constante est écrit en majuscule.
// subtilité de la constante, on doit assigné une constante sur la même ligne qu'elle à été déclaré.

// VILLE = 'Rome'; -> erreur on ne peut pas changer la valmeur d'une constante

/*
CONCLUSION SUR LES VARIABLES

2 pratiques se dégagent :

    -1/ la modérée : bannir autant que possible le mot clé var, utiliser let
        pour les variables et const pour les constantes

    -2/ la radicale : bannir totalement le mot clé var, utiliser uniquement
    const, et let SI et SEULEMENT SI la valeur de cette variable peut changer.
*/

// --- Guillemets simple ou doubles 


document.write("<p>Je m'appelle Steven</p>");

document.write('<p>Je m\'appelle Steven</p>');
document.write('<p>Je m\'appelle' + prenom + '</p>');

//Pour eviter les problèmes de guillemets simples, on utilise un caractère d'échappement -> le backslash
// mac-> alt maj slash
// pc -> alt gr 8

//ES6
// Pour eviter ce problème, on va pouvoir utiliser le backtit gràce à ES6
// la concaténation change également, et on va pouvoir écrire sur plusieurs lignes
// Backtik
// PC -> alt GR 7
// mac -> touche livre à gauche d'entrée

document.write(`<p>Je m'apelle steven avec le backtip, je peux faire tous les """ ''' 
    mais en plus je peux 
    revenir  à la ligne </p>`)
document.write(`<p>Je m'apelle ${prenom}</p>`);


let monPrenom = 'Raphaël';
let monAge = 30;

document.write('<p>je m\'apelle ' + monPrenom + 'et j\'ai' + monAge + ' ans.</p>')
document.write(`<p>Je m'apelle ${monPrenom} et j'ai ${monAge} ans`)

/*
   EXERCICE
   Declaration de variables :
   -> nom de la variable : jour
   -> valeur : Vendredi

   -> nom de la variable : jourNumero
   -> valeur : 9

   -> nom de la variable : mois
   -> valeur : Janvier

   -> nom de la variable : annee
   -> valeur : 2021

   Afficher dans le navigateur la phrase suivante en y concaténant les variables. Vous utiliserez les 2 techniques ES5 et ES6 :
   "Bonjour ! Nous sommes le vendredi 9 Avril 2021. C'est bientôt le week-end."
   */

let jour = 'Vendredi';
let jourNumero = 9;
let mois = 'Avril'
let annee = 2021

document.write('<p> \" Bonjour ! nous sommes le ' + jour + " " + jourNumero + " " + mois + " " + annee + '. C\'est bientôt le week-end.\" </p>')
document.write(`<p> "Bonjour ! nous sommes le ${jour} ${jourNumero} ${mois} ${annee}. C'est bientôt le week-end"`)

/*
Exercice
Demander le prenom de l'utilisateur via un prompt et enregistrer la valeur dans une variable prenomUtilisateur.
Faire afficher dans le navigateur :
Bonjour prenomUtilisateur !
AIDE :
Pour enregistrer la valeur d'un prompt dans une variable :
let maVariable = window.prompt('votre question');
Quand l'utilisateur cliquera sur le bouton ok du prompt, la valeur sera enregistré dans la variable (maVariable) et vous pourrez l'utiliser.
*/

//réponse exercice 

// let identify = window.prompt(`Bonjour ! Identify Yourself`);

// document.write(`<p>Welcome to this page Mister ${identify} .</p>`);

// document.write('<p>Welcome to this page Mister ' + identify + '.</p>');


// -- 03- Type de données et opérateurs

document.write(`<h2>03 - Type de données et opérateurs<h2/>`);

//--- Number

let chiffre = 20; // Affectation tel quel, sans guillements 
let negatif = -10; // les number négatif sont possibles
let chiffreAVirgule = 5.5; // Chiffre à virgule, à écrire avec un point 


// Utilisation de l'opérateur typeof pour connaitre le type d'une variable
console.log(typeof (chiffre)); //Number


//--- String (chaine de caractère)

let monTexte = 'Voici un texte.';// entre guillemets simples, doubles ou backtik

console.log(typeof (monTexte)); //string

let numero = '10';

console.log(typeof (numero)); //string

//---Boolean (boléens)

// le type booléens ne prend que 2 valeurs : TRUE ou FALSE
let choix = true;
console.log(typeof (choix)); // boolean

//--- Les opérateurs arithmétiques 

// Dans ce cas le + me sert à la concaténation
let resultat = '10' + '5'
console.log(resultat);

let resultat1 = 10 + 5; // Addition 
console.log(resultat1); // 15

let resultat2 = 10 - 5; //soustraction
console.log(resultat2); //5

let resultat3 = 10 / 5; // division
console.log(resultat3); // 2

let resultat4 = 10 * 5; // multiplication
console.log(resultat4); // 50

let resultat5 = 10 % 3; // modulo pour claculer le reste 
console.log(resultat5); // 1


// Importance des parenthèses
let resultat6 = 2 + 3 * 5; // * est prioritaire
console.log(resultat6); //17
let resultat7 = (2 + 3) * 5;// + est prioritaire
console.log(resultat7); //25 

//Ajout d'une valeur à une variable number
let chiffre1 = 5;
chiffre1 = chiffre1 + 13;
console.log(chiffre1); //18
//chiffre1 = chiffre1 + 13;
// ou
chiffre1 += 13;
console.log(chiffre1); //18
//fonctionne avec tout les opérateurs : += -= *= /= %=

//Opérateurs ++
let chiffre2 = 5;
chiffre2++;//incrémentation de 1
console.log(chiffre2); // 6
chiffre2++;
console.log(chiffre2); // 7

// Opérateurs --
let chiffre3 = 5;
chiffre3--;
console.log(chiffre3); //4

//Demander l'age de l'utilisateur , faire afficher dans le navigateur 
//l'age qu'il aura l'année prochaine

// let age = window.prompt('Votre age ? ');
// windo.prompt() renvoie une chaine de caractère, pour utiliser l'information
// et en faire un calcul nous avons besoins de modifier son type. Grace à ParseInt()
// qui transforme une chaine de caractère en number entier
// console.log(age);
// age = parseInt(age);
// console.group(age)
// console.log(`Dans un an tu auras ${age + 1}`);

// -- 04 -- Conditions et opérateurs de comparaison
document.write(`<h2>04 - Conditions et opérateurs de comparaison</h2>`);

// Opérateurs de comparaison pour structure conditionnelle 

/*
> strictement supérieur
< strictement inférieur
>= supérieur ou égale
<= inférieur ou égale
== comparaison en valeur 
=== comparaison en valeur et en type 
!= différent de 
 
*/

let op1 = 1;
let op2 = 2;
console.log(op1 > op2); // false
console.log(op1 < op2); // true
console.log(op1 >= op2); // false
console.log(op1 <= op2); // true 

let op3 = 1;
let op4 = '1';
console.log(op3 == op4); // true -> ici comparaison seulement de valeur
console.log(op3 === op4); // false -> ici comparaison de valeur et de type 

// Opérateurs logiques 

/* 
    AND -> && 
    OR -> ||
    NOT ->

    //---AND -&&
    // L'opérateur and evalue le resultat en TRUE si les 2 expressions sont TRUE
       Si l'une des deux expressions testées est FALSE alors le resultat sera FALSE
    */

console.log(true && true); //true
console.log(true && false); // false

//---OR -||
// l'Opérateur OR évalue le résultat en TRUE si une OU l'autre OU les 2 expressions
// sont TRUE. Si les 2 expressions sont FALSE alors le résultat sera FALSE.
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false

//---NOT - !
// L'opérateur NOT transforme ce qui est true en false et vice versa 
console.log(!true); //false
console.log(!false); // true


// Structure conditionnelle if, else if, else

/*
if(instruction qui vaut true){
    code à executer si c'est vérifié
}else if(sinon si instruction){
    code à executer si c'est vérifié
}else{
    code à executer dans tous les autres cas 
}

*/
let a = 10;
let b = 5;
let c = 2;

// -- if else

// a est il sup^érieur à b ?

if (a > b) {
    document.write(`<p>a est bien supérieur à b</p>`);
} else {
    document.write(`<p>a est inférieur à b </p>`);
}

// --- if avec and 
// a est-il supérieur à b ET b supérieur à c

if (a > b && b > c) {
    document.write('<p>ok pour les deux conditions</p>');
}

// -- if avec or

// a est-il égale à 9 alors b est inférieur à 9 

if (a == 9 || b < 9) {
    document.write(`ok pour au moins l'une des deux conditions</p>`);
}

// -- if / else if / else

// a est il égale à 8 
// a est il différent de 10 *

if (a == 8) {
    documenjt.write(`1- a est égale à 8`);
} else if (a != 10) {
    document.write(`2- a est différent de 10<br>`);
} else {
    document.write(`3- tout le monde à faux !<br>`);
}

//-- Comparaison de valeur 

let varA = 1;
let varB = '1';

if (varA == varB) {
    document.write(`varA et varB ont la meme valeur<br>`);
}
// Comparaison de valeur et de type
if (varA === varB) {
    document.write(`varA et varB ont la meme valeur et le meme type<br>`);
} else {
    document.write(`Faux<br>`);
}

// Condition ternaire
let meteo = 'pluie';
document.write((meteo == 'pluie') ? 'prends un parapluie<br>' : 'Mets un short<br>');

let MonAge = 36;

document.write((MonAge >= 18) ? 'tu es majeur<br>' : 'Tu n\'es pas majeur<br>');

//--- Condition Switch

let couleur = 'bleu';


switch (couleur){
    case 'bleu':
        document.write(`<p>Vous aimez le bleu</p>`);
        break; //signifie que l'on a  terminé 
        case 'rouge':
        document.write(`<p>Vous aimez le rouge</p>`);
        break; //signifie que l'on a  terminé 
        case 'vert':
        document.write(`<p>Vous aimez le vert</p>`);
        break; //signifie que l'on a  terminé 
     default : 
     document.write(`<p>Vous n'aimez ni le bleu, ni le vert, ni le rouge...</p>`);
     break;
}
//-- 05 Les boucles ( structures itératives)
document.write (`<h2>05 - Les boucles (structures itérative)</h2>`);

//----While

// Permet d'executer une ou plusieurs instructions un certain nilbre de fois

//Syntaxe
/*

while( expression qui vaut true ou false){
    // code à répéter
}
*/

//0---1---2---3---4---5---

var i = 0; // on initialise une  variable à 0
while( i<= 5){
    document.write( i + '---');
    i++; // équivaut à i += 1
}
document.write(`<br>`);


var i = 0;
while (i <= 5){
    if(i == 5){
        document.write(i);
    }else{
        document.write( i + '---');
    }
    i++;
}
document.write(`<br>`);

//--- for
// Permet d'executer une ou plusieurs instructions un certain nombre de fois 

/*
    Syntaxe

    for(initialisation ; condition de continuation ; incrémentation){
        // code à executer
    }
*/ 
for( var i = 0 ; i<= 5 ; i++){
    document.write ( i +'---');
}
document.write(`<br>`);

// Exemple complexe 
document.write(`<table border=5 style="border-color:teal;">`);
for( var i = 0 ; i <= 100 ; i+=10){
    document.write(`<tr>`);
    for( var j = i ; j <= i+9 ; j++){
        document.write(`<td>${j}</td>`);
    }
    document.write(`</tr>`);
}
document.write(`</table>`);

// -- 06 Fonctions ( prédéfinies et utilisateurs)
document.write(`<h2>06 - Fonctions ( prédéfinies et utilisateurs)</h2>`);

/*
Comme dans tous les langages de programmtion, le JS possède des fonctions.
Ce sont des morceaux de code encapsulés qu'on appel au besoin pour executer
une action précise
*/

//--- Fonctions prédéfinies

//- Fonctions prédéfinies sur les number

//-- parseInt() -> converti en nombre entier
console.log(parseInt('45')); // 45 converti en number
console.log(parseInt('45.33')); // 45
console.log(parseInt('45px')); // 45

//-- parseFloat()-> converti en nombre à virgule
console.log(parseFloat('45.33')) //45.33
console.log(parseFloat('45.33px'))// 45.33

//- toFixed() -> défini un nombre de chiffre après la virgule
const testNumber = 1.55555555555555555555;
console.log( testNumber.toFixed(2)); //'1.56' -> retourne une chaîne de caractère avec nombre de chiffre après la virgule passé en paramètre.
console.log(parseFloat(testNumber.toFixed(2))); // 1.56

//-- Obejt natif Math

// const test_math = Math.pow(2, 3); //8 -> puissance
// const test_math = Math.PI;
// const test_math = Math.ceil(1.01); // 2-> va chercher le nombre entier supérieur 
// const tes_math = Math.floor(1.9); // 1 -> retourne le nombre entier inférieur
// const test_math = Math.round(1.9); // 2 -> retourne le nombre entier le plus proche 
// const testMath = Math.max(10, 8, 5, 66); // 66 -> retourne la valeur la plus haute
// const test_math = Math.min(10, 8, 5, 66); //5 -> reoutnre la valeur la plus basse
//const test_math = Math.random();// -> retourne un nombre décimal entre 0 et 1


//Création d'un chiffre aléatoire entre 0 et 100
const test_math = Math.round(Math.random() * 100);

console.log(test_math);

// formation@stevenberg.fr

//-- Les fonctions prédéfinies sur des chaines de caractères

let phrase = 'Salut';
document.write(phrase);
// Cette variable contient du texte ( chaine de caractère), c'est en réalité un objet
// string, qui possède plusieurs méthiodes et 1 propriété.

// Propriété pour afficher le nombre de cacractère : lengh
console.log(phrase.length); // 5 -> nombre de caractère dans la phrase salut.

// indexOf -> retourne la position de l'argument passé en paramètre.
console.log(phrase.indexOf('l'));//2 -> car retounre l'index du caractère. les 
//index commencent à 0

// ;toLowerCase() -> transforme une chaine de caractère en minuscule
console.log(phrase.toLowerCase());// salut en minuscule

// .toUpperCase()-> transforme une chaine de caractère en majuscule
console.log(phrase.toUpperCase()); // SALUT

let phrase2 = '   Bonjour    '
// .trim() -> supprimer tous les espaces avant et après 
console.log(phrase2.trim());

let phrase3 = 'Je suis le soleil';

// .endsWith() -> determine si la chaine de caractère se termine par ce qui est passé en paramètre.
console.log(phrase3.endsWith('eil'));

// .startWith()-> determine si la chaine de caractère commence par ce qui est passé en paramètre
console.log(phrase3.startsWith('eil'));// false

//.replace() -> permet de remplacer une partie de la chaine de caractère par une autre
console.log(phrase3.replace('suis', 'ne suis pas'));

//--- Fonctions utilisateurs.

/*
    DON'T REPEAT YOURSELF -> DRY : Philosophie informatique pour éviter la redondace d'actions.
    A chaque fois que l'on repete une action, voir s'il n'est pas possible de créer une fonction
*/


// Déclaration de fonction appelée Function Statement

function  maFonction(){
    document.write(`<p>Ma fonction a été appelé !</p>`);
}

//Execution de la fonction ou invoquer une fonction 
maFonction();
maFonction();
maFonction();

// Syntaxe différente pour déclarer une fonction
// appelé expression de fonction -> qui consiste assigner une fonction à une variable.

const direBonjour = function(){
    document.write(`<p>Bonjour tout le monde</p>`)
}
direBonjour()
direBonjour()
direBonjour()

// Fonction avec paramètre
function direBonjourA(prenom){
    document.write(`<p>Bonjour ${prenom.toUpperCase()}</p>`)
}
direBonjourA('Sonia');
direBonjourA('Remy');

// Valeur de retour
// Pour avoir une valeur de retour, on utilise mot clé return
let firstName = 'Bruce';

function get_first_name(){
    return firstName;
}
document.write(`Bonjour ${get_first_name()}`);


function addition(num1, num2){
    return num1 + num2;
}
document.write(`<p>Le resultat est de : ${addition(8,5)}</p>`);

//--Fonctions anonymes et auto invoqué (immediately Invoked Functions)

(function (){
    let variable = 'Je suis disponible seulement dans cette fonction';
    console.log( variable);
    document.write(`<p>Cette fonction est automatiquement executée</p>`);
})(); // La paire de parenthèse fermées à la fin permet l'execution immédiate de la fonction
    //console.log(variable);
    let variable = 'Je suis disponible dans le contexte globale';
    console.log(variable);

    
// Exercice

//Creer une fonction pour raccourcir document.write() -> d()

// function d(argument){
//     document.write(`<p>${argument}</p>`);
// }


//creer une fonction pour raccourcir document.write() avec 2 parametres : le premier le contenu et pour le deuxième on veut pouvoir 
// choisir un modele d'affichage 
// d('Je suis un texte'); // -> <p>
// d('Je suis un texte en balise h2', 1); // -> h2





function d(contenu, modele){
    if(modele == 1){
        document.write(`<h2>${contenu}</h2>`);
    }else{
    document.write(`<p>${contenu}</p>`);
    }
}
d('Je suis un texte en balise',1);

//-- Les fonctions fléchées

d(`<strong>Les fonctions fléchées</strong>`);

const funcFlech = (param) => {
    d(param);
}
funcFlech('Je suis une fonction fléchée');

// on peut omettre les accolades
const funcFlech2 = (a, b) => d(a + b);
funcFlech2(1,2); //3

//-- Les fonctions de rappel (callback)
d(`<strong>Les fonctions de rappel (callback)</strong>`);
// Une fonctrion de rappel ou callback est une fonction passée en paramètre
//d'une autre fonction et qui sera executée par cette dernière

function BonjourCallBack(){
    return 'Bonjour';
}
function byeCallBack(){
    return 'Aurevoir';
}
function BonjourUser(prenom, fonction){
    return fonction() + prenom;
}
d(BonjourUser('Joe', BonjourCallBack));
d(BonjourUser('Joe', byeCallBack));
// -- 07 - Array (Tableau)
d(`07 - Array (Tableau)`,1);


    //Les arrays permettent de conserver plusieurs valeurs au sein d'une variable 
    // les arrays sont des objet
    //Déclaration d'un array
    let tableau = []; // déclaration d'un tableau vide 

    // Déclaration et affectation
    let liste_fruit = ['banane', 'orange','framboise'];

    console.log(liste_fruit);

    // Acceder aux éléments (propriétés) d'un tableau
    d(liste_fruit[0]);
    d(liste_fruit[1]);

    //Acceder au dernier element
    d(liste_fruit.length); // 3 elements dans le tableau liste_fruit
    d(liste_fruit[liste_fruit.length -1]);

    //Modifier un élement dans un tableau
    liste_fruit[0] = 'pomme';
    console.log(liste_fruit);

    // Fonction prédéfinies join() -> crée et renvoie une nouvelle  chaîne de caractère 
    // en concaténant tous les éléments d'un tableau. La concaténation utilise la virgule ou une autre chaine, 
    // comme séparateur, fournie en argument 
    d(liste_fruit.join());
    d(liste_fruit.join(' /'));
    d(liste_fruit.join(' |||| '));

    // Inbrication de tableaux
    let liste_course = [['fraise', 'pomme'], ['courgette','carotte']];

    //Afficher un tableau
    d(liste_course[1]);

    // Afficher un élément précis du tableau
    d(liste_course[0][1]); //pomme

    // Afficher le dernier element du deuxième tableau 
    d(liste_course[1][liste_course[1].length-1]); // carotte

    //Ajouter des éléments à un tableau
    let etudiants = ['Rémy','Nicolas','Laure'];

    //Rappel : on peut modifier une entrée dans un tableau en lui assignant une nouvelle valeur
    etudiants[0] = 'Marie';
    d(etudiants);

    //Ajout d'un élément au début d'un tableau -> unshift()
    etudiants.unshift('Julie');
    d(etudiants);
    etudiants.unshift('Sylvain', 'Mike');
    d(etudiants);

    // Ajout d'un element en fin de tableau -> push()
    etudiants.push('Sonia', 'Kamel');
    d(etudiants);

    // fonction splice() -> ajouter ou supprimer
    // - ajout
    // etudiants.splice(1 = index de depart,2 = nombre d'element à supprimer, 3 : element à supprimer);
    etudiants.splice(1, 0, 'Audifax');
    d(etudiants);
    // - supprimer
    etudiants.splice(3, 2);
    d(etudiants);

    // supprimer au debut
    etudiants.shift();
    d(etudiants);

    //supprimer à la fin
    etudiants.pop();
    d(etudiants);

    //--Trouver un élément dans un tableau
    // Trouver l'emplacement d'un elt grace à son index
    d(etudiants.indexOf('Mike')); // 1 -> indoexOf() retourne l'index de l'element passé  en paramètre
    // -> retourne -1 s'il ne le trouve pas (compare en valeur et en type)

    //Savoir si un élément existe
    d(etudiants.includes('laure')); // true -> inculdes retourne true ou false (compare en valeur et en type.)

    //ES6 -> spread operator
    etudiants = [...etudiants, 'Jordan'];// Ajout en fin de tableau
    d(etudiants);
    etuidants =['Baptiste', ...etudiants]; //Ajout en début de tableau
    d(etudiants);


    //Convertir une chaine de caractère en tableau
    let phrase4 = 'métro, boulot, dodo';
    console.log(phrase4);
    console.log(phrase4.split(','));

    // ITERER SUR UN TABLEAU
    let meubles = ['table','chaise','bureau'];

    // //Boucle for
    // for(let i = 0 ; i < meubles.length ; i++){
    //     d(meubles[i]);
    // }

    // //Boucle for in 
    // for(let index in meubles){
    //     d(meubles[index]);
    // }

    // Boucle for of -> METHODE RECOMMANDÉ 
    for(let element of meubles){
        d(element);
    }
    // Boucle forEach -> methode recommandée si besoin de l'index
    meubles.forEach(function(value, index){
        d(`value: ${value}, index ${index}`);
    })

    //exercice
    // Ecrire un algorithme qui calcule la somme des valeurs d'un tableau.
    // a fairte en boucle for, for in, for of

    let chiffres = [10, 15, 20, 15, 14, 8];
    

    // for(let i = 0; i< chiffres.length; i++ ){
    //     chiffres+= Number(chiffres[i]);
    // }
    let somme = 0;
    for(let i = 0 ; i < chiffres.length ; i++){
        somme = chiffres[i] + somme;
        // i : 0 -> 1 er tour de boucle : somme = 10 + 0
        // i : 1 -> 2 er tour de boucle : somme = 15 + 10
        // i : 2 -> 3 er tour de boucle : somme = 20 + 25
        // i : 3 -> 4 er tour de boucle : somme = 15 + 45
        // i : 4 -> 5 er tour de boucle : somme = 14 + 60
        // i : 5 -> 6 er tour de boucle : somme = 8 + 74
    }
    d(somme);

     let somme2 = 0;
     
     for(let index in chiffres){
         somme2 += chiffres[index];
     }
     d(somme2);

     let somme3 =0;
     for( let chiffre of chiffres){
         somme3 += chiffre;
     }
     d(somme3);

     // Exo 2
     // En partant de tableauMaj, enregister tous les elements dans un nouveau tableau (tableauMin) mais en minuscule
     let tableauMaj = ['UN', 'DEUX', 'TROIS'];
     let tableauMin = [];
     //Fonction pour ajouter un element à un tableau : .push()
     //Fonction pour transformer une chaine de caractère en minuscule : .toLowerCase()

     for(let element of tableauMaj){
          tableauMin.push(element.toLowerCase());
     }
     d(tableauMin);    

     let fruits = ['banane', 'orange','pomme','fraise','poire','cerise'];
    //  let fruitMAJ= [];
    //  let fruitliste=[];

    //  for (let element of fruits){
    //      fruitMAJ.push(element.toUpperCase());

    //  }

    //   for(let element of fruitMAJ){
    //       fruitliste.push(`<ul><li>${element}</li></ul>`);
    //   }

    //   d(fruitliste);

      d(`<ul>'`);
      for(let fruit of fruits){
          d(`<li>${fruit.toUpperCase()}</li>`);
      }
      d('</ul>');



      // -- 08 - OBJET 
      d(`08 - Objet`,1);
     
     /* 
     Objet > ensemble de paires clé:valeur
     Une paire de clé / valeur est appelée UNE PROPRIETE
     *CLE* -> la CLE est comme une VARIABLE
     *VALEUR* -> tous les types de données (number,string, boolean, array....) 
     */ 
    // Déclarer un OBJET
    // 1
    let monObjet = {}; // création de la manière appelée OBJECT LITERAL NOTATION (OLN)
    console.log(monObjet);

    //2
    let monObjet2 = Object();
    console.log(monObjet2);

    // 3 -> constructor
    let monObjet3 = new Object();
    console.log(monObjet3);

    // Exemple d'objet
    let employe = {
        age: 32,
        fonction: 'vendeur',
        salaire: 24000
    }
    console.log(employe);
    // age, fonction, salaire -> *CLE* (nom de propriétés)
    // 32, vendeur, 24000 -> *VALEUR*

    console.log(employe.age); //32
    console.log(employe.fonction); // vendeur

    // Nouvel objet
    let personnage = {
        nom: 'Stark',
        prenom: 'Ned',
        age: 35,
        loisirs: ['Manger','Boire','Tuer'],
        famille:{
            epouse: 'Catelyn',
            enfants:['Robb','Sansa','Arya','Bran','Rickon','Jon']
        },
        carteIdentite: function(){
            return `Nom : ${this.nom} -Prenom : ${this.prenom} -Age : ${this.age}`
        }
    }

    // Affichage d'une *PROPRIETE*

    d(personnage.nom);//Stark
    d(personnage['prenom']);//Ned

    // On peut utiliser une variable(let) pour afficher une propriété
    let agePersonnage ='age';
    d(personnage[agePersonnage]);//35
    d(personnage['age']);
    d(personnage.age);

    // Assigantion d'une nouvelle valeur à une clé 
    personnage.age = 36;
    d(personnage.age); //36

    // Assignation d'une nouvelle association clé / valeur
    personnage.isAlive = true;
    console.log(personnage);

    d(personnage.famille.epouse);
    d(personnage.famille.enfants);
    d(personnage.famille.enfants[3]);
    // Methode (fonction dans un objet)
    d(personnage.carteIdentite());

    // Tester l'existence d'une propriété

    if(personnage.nom){
        d(`Le personnage a un nom`);
    }else{
        d(`le personnage n'a pas de nom`);
    }

    //Teste de l'existence d'une clé sur un objet
    if('nom' in personnage){
        d(`La clé nom existe`);
    }else{
        d(`La clé nom n'existe pas`);
    }
    //Supprimer ou écarter des propriétés

        // Utilisation du mot clé delete
        delete personnage.isAlive;
        console.log(personnage);

        //Initialiser la valeur null
        personnage.loisirs = null;
        console.log(personnage);

        // Iterer sur des objets

        //Recuperer les clés
        for( let item in personnage){
            d(item);
        }
        //Recuperer les valeurs
        for( let item in personnage){
            d(personnage[item]);
        }

        // Methode keys() -> retourne un tableau des différentes keys
        console.log(Object.keys(personnage));

        //Methode values() -> retourne un tableau des différentes values
        console.log(Object.values(personnage));

        //Methodes entries() -> retourne un tableau de tableau des associations clés/valeur
        console.log(Object.entries(personnage));


        /*JSON est le format le plus utilisé dans le web. Il s'agit d'un format d'échange de données dans les applications web.
        Il est utilisé pour l'échange de data. (particulièrement utilisé par les API)
        
        Objet en JS
        const objJs = {
            firstname: 'jean',
            lastname: 'Louis',
            age'35'
        }
        
        Objet en XML -> avant l'utilisation du JSON
        <objet>
            <firstname>Jean</fiestname>
            <lastname>louis</Louis>
            <age>35</age>
            </objet>
            
            objet Json -> obligation d'utiliser des doubles quotes
            {
                "firstname": "Jean",
                "lastname": "Louis",
                "age":"35"
                
            }
            
            */ 

        // 09 - Les classes
            d(`09 - Les classes`,1);
            /*
            La construction d'objet à la main par la notation à accolades convient bien à des objets
            simples et uniques. Pour créer plusieurs objet du même type, nous allons utiliser les classes.
            
            Une classe est un modèle pour un objhet dans le codee. Elle permet de construire plusieurs objet 
            de meme type (a ppelés instance de la même classe) plus facilement et rapidement.
            */ 

            // Déclaration d'une classe
            //Attention la première lettre toujours en majuscule
            class Eleves{
                constructor(prenom, nom, classe = '1'){
                    this.prenom = prenom,
                    this.nom = nom,
                    this.classe = classe
                }
                // fonction constructor : fonction qui est appelé quand on crée une nouvelle instance de cette classe
                // le mont clé new

                // methode
                hello(){
                    console.log(`bonjour ${this.prenom} ${this.nom}`);
                }
                quelleClasse(){
                    console.log(`Vous êtes en ${this.classe}e année`);
                }
            }
            // Instantiation de la classe
            let eleve1 = new Eleves('Harry', 'Potter', '1');
            console.log(eleve1);
            eleve1.hello();
            eleve1.quelleClasse();

            let eleve2 = new Eleves();

            eleve2.prenom = 'Hermione';
            eleve2.nom = 'Granger';
            eleve2.hello();
            eleve2.quelleClasse();

           








