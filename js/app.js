/**Episode 1 : Donne-moi ton adresse e-mail
Ecrire un programme qui demande à l’utilisateur son adresse e-mail et renvoie un message en cas
 d’erreur si l’adresse e-mail n’est pas correctement saisie.
 */

 /**Episode 2 : Choisis un mot de passe
Ecrire un programme qui demande à l'utilisateur de renseigner un mot de passe et vérifie si ce mot de passe obéit aux critères suivants :
8 caractères minimum
contient une majuscule
contient au moins un chiffre
 */


/**Episode 3 : Au pluriel
Ecrire un programme qui demande à l'utilisateur son nom et le nombre d’enfants qu’il a et affiche un résumé.
Exemples : 
Marc, vous avez 1 enfant.
Luc, vous avez 3 enfants.
Jean, vous n’avez pas d’enfant.
 */

let nom = prompt("entrez votre nom"); // on demande à l'utilisateur de renseignrer son nom
let enfant = parseInt(prompt("combien d'enfant avez vous?")); //on demande à l'utilisateur de renseigner le nombre d'enfant qu'il a
//on creer notre condition pour gerer les differents messages  selon le nombre d'enfant
if (enfant === 0){
    alert( nom + " vous n'avez pas d'enfant, lancer vous dans les economies");
}
else if (enfant === 1) {
    alert( nom + " vous avez " + enfant + " enfant, jamais un sans deux");
} 
else if (isNaN(enfant)){
    enfant = parseInt(prompt("combien d'enfant avez vous?"));

}
    alert( nom + " vous avez " + enfant + " enfants, le prix du pain a augmenté vous savez ");

/**Episode 4 : Dis-moi, quand es-tu né ?
Ecrire un programme demande la date de naissance d’un utilisateur et vérifie 
si la date saisie est au format JJ/MM/AAAA. Exemple : 13/05/2020.
 */
let naissance = prompt("Quand etes vous né ?");


 /**Episode 5 : Fiche de renseignement
Ecrire un programme qui :
demande à l'utilisateur de saisir son nom, prénom ainsi que son sexe ;
stocke ces informations dans un objet;
ajoute une clé titre à cet objet ayant comme valeur M ou Mme en fonction du sexe de l’utilisateur;
Affiche l’objet en console.
 */

 /**Episode 6 : Quel jour sommes-nous ?
Ecrire un programme qui demande à l’utilisateur de saisir le numéro d’un jour et renvoie le jour correspondant. 
Exemple : 
Entrée : 3
Sortie : Mercredi
	NB : Les jours doivent être stockés au préalable dans un tableau.
 */

let jour = parseInt(prompt(" enter un chiffre correspondant à jour de la semaine"));
if(jour ===1){
    alert("Lundi, encore toi");
}else if (jour === 2){
    alert("Mardi");

}else if (jour === 3){
    alert("Mercredi");

}else if (jour === 4){
    alert("Jeudi");

}else if (jour === 5){
    alert("Venderdi, type les bouriquiers sont à la mosqué");

}else if (jour === 6){
    alert("Samedi, 24h chrono");

}else if (jour === 7){
    alert("Dimanche, allons à l'église");

}else if (jour > 8){
     jour = parseInt(prompt("La semaine ayant 7 jour choisissez un chiffre compris entre 1 et 7"));

}


 /**Episode 7 : Admis ou recalé
Ecrire un programme qui demande à l’utilisateur de saisir toutes ses notes en Mathématiques et affiche sa moyenne.
NB : Les notes varient de 0 à 20 et seront stockées dans un tableau.
 */

 /**Episode 8 : Proclamation
Ecrire un programme qui demande de saisir les noms et les moyennes des élèves d’une classe et affiche 
le premier de la classe (son nom ainsi que sa moyenne).
NB : Le nombre d’élèves n’est pas connu d’avance.
 */





 /**Episode 9 : A table ! 
Ecrire une fonction qui prend un nombre en paramètre et affiche sa table de multiplication en console.
 */
