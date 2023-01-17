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

    // j'essaie de recuperer les valeurs dans la nodelist
    let plateau = document.querySelectorAll("td.carre"); // retourne une nodelist
    //console.log(plateau.entries());
    for (const entry of plateau.entries()) {
        console.log(entry);
        let enf = entry.childNodes[0];
        console.log(enf);
        document.getElementById("a1").childNodes[0]
    }

    // je maj le nombre de tours
    let span = document.getElementById("nbTours");
    span.textContent = compteur;

    // akim-san TODO checker tout ca
    // On récupére les classe des images puis on stock le résultat dans la variable
    if (document.getElementById("a1").innerHTML != '') {
        case_A1 = document.getElementById("a1").childNodes[0].className;
        console.log(case_A1);
    }
    if (document.getElementById("a2").innerHTML != ''){
        case_A2 = document.getElementById("a2").childNodes[0].className;
        console.log(case_A2);
    }
    if (document.getElementById("a3").innerHTML != ''){
        case_A3 = document.getElementById("a3").childNodes[0].className;
        console.log(case_A3);
    }
    if (document.getElementById("b1").innerHTML != ''){
        case_B1 = document.getElementById("b1").childNodes[0].className;
        console.log(case_B1);
    }
    if (document.getElementById("b2").innerHTML != '') {
        case_B2 = document.getElementById("b2").childNodes[0].className;
        console.log(case_B2);
    }
    if (document.getElementById("b3").innerHTML != ''){
        case_B3 = document.getElementById("b3").childNodes[0].className;
        console.log(case_B3);
    }
    if (document.getElementById("c1").innerHTML != '') {
        case_C1 = document.getElementById("c1").childNodes[0].className;
        console.log(case_C1);
    }
    if (document.getElementById("c2").innerHTML != ''){
        case_C2 = document.getElementById("c2").childNodes[0].className;
        console.log(case_C2);
    }
    if(document.getElementById("c3").innerHTML != ''){
        case_C3 = document.getElementById("c3").childNodes[0].className;
        console.log(case_C3);
    }

    // verification si victoire
    // akim-san TODO checker tout ca
    if ((case_A1 === case_A2 && case_A1 === case_A3) || (case_B1 === case_B2 && case_B2 === case_B3) ||
        (case_C1 === case_C2 && case_C2 === case_C3)) {
        alert("bravo tu as gagné en horizontal");
        document.getElementById("rejouer").style.visibility = "visible";
        id_victory++;
    }
    if ((case_A1 === case_B1 && case_B1 === case_C1) || (case_A2 === case_B2 && case_B2 === case_C2) ||
        (case_A3 === case_B3 && case_B3 === case_C3)) {
        alert("bravo tu as gagné vertical");
        document.getElementById("rejouer").style.visibility = "visible";
        id_victory++;
    }
    if ((case_A1 === case_B2 && case_B2 === case_C3) || (case_A3 === case_B2 && case_B2 === case_C1)){
        alert("bravo tu as gagné en diagonale");
        document.getElementById("rejouer").style.visibility = "visible";
        id_victory++;
    }
    if (id == 10 && id_victory == 1) {
        alert("ITS A DRAW")
        document.getElementById("rejouer").style.visibility = "visible";
    }


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
