let paraElt = document.querySelector(`#para`);
 let compteur = 0;
 function print(){
 if(compteur<= 0 ){
         paraElt.textContent = paraElt.textContent + 'Je suis Webdesigner, ';
         compteur++;
         }else if (compteur == 1){
            paraElt.textContent = 'Je suis Webdesigner, Graphiste'; 
            compteur++; 
         }else if (compteur == 2){
            paraElt.textContent = 'Je suis Webdesigner, Graphiste, Developpeur'; 
            compteur++; 
         }else if(compteur == 3){
            paraElt.textContent = 'Je suis en recherche de stage';
            compteur++; 
         }else if (compteur == 4){
            paraElt.textContent = 'N hesitez pas à me contactez';
            compteur++;
            
         }else{
             paraElt.textContent = ``;
             compteur = 0;
         }
         
            }
            

       setInterval(print, 1000);