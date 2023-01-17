// je cree des variables globales accessibles dans tout le script ??
//var compteur = 0; // permet de reinitialiser si on recharge la page ??

function Initialisation() {

    // si reinitialisation, le compteur repasse a zero et je maj la span
    compteur = 0; // TODO check si besoin
    console.log(compteur);
    let span = document.getElementById("nbTours");
    span.textContent = compteur;

    // reinitialisation du plateau de jeu
    let plateau = document.querySelectorAll("td.carre"); // retourne une nodelist
    plateau.forEach(elt => {elt.innerHTML=''}); // remplit de vide les cases du td

    //On cache le bouton "Rejouer"
    document.getElementById("rejouer").style.visibility = "hidden";

}

function jouer(zone) {

    // clique de l'utilisateur et affichage de l'image si la case est dispo
    if(document.getElementById(zone).innerHTML === '') {
        // j'incremente le compteur si la case est vide
        compteur++;
        console.log(compteur);
        console.log(zone);

        if (compteur % 2 === 0) {
            let rond = document.createElement("img");
            rond.src = "media/rond.png";
            document.getElementById(zone).appendChild(rond); // c'est ici que j'affiche reellement
        } else {
            let croix = document.createElement("img");
            croix.src = "media/croix.png";
            document.getElementById(zone).appendChild(croix);
        }
    } else {
        alert("La case est prise bg.");
    }

    let span = document.getElementById("nbTours");
    span.textContent = compteur;

    // verification si victoire
    // - je commence a verifier a partir du tour 5
    if (compteur >= 5) {
        if (
            document.getElementById("b2").innerHTML
            === document.getElementById("b1").innerHTML
        ) {
            console.log("T'as gagné gg !");
        }
    }

    if (compteur >= 9) {
        // le bouton "Rejouer" est visible
        document.getElementById("rejouer").style.visibility = "visible";
    }
    // TODO scores
}
