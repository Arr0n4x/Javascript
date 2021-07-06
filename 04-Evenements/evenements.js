// 2/ Savoir detecter un evenement utilisateur

/*
    Etape1 -> Selectionner les elements
    Etape2 -> Créer les fonctions qui seront execute par l'evenement
    Etape3 -> Poser l'écouteur d'evenement pour l'interaction
*/

//  Etape 1 ->

    //Selectionner le bouton et l'enregistrer dans une variable -> btn
    //Selectionner le rectangle et l'enregistrer dans une variable ->  
    
    
    let btn = document.querySelector('#toggle-rectangle');
    let rect = document.querySelector('.rectangle');

// Etape 2 -> fonctions

    function cacher(){
        // rect.classList.add('hide');
        // add-> ajoute la classe hide au rectangle
        rect.classList.toggle('hide');
        //  toggle-> ajout la classe si elle n'existe pas, la supprime si elle existe
    }

// Etape 3 -> Ecouteur d'evenement -> addEventListener

    btn.addEventListener('click', cacher);

// version courte 3 etape en 1
// document.querySelector('#toggle-rectangle').addEventListener('click',
// function(){
//     document.querySelector('.rectangle').classList.toggle('hide');
// });

//Version fonction fléchée
// document.querySelector('#toggle-rectangle').addEventListener('click',
// () => {
//     document.querySelector('.rectangle').classList.toggle('hide');
// });

// Au survol du rectangle -> ajouter la classe important

function addColorChange(){
    rect.classList.add('important');
}
rect.addEventListener('mouseover', addColorChange);

// Au retrait de la souris (mouseout) sur le rectangle -> supprimer
// (remove) la classe important

function addColorChange2(){
    rect.classList.remove('important');
}

rect.addEventListener('mouseout', addColorChange2);

// rect;addEventListener('mouseout', function(){
//     rect.classList.remove('important');
// });

//Au double click sur le rectangle; la classe good est ajoutée si elle n'existe
//pas , supprimé si elle existe


function colorChange(){
    rect.classList.toggle('good');
}
rect.addEventListener('dblclick', colorChange);

// Version.addEventListener('dblclick', ()=> {
//    rect.classList.toggle('good');
//})

function colorChange3(){
    rect.classList.remove('good');
    rect.classList.remove('important');
}
rect.addEventListener('mouseout', colorChange3);


// ------Gestion du clavier 

    document.addEventListener('keydown', function(event){
        // console.log(event);
        console.log('touche :' + event.key);
    });

    // L'objet event est généré lors d'un évenement. On peut recuperer plusieurs informations depuis cet objet.


    //----Comprendre la propagation d'evenements

    // Ecouteur d'evt sur le document
    document.addEventListener('click', ()=>{
        console.log('Click sur le document');
    });

    //Ecouteur d'evt sur le paragraphe
    document.querySelector('#para').addEventListener('click', ()=>{
        console.log('Click sur le paragraphe');
    });
    // Ecouteur devt sur le bouton à l'intérieur  du paragraphe
    document.querySelector('#propa').addEventListener('click', (event)=>{
        console.log('Click sur le bouton');
        event.stopPropagation(); // Arret de la propagation d'evenement
    });


    //------ Modifier le comportement par défaut en cas d'evenement.

    document.querySelector('#interdit').addEventListener('click', (event)=>{
        console.log('Continuez plutot à suivre le cours ! ');
        event.preventDefault(); // Annulation du comportemept par défaut
    });

    // La methode preventDefault() est particulierement utile pour éviter que la soumission
    //d'un formulaire ne recharge pas la page.




//--------Gestion de formulaire

            let pseudoElt = document.querySelector('#pseudo');
            // console.log(pseudoElt); 
            pseudoElt.value = 'Mon pseudo';
