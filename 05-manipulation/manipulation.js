//Manipulation des elements html


//---- textContent


    // La propriété textContent renvoie tout le contenu textuel d'unelement du DOM, sans l'eventuel balisage html
    let paragraph = document.querySelector('#content');
    console.log(paragraph.textContent);


    // Modifier
    paragraph.textContent = 'Modification du texte';


    //innerHTML permet de recuperer ou modifier le contenu html d'un element du DOM

    let titre = document.querySelector('h1');
    console.log(titre.innerHTML);

    titre.innerHTML= `<span class= 'red'> Super Titre </span>`;
    // innerHTML est souvent employé pour vider un element de tout son contenu
    document.querySelector('h2').innerHTML = '';


    //-------getAttribute / hasAttribute / setAttribute / removeAttribute

    //getAttribute -> renvoie la valeur de l'attribut passé en paramètre
    console.log(document.querySelector('a').getAttribute('href'));
    // Certains attributs sont directement accessible via des propriétés : 
    // id, href, value, src
    console.log(document.querySelector('a').href);
    console.log(paragraph.id);

    //hasAttribute -> verifier la presence d'un attribut sur un element
    console.log(document.querySelector('a').hasAttribute('target'));//false


    // setAttribute -> permet de définir la valeur d'un attribut sur un element html.
    // Elle prend en paramètre le nom et la valeur de l'attribut
    // document.querySelector('h1').setAttribute('id', 'titre');
    document.querySelector('h1').id = 'titre';

    // removeAttribute -> supprime un attribut
    document.querySelector('h1').removeAttribute('id');

    //----- Attribut data-
    // On utilise l'attribut data- pour definir un attribut personnalisé
    //Il va nous permettre d'échanger des données html et le dom

    let paraData = document.querySelector('#paraData');
    console.log(paraData.dataset.username); //Jean

    //-------Les classes 
            let blockquote = document.querySelector('blockquote');
            console.log(blockquote.classList);

            for(let classe of blockquote.classList){
                console.log(classe);
            }

            if(blockquote.classList.contains('bgGray')){
                console.log('oui');
            }

    //------- Ajouter un nouvel élément 
    //L'ajout d'un nouvel element à une page web peut se décomposer en trois opérations :
            // Création d'un nouvel élément
            // Définition des informations de l'élément 
            // Insertion du nouvel élément dans le dom



            //Création d'un element li
            let strasbourgElt = document.createElement('li');
            //Définition des informations : id, texte
            strasbourgElt.id = 'strasbourg';
            strasbourgElt.textContent = 'Strasbourg';
            // insertion de l'element en tant qu'enfant de la liste ul
            document.querySelector('ul').appendChild(strasbourgElt);

            //Ajout d'un element avant un autre -> insertBefore()
            let niceElt = document.createElement('li');
            niceElt.textContent = 'Nice';
            document.querySelector('ul').insertBefore(niceElt, strasbourgElt);

            // remplacer un element 
            let brestElt = document.createElement('li');
            brestElt.textContent = 'Brest';
            document.querySelector('ul').replaceChild(brestElt, niceElt);

            // supprimer un element

        document.querySelector('ul').removeChild(strasbourgElt);

        //-----Modifier le style d'un element 



            let paraElt = document.querySelector('#para');
            paraElt.style.color = 'green';
            paraElt.style.margin = '50px';
            paraElt.style.backgroundColor = 'gray';
            paraElt.style.padding ='20px';


            //------ Recuperer le style d'un element

                let stylePara = getComputedStyle(paraElt);
                console.log(stylePara.color);
                console.log(stylePara.width); // 177.333px -> retourne une chaine de caractère donc 
                // si calcule a faire utiliser parseFloat.
                



