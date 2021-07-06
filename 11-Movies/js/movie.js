// Au chargement de la page on affiche tous les film de l'array movies du fichier data.js

const displayMovies = document.querySelector('.displayMovies');

//Selection de la section detailsMovies
const detailsMovies = document.querySelector('.detailsMovies');
detailsMovies.classList.add('hidden');

// selection de la modal
const modalTrailer = document.querySelector('#modal');
modalTrailer.classList.add('hidden');


// On affiche le nombre de film


const nbreFilmElt = document.querySelector('.nbreFilms');
nbreFilmElt.textContent = movies.length;

//On génére les items des films dans la section displayMovies
for(let i = 0 ; i < movies.length; i++){
    displayMovies.innerHTML += `<article class="card" data-index="${i}">
    <div class="card-img" >
        <img src="${movies[i].image}" alt="">
    </div>
    <div class="card-content">
        <h3>${movies[i].title}</h3>
        <h4>${movies[i].director}</h4>
    </div>
</article>
    `;
}

//Affichage des détails du film au click
/**
 * fonction showDetails
 * role : afficher le detail des films
 */
function showDetails(){
 let index = this.getAttribute('data-index');
 console.log(index);
 // on cache la liste de film
 document.querySelector('main').classList.add('hidden');
 //On affiche les details
 detailsMovies.classList.remove('hidden');

 // on affiche les données du film cliqué
 const image = document.querySelector('.detailsImg img');
 image.src = movies[index].image;
 //titre
 const title = document.querySelector('.title');
 title.textContent = movies [index].title;
 //director
 const director = document.querySelector('.detailsContent .director');
 director.textContent = movies [index].director;
 //actor
 const actors = document.querySelector('.detailsContent .actors');
 for(let i = 0 ; i< movies[index].actors.length ; i++){
     actors.textContent = movies[index].actors.join(',')
 }
 //genre
 const genre = document.querySelector('.detailsContent .genre');
//  genre.textContent = movies [index].genre;
for(let i = 0 ; i <movies[index].genre.length ; i++){
    genre.textContent = movies[index].genre.join(' - ');
}
//duration
const duration = document.querySelector('.duration');
duration.textContent = movies[index].duration;

//date
const date = document.querySelector('.date');
date.textContent = movies[index].date;
// resume
const resume = document.querySelector('.resume');
resume.textContent = movies[index].resume
// Video
const video = document.querySelector('iframe');
video.setAttribute('src','https://www.youtube.com/embed/'+ movies[index].traileryt + '?enablejsapi=1&version=3&playerapiid=ytplayer');
};



//Ecouteur d'evenement sur les card
const cardMovies = document.querySelectorAll('.card');
// console.log(cardMovie);
for( let cardSingle of cardMovies){
    cardSingle.addEventListener('click', showDetails);
};

//Ecouteur d'eenement pour revenir sur la liste de film
const btnBack = document.querySelector('.back button');
btnBack.addEventListener('click', ()=>{
    //on affiche la liste des movies
    document.querySelector('main').classList.remove('hidden');
    //on cache les details 
    detailsMovies.classList.add('hidden');
});

//Ecouteur d'evenement pour afficher la modal
const btnTrailer = document.querySelector('.btn');
btnTrailer.addEventListener('click', ()=>{
    modalTrailer.classList.remove('hidden');
});
// Ecouteur d'evt pour cacher la modal
modalTrailer.addEventListener('click', function(e){
    // arreter la video au clic à la fermeture de la modal -> API youtube
    document.querySelector('iframe').contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    // on cache la modal
    modalTrailer.classList.add('hidden');
});