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
    if (document.getElementById(zone).innerHTML === '') {
        // j'incremente le compteur si la case est vide
        compteur++;
        console.log(compteur);
        console.log(zone);
        // je maj le nombre de tours
        let span = document.getElementById("nbTours");
        span.textContent = compteur;

        // j'affiche l'image du joueur en cours
        if (compteur % 2 === 0) {
            let rond = document.createElement("img");
            rond.src = "media/rond.png";
            rond.className = "rond";
            document.getElementById(zone).appendChild(rond); // c'est ici que j'affiche reellement
        } else {
            let croix = document.createElement("img");
            croix.src = "media/croix.png";
            croix.className = "croix";
            document.getElementById(zone).appendChild(croix);
        }
    } else {
        alert("La case est prise bg.");
    }

    verif_victoire();
}

function verif_victoire() {
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
    console.log(case_2);

    // - je commence a verifier a partir du tour 5
    if (compteur >= 5) {
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
            alert("C'est gagné, gg !");
            // le bouton "Rejouer" est visible
            document.getElementById("rejouer").style.visibility = "visible";
        }
    }

    if (compteur >= 9) {
        alert("Il y a égalité...");
        // le bouton "Rejouer" est visible
        document.getElementById("rejouer").style.visibility = "visible";
    }
    // TODO scores
}
