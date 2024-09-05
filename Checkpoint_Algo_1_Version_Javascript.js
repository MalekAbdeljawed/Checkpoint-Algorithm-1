function analyserPhrase(phrase) {
    // Initialisation des compteurs
    let longueur = 0;
    let nombreDeMots = 0;
    let nombreDeVoyelles = 0;

    // Définir l'ensemble des voyelles
    const voyelles = "aeiouAEIOU";

    // Lire la phrase caractère par caractère
    for (let i = 0; i < phrase.length; i++) {
        const caractere = phrase[i];

        // Incrémenter le compteur de longueur
        longueur++;

        // Vérifier si le caractère est une voyelle
        if (voyelles.includes(caractere)) {
            nombreDeVoyelles++;
        }

        // Vérifier si le caractère est un espace
        if (caractere === ' ') {
            nombreDeMots++;
        }
    }

    // Vérifier si le dernier caractère est un point et ajuster les compteurs
    if (phrase[phrase.length - 1] === '.') {
        longueur--; // Exclure le point du comptage de longueur
        nombreDeMots++; // Compter le dernier mot
    }

    // Si la phrase n'est pas vide et commence par un mot
    if (longueur > 0 && phrase[0] !== ' ') {
        nombreDeMots++;
    }

    // Afficher les résultats
    console.log("Longueur : ", longueur);
    console.log("Nombre de mots : ", nombreDeMots);
    console.log("Nombre de voyelles : ", nombreDeVoyelles);
}

// Exemple d'utilisation
analyserPhrase("Bonjour tout le monde.");