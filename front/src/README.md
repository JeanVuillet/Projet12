I Lanchement du projet

Se rendre dans le dossier back ceer un terminal et lancer la commande
Yarn start
Se rendre ensuite dans le back et lancer la commande 
Yarn start

II Architecture du projet

A Racine du projet
le projet utilise React.
son composant racine, MainComp  est place dans index.js et wrape dans un composant dataProvider qui permet de transmettre aux sous composants l id et le type de data selectionne par l utilisateur

B MainComp
MainComp contient trois sous composants:
-Header (le header)
-SideBarre (la barre latereale)
-MainDiv (le composant central)

C MainDiv

