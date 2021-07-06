/*
Savoir créer de l'interaction

JS en plus d'être un langage de programmation, permet de batir de l'interaction dans une page 
web.
L'interaction est une "conversation" humain/machine
->l'humain fait une action (click, double click...)
->Le device (ordinateur, mobile...) renvoie une information visuelle;
sonore...

. Compétences nécessaire pour batir de l'interaction dans une page web


        1/ Savoir selectionner des elemnts html
        2/ Savoir detecter un evenement utilisateur
        3/ Savoir manipuler le dom

        DOM-> Document Object Model
        Interface (quel que soit le langage) qui represente la page dans son etat actuel.
        On peut le representer sou la forme d'un arbre. Chaque element de cet arbre est un noeud(node).
*/

// 1/ Savoir selectionner des elements html


// Objet window

console.log(window);

// Objet document 
console.log(document);

//Selection getElementByID
// On peut selectionner un element par son id

let section = document.getElementById('maSection');
console.log(section);
console.log(section.innerHTML); // innerHTML -> pour obtenir le contenu textuel


//----- Selection par classe getElementByClassName
//-> retourne un tableau (array) d'elements qui ont la classe spécifié en paramètre 

let avions = document.getElementsByClassName('avion');
console.log(avions);
console.log(avions[0]);

//Parcourir les elements du tableau avions
for(let i= 0 ; i < avions.length ; i++){
    console.log(avions[i].innerHTML);
}
for( let avion of avions){
    console.log(avion.innerHTML);
    avion.style.backgroundColor = 'red';
}

//----- Selection par nom de balise -> getElementsByTagName()
// retourne u ntableau ( array) d'éléments

let spans = document.getElementsByTagName('span');
console.log(spans);
console.log(spans[0]);

//----Methode ****CONSEILLÉE*****
//------ Selection querySelector

    // retourne le 1er élément spécifié en paramètre
    let selection = document.querySelector('p');    
    console.log(selection); // retourne le premier element qui correspond à la demande


    let monID = document.querySelector('#monID');
    console.log(monID);

    // autre façon de faire sans créer de variable
    console.log(document.querySelector('.avion'));

    // La force de QuerySelector est d'integrer les selecteurs css ->
    // #id .class balise


    //-------Selection querySelectorAll

            //retourne un tableau (array) d'éléments correspondant à la demande
            let paragraphes = document.querySelectorAll('p');
            console.log(paragraphes);

            console.log(paragraphes[1].innerHTML);

    //     Afficher dans la consle le contenu de chaque paragraphe
        for(let i=0; i < paragraphes.length ; i++){
            console.log(paragraphes[i].innerHTML);  
        } 
        for(let paragraphe of paragraphes){
            console.log(paragraphe.innerHTML);
        }
        //exemple
        let prenom = document.querySelector('#container h2 span');
        prenom.style.color ='blue';



    


