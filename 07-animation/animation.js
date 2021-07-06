//----Animation JS

//1ere ETAPE -> Animer
// let bloc = document.querySelector('#bloc');
// let vitesse = 5; // valeur de déplacement en pixels
// function deplacerBloc(){
//     //recupération de la valeur left en number
//      let xBloc = parseFloat(getComputedStyle(bloc).left);
// //     // Déplacement du bloc
//    bloc.style.left = `${xBloc+vitesse}px`;
//      requestAnimationFrame(deplacerBloc);
//  }
//  requestAnimationFrame(deplacerBloc);
// la fonction requestAnimationFrame permet de deamnder au navigateur
// d'executer une fonctin "dès que possible". Le terme "des que possible "
// signifie que le navigateur va optimiser la mise à jour de 
//l'animation afin de le rendre fluide.


//2e ETAPE ->
let bloc = document.querySelector('#bloc');
let cadre = document.querySelector(`#cadre`);
let largeurBloc = parseFloat(getComputedStyle(bloc).width);
let vitesse = 5; // valeur de déplacement en pixels
function deplacerBloc(){
    //recupération de la valeur left en number
     let xBloc = parseFloat(getComputedStyle(bloc).left);
     //recupération de la largeur du cadre
     let xmax = parseFloat(getComputedStyle(cadre).width);
     if(xBloc + largeurBloc <= xmax){
         // Déplacement du bloc
   bloc.style.left = `${xBloc+vitesse}px`;
   // damnde au navigateur d'appeler la foncton deplacerBloc dès que possible
     animationID = requestAnimationFrame(deplacerBloc);

     }else{
        // Annulation de l'animation
        bloc.style.left = 0;
        deplacerBloc();
     }

 }
 requestAnimationFrame(deplacerBloc);
 let animationID = requestAnimationFrame(deplacerBloc);
