// -------- Enoncé 

// Après avoir demandé un montant HT à l'utilisateur, calculez le montant TTC et affichez-le sous forme de phrase dans la page.

// ex : 
// Pour un montant HT de 200 € il y a 40 € de TVA.
// Le montant TTC est donc de  240 €.

// TVA = 20/100

// -------- Aide 
// 1 Déclaration des variables et constantes
// 2 Demande du montant HT à l'utilisateur
// 3 Faire les calculs -> Transformer un string en nombre à virgule : parseFloat() meme utilisation que parseInt()
// montant tva = montant ht * TAUX TVA;
// montant ttc = montant tva + montant ht;
// 4 Afficher les resultats sous forme de phrase

// let montant_ht = window.prompt('Quel est votre montant hors taxe');
// montant_ht = parseInt(montant_ht);
// let tva = montant_ht * 20/100;
// tva = parseFloat(tva);

// document.write(`<p>Pour un montant HT de ${montant_ht} € il y a ${tva}€ <br>
//                 Le montant TTC est donc de ${montant_ht + tva}€.`)

const TAUX_TVA = 20/100;

let montant_ht = parseFloat(window.prompt('Quel est le montant HT ?'));

let montant_tva = montant_ht * TAUX_TVA;
let montant_TTC = montant_tva + montant_ht;

document.write(`<p>Pour un montant HT de ${montant_ht} € il y a ${montant_tva}€ <br> 
                Le montant TTC est donc de ${montant_TTC}€</p>`);