// ------ setInerval() -> execute une fonction à interval de temps spécifié (en ms)

// let paraElt = document.querySelector(`#para`);
// let compteur = 0;

// function print(){
//     paraElt.textContent = paraElt.textContent + 'Salut ';
//     compteur++;
//     console.log(compteur);
// }
// setInterval(print, 1000);


// annuler une action répétée -> clearIntervall()
// let paraElt = document.querySelector(`#para`);
// let compteur = 0;

// function print(){
//     if(compteur< 10){
//     paraElt.textContent = paraElt.textContent + 'Salut ';
//     compteur++;
//     console.log(compteur);
//     }else{
//         paraElt.textContent = 'Bonjour !';
//         clearInterval(intervalID);
//     }
// }
// let intervalID = setInterval(print, 1000);
// La fonction clearInterval( ) permet de stopper une execution répetée.
//Elle prend en paramètre l'identifiant de l'action renvoyée par la fonction setInterval ()
 // et stockée dans notre exemple dans la variable intervalID.


 //setTimeout () -> executer une fonction 1 seule fois après un délai en ms
 let paraElt = document.querySelector(`#para`);
 let compteur = 0;
 function print(){
 if(compteur< 10){
         paraElt.textContent = paraElt.textContent + 'Salut ';
         compteur++;
         console.log(compteur);
         }else{
            paraElt.textContent = 'Bonjour !';
             clearInterval(intervalID);
             function bye(){
                 paraElt.textContent= 'Bye !!!';       
              }
              setTimeout(bye,2000);
        }
     }
     let intervalID = setInterval(print, 1000);


