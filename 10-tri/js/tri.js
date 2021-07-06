let btnFilters = document.querySelectorAll(`#filters li a`);
// console.log(btnFilters);
let projetElts = document.querySelectorAll('.gallery .imageGallery');
// console.log(projetElts);

for(let btn of btnFilters){
    btn.addEventListener('click', ()=>{
        // console.log(btn);
        let filter = btn.getAttribute('data-filter');
        console.log(filter);

        for( let projet of projetElts){
            // console.log(projet);
            projet.classList.remove('hide');
            if(filter === '*'){
                projet.classList.remove('hide');
            }
            else if(!projet.classList.contains(filter)){
                projet.classList.add('hide');
            }
        }
        //gestion de la classe active sur le bouton cliqué
        //Je supprime la classe active de tous les boutons
        for(let btn of btnFilters){
            btn.classList.remove('active');
        }
        //J'ajoute la classe active sur le bouton cliqué
        btn.classList.add('active');
    });
}



//Gestion de k'affichage de la modale
let modale = document.querySelector('#modal');
let spanX = document.querySelector('#modal .imageModal span');

for(let projet of projetElts){
    projet.addEventListener('click', function (){
        modale.classList.remove('hide');
        //this.childNodes[1].src -> nous renvoie la valeur de l'attribut src de l'image du projet cliqué 
        console.log(this.childNodes[1].src);

        let imageModal = document.querySelector('#modal .imageModal img');
        imageModal.src = this.childNodes[1].src;

        
    });
}
modal.addEventListener('click', ()=>{
    modale.classList.add('hide');
})
