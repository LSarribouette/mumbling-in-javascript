// je cree des variables globales accessibles dans tout le script
var image = document.createElement("img");
var compteur = 0; // permet de reinitialiser si on recharge la page ??

function Initialisation() {

    // si reinitialisation, le compteur repasse a zero
    //compteur = 0; // TODO check si besoin

    //On cache le bouton "Rejouer"
    document.getElementById("rejouer").style.visibility = "hidden";
}

function jouer(zone) {

    // j'incremente le compteur a chaque clique
    compteur++;
    console.log(compteur);

    if(document.getElementById(zone).innerHTML === '') {
        if (compteur % 2 === 0) {
            image.src = "media/rond.png";
        } else {
            image.src = "media/croix.png";
        }
        document.getElementById(zone).appendChild(image); // c'est ici que j'affiche reellement
    } else {
        alert("la case est prise bg");
    }
}
