// ----Déclarer une date en JS

// ---- 1
    const today = new Date();
    console.log(today);

    //----- 2 
        const date = new Date(0);
        console.log(date);
        // Via Timestamp en paramètre -> durée en milliseconde qui s'est écoulé depuis le 01/01/1970
        // date clé de la programmtion -> date initiale des systèmes d'exploitations unix -> Epoch Unix


    //-----3
    const date2 = new Date();
    console.log(date2.toDateString()); //     
    console.log(date2.toUTCString());


    // Obejt date
    const date3 = new Date();
    console.log(date3.getDate());// 19
    console.log(date3.getDay());// 1
    console.log(date3.getMonth());//3
    console.log(date3.getFullYear());// 2021
    console.log(date3.getHours()); //12
    console.log(date3.getMinutes()); //16

    const jour = ['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];
    const mois =[ "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre" ];

    let aujourdhui = `Nous sommes le ${jour[date3.getDay()]} ${date3.getDate()} ${mois[date3.getMonth()]}
    ${date3.getFullYear()}. il est ${date3.getHours()}h${date3.getMinutes()}`;

    console.log(aujourdhui);

    // Afficher des dates
    const date4 = new Date();
    console.log(date4.toLocaleDateString());
    console.log(date4.toLocaleDateString('en-EN')); 
    console.log(date4.toLocaleDateString('fr-FR', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    }));

    console.log(date3.toLocaleString());
    console.log(date3.toLocaleTimeString());

    // Exo - Faire Afficher un chornomètre dans la console

    

     setInterval( ()=>{
        console.log(new Date().toLocaleTimeString());
     }, 1000)
        
  
  


     
