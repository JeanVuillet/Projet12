I Lancement du projet
A Acces au projet

cloner le repository

Se rendre dans le dossier back, creer un terminal et lancer la commande
yarn install
yarn start
Se rendre ensuite dans le back et lancer la commande
Yarn start

II Architecture du projet

A Racine du projet
le projet utilise React.
son composant racine, HomePage est place dans index.js et est wrape dans un composant dataProvider qui permet de transmettre aux sous composants l'id et le type de data selectionne par l'utilisateur

B HomePage
HomePage contient trois sous composants:
-SelectPage(la page de selection de l'id et du type de Data)
-Header (le header avec la barre de navigation)
-SideBarre (la barre latereale)
-MainDiv (le composant central)

C MainDiv
MainDiv contient deux parties
-un header qui contient le composant Welcome (avec un message de bienvenue et le nom de l'utilisateur)
-un main qui contient deux sous divs:
-graphs (avec les graphiques)
-statZone (avec les statistiques principales de l'utilisateur)

III Fonctionnement des graphiques

Utilisation du framework Recharts pour les graphiques
tous les graphiques sont wrappes dans un composant responsiveContainer

A BarGraph
-dans le corps du composant, le data correspondant a UserActivity est recupere et mape dans un tableau d objets localData{
name:index du jour (en commençant a 1)
kilogrames:kilogrames de ce jour
calories:calories de ce jour
}
-ce tableau est utilise comme prop dans le composant BarChart, base du graphique

on definit ensuite les cles des axes X et Y
-le sous-composant XAxis prend en props dataKey=name (de dataObjet) pour l'axe X
-le premier sous-composant YAxis prend en props yAxisId=kilograms (de dataObject), orientation=right
domain=yAxisDomain
tickCount=4 (on veux 4 valeurs)
-le second sous composant YAxis
prend en props yAxisId=calories(de dataObject), domain=[0, caloriesMax de Data*1.1],
-Tooltip permet d obtenir un div qui suit la souris et donne la valeur des bares
-Bar prend en dataKey kilograms et en yAxisId=kilograms
-Bar prend en dataKey calories et en yAxisId=calories
