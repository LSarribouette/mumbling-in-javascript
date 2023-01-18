// TODO supp les console.log
// TODO scores --> local storage dans le navigateur

// variables globales
let compteurTours;
let compteurRonds=0;
let compteurCroix=0;

function Initialisation() {
    //On cache le bouton "Rejouer" des le debut et pendant le jeu
    document.getElementById("rejouer").style.visibility = "hidden";

    // si on rejoue
    // - le compteur repasse a zero et je maj la span
    compteurTours = 0;
    console.log(compteurTours);
    let span = document.getElementById("nbTours");
    span.textContent = compteurTours;

    // - le plateau de jeu est reinitialise
    let plateau = document.querySelectorAll("td.carre"); // retourne une nodelist
    plateau.forEach(elt => {elt.innerHTML=''}); // remplit de vide les cases du td

}

function jouer(zone) {

    // clic de l'utilisateur et affichage de l'image si la case est dispo
    if (document.getElementById(zone).innerHTML === '') {
        // j'incremente le compteur si la case est vide
        compteurTours++;
        console.log(compteurTours);
        console.log(zone);
        // je maj le nombre de tours
        let span = document.getElementById("nbTours");
        span.textContent = compteurTours;

        // j'affiche l'image du joueur en cours
        if (compteurTours % 2 === 0) {
            let rond = document.createElement("img");
            rond.src = "media/rond.png";
            document.getElementById(zone).appendChild(rond); // c'est ici que j'affiche reellement
        } else {
            let croix = document.createElement("img");
            croix.src = "media/croix.png";
            document.getElementById(zone).appendChild(croix);
        }
    } else {
        alert("La case est prise. [version pas cringe]");
    }

    verif_victoire(zone);
}

function verif_victoire(zone) {
    // je cree une variable par case, pour des questions de lisibilite
    case_1 = document.getElementById("a1").innerHTML;
    case_2 = document.getElementById("a2").innerHTML;
    case_3 = document.getElementById("a3").innerHTML;
    case_4 = document.getElementById("b1").innerHTML;
    case_5 = document.getElementById("b2").innerHTML;
    case_6 = document.getElementById("b3").innerHTML;
    case_7 = document.getElementById("c1").innerHTML;
    case_8 = document.getElementById("c2").innerHTML;
    case_9 = document.getElementById("c3").innerHTML;

    // - je commence a verifier a partir du tour 5
    if (compteurTours >= 5) {
        // je compare toutes les combinaisons gagnantes
        // - je vérifie que les cases ne sont pas vide
        if (case_1 !== '' && case_1 === case_2 && case_1 === case_3 ||
            case_4 !== '' && case_4 === case_5 && case_4 === case_6 ||
            case_7 !== '' && case_7 === case_8 && case_7 === case_9 ||
            case_1 !== '' && case_1 === case_4 && case_1 === case_7 ||
            case_2 !== '' && case_2 === case_5 && case_2 === case_8 ||
            case_3 !== '' && case_3 === case_6 && case_3 === case_9 ||
            case_1 !== '' && case_1 === case_5 && case_1 === case_9 ||
            case_3 !== '' && case_3 === case_5 && case_3 === case_7) {
            console.log("ton if marche ma grande");
            console.log(document.getElementById(zone).innerHTML);

            // je determine quel joueur a gagne
            if (document.getElementById(zone).innerHTML === '<img src="media/croix.png">') {
                compteurCroix++;
                // - les scores se maj en fonction du gagnant
                let score_croix = document.getElementById("score_croix");
                score_croix.textContent = compteurCroix;
                alert('Le joueur X a gagné !');
            } else if (document.getElementById(zone).innerHTML === '<img src="media/rond.png">') {
                compteurRonds++;
                let score_rond = document.getElementById("score_rond");
                score_rond.textContent = compteurRonds;
                alert("Le joueur O a gagné !");
            }

            // le bouton "Rejouer" est visible
            document.getElementById("rejouer").style.visibility = "visible";
        }
    }
    // - si le plateau est plein et qu'il n'y a pas eu de gagnant, le jeu s'arrete
    if (compteurTours >= 9) {
        alert("Il y a égalité...");
        // le bouton "Rejouer" est visible
        document.getElementById("rejouer").style.visibility = "visible";
    }
}