//----------Gestion du focus
            // l'eveneùent focus est declenché lors de la selection par l'utilisateur d'un element formulaire.

            pseudoElt.addEventListener('focus', ()=>{
                document.querySelector('#aidePseudo').textContent = 'Entrez votre pseudo';
        });

        //Suppression du message d'aide à l'evenement blur
        pseudoElt.addEventListener('blur', ()=>{
            document.querySelector('#aidePseudo').textContent = '';
        });


        let mdpElt = document.querySelector('#mdp');
       
        mdpElt.value = 'Mon mot de passe';


        mdpElt.addEventListener('focus', ()=>{
            document.querySelector('#aideMdp').textContent = 'Entrez votre Mot de passe';
    });

    
    mdpElt.addEventListener('blur', ()=>{
        document.querySelector('#aideMdp').textContent = '';
    });

    let courrielElt = document.querySelector('#courriel');
       
        courrielElt.value = 'Mon Courriel';


        courrielElt.addEventListener('focus', ()=>{
            document.querySelector('#aideCourriel').textContent = 'Entrez votre Courriel';
    });

    
    courrielElt.addEventListener('blur', ()=>{
        document.querySelector('#aideCourriel').textContent = '';
    });


    // Case à cocher 
    // Lors du changement de statut d'une case à cocher, l'evement change est declenché 
    //On peuit recuperer le statut (coché ou décoché) en utilisant l'objet event
    document.querySelector('#confirmation').addEventListener('change', (e)=>{
        // console.log(e.target.checked);
        if(e.target.checked){
            document.querySelector('#confirmationLabel').style.color ='blue';
        }else{
            document.querySelector('#confirmationLabel').style.color = 'red';
        }
    });

    //Bouton radio
    // Selection par le name des boutons radio -> retourne un array
    let aboElts = document.getElementsByName('abonnement');
    // console.log(aboElts);
    for(let aboElt of aboElts){
        aboElt.addEventListener('change', (e)=>{
            console.log(`Formule d'abonnement choisi: ${e.target.value}`);
        });
    }

    //Liste déroulante
    document.querySelector('#nationalite').addEventListener('change', (e)=>{
        console.log(`Code de nationalité ; ${e.target.value}`);
    });

    //Accès aux champs de formulaire

    let form = document.querySelector('form');
    console.log(form.elements);
    console.log(form.elements.pseudo);

    // Soumission d'un formulaire

    form.addEventListener('submit', (event)=>{
        let pseudo = form.elements.pseudo.value;
        let mdp = form.elements.mdp.value;
        let courriel = form.elements.courriel.value;
        console.log(`Vous avez choisi le pseudo : ${pseudo}, le mot de passe : ${mdp}, le courriel : ${courriel}`);
        if(form.elements.confirmation.checked){
            console.log(`Vous avez demandé une confirmation d'inscription`);
        }else{
            console.log(`Confirmation refusée`);
        }
        event.preventDefault();
    });

    //Validation pendant la saisie

    mdpElt.addEventListener('input', (event)=>{
        let mdp = event.target.value;
        let longueurMdp = 'faible';
        let couleurMsg = 'red';

        if(mdp.length >= 8){
            longueurMdp = 'suffisante';
            couleurMsg ='green';
        }else if(mdp.length >= 4){
            longueurMdp = 'moyenne';
            couleurMsg = 'orange';
        }
        let aideMdpElt = document.querySelector('#aideMdp');
        aideMdpElt.textContent = `Longueur : ${longueurMdp}`;
        aideMdpElt.style.color = couleurMsg;

    });

    // Contrôle du courriel en fin de saisie ( au declenchement du blur)

    // Utilisation d'une expression régulière
    // Une expression régulière également appelée expression rationnelle,
    // définit un motif auquel on va comparer des chaines de caractères pour 
    //trouver (ouo non) des correspondances. la plupart des langages de programmation permettent
    //d'exploiter les expressions regulières

    let regex = /@/; // -> la chaine de caractère doit contenir un @
    console.log(regex.test('')); // false
    console.log(regex.test('@')); // true
    console.log(regex.test('sophie@gmail.com')); // true

    // En js on définit une expression regulière en placant son motif entre /
    // Sa methode test() détecte la présence d'une correspondance.

    let regexCourriel = /.+@.+\..+/;
    // .+ -> commence par un ou plusieurs caractères
    // @ -> contient ensuite le caractère @
    // .+ -> commence par un ou plusieurs caractères
    // \ contien le caractère .(point)
    // .+ -> Finit par un ou plusieurs caractères.



    courrielElt.addEventListener('blur', (e)=>{
        let validiteCourriel = '';
        if(!regexCourriel.test(e.target.value)){
            validiteCourriel = 'Adresse invalide';
        }
        document.querySelector('#aideCourriel').textContent = 
        validiteCourriel;
    });




