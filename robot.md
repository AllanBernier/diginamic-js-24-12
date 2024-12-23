1. L'objectif global est de réaliser un robot aspirateur qui va nettoyer l'entièreté d'une grille de taille width x height.
2. Sur cette grille, certaines cases seront propres, d'autres non (vous aurez une méthode d'initialisation où vous choisirez quel pourcentage de la grille est sale).
3. Le but de votre robot est de se déplacer sur la grille à la recherche des endroits sales, et de "nettoyer" chaque case sale.

4. Visuellement, il faut réaliser ce projet en deux étapes :
  Une première partie où vous développerez ce projet avec un affichage étapes par étapes dans votre terminal en affichant une grille telle que :
    - les cases propres sont affichées avec un X
    - les cases sales sont affichées avec un espace (" ")
    - le robot est affiché avec un R
    - Une phrase doit afficher l'action actuelle du robot ("Le robot se déplace vers la gauche de la case [x1,y1] vers [x2,y2]")
    - une action par seconde doit être effectuée avant d'afficher la nouvelle grille à l'écran

  cf : 
  _________________
  |X|X| | | | | | |
  _________________
  |X|X| |R| | | | |
  _________________
  |X| | | | | | | |
  _________________
  | |X| | | | | | |
  _________________


  Une seconde partie où vous devez non plus afficher votre résultat dans le terminal mais maintenant dans une page HTML, libre à vous de gérer le design sur cette partie.

5. Pour les plus rapides d'entre vous, ajoutez à votre robot une notion d'énergie :
  - Lorsque le robot effectue une action (se déplacer, nettoyer), il perd un point d'énergie.
  - Une case de la grille est consacrée à la recharge d'énergie de votre robot.
  - Votre robot doit retourner à la borne lorsqu'il arrive à court d'énergie (prenez en compte l'énergie nécessaire au retour pour arriver à temps).
  - Oui, si votre algorithme ne faisait que passer sur les cases sans aucune logique il n'ira jamais assé loin pour tout terminé
  

/!\ Le TP manque volontairement de précision pour vous laisser une libre compréhension du sujet et l'adapter à vos souhaits. 
Ajoutez toutes fonctionnalités qui vous semblent pertinentes.

/!\ Vous êtes obligé de m'appeler si vous restez bloqué 10 minutes sur un problème