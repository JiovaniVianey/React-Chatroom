# Chatroom

On va construire un chat entièrement fonctionnel :scream:  
Pas de panique on va y aller étape par étape, ce soir on commence par pouvoir envoyer un message en utilisant redux.  
On verra demain pour qu'on puisse nous répondre, tant pis si on parle tout seul pendant quelque temps :smile:

## Résultat

![résultat](result.png)

## Styles

On part au plus simple pour commencer, on peaufinera ensuite ;)

## Fonctionnalités

On doit pouvoir

- Saisir un message dans le champ du bas
- On doit pouvoir soumettre ce message
- Il doit apparaître dans la liste des messages au-dessus, avec un nom d'auteur par défaut

Bien sûr **tu dois** utiliser **redux** et **react-redux** pour gérer tes données et tes actions

## Enoncé Aventurier 

- Tout est dit :arrow_up:

## Enoncé Guidé

<details>
  <summary>
    Quelques pistes
  </summary>

Objectif : construire la ChatRoom

1 - **Config**: initialisation depuis le React-modele

2 - **Découpage et composants**: on identifie les zones principales de l'appli, nos futurs composants
  - On peut nommer le composant racine `App` ou `Chat` (ou autre au choix), il contiendra un listing de messages et une zone de formulaire
  - On met en place un composant `Form` pour le formulaire
  - On met en place un composant `Messages` pour le listing des messages
  - On met en place un composant `Message` pour le contenu d'un message

3 - **Store**: stockage des données utiles pour l'affichage
  - On installe ce qu'il faut pour utiliser Redux
  - On crée le store. Pour le state initial, il va falloir qu'on se crée des données, par exemple un tableau contenant les informations pour différents messages :
  
   ```
   [
    {
      id: 1,
      author: 'Super Chat',
      content: 'Salut',
    },
    {
      id: 2,
      author: 'Super Chat',
      content: 'Comment chat va ?',
    },
    {
      id: 3,
      author: 'Super Chat',
      content: 'T\'as pas des super croquettes ?',
    },
  ]
   ```
  
  ⚠️ le state doit toujours être un objet, pour pouvoir repérer chaque information à partir d'un nom de propriété. Il faudra donc ajouter une propriété dans le state initial pour ranger ce tableau.
  
  
4 - **Provider**: mise à disposition du store pour les composants
   - On instancie le composant `Provider` à la racine de notre application, et on importe le store pour le passer en prop
  
  - On peut vérifier ce que ça donne (visualiser le state initial) avec le redux dev tool

5 - **useSelector**: branchement en lecture
  - Le composant `Messages` doit aller lire les messages dans le store, le hook `useSelector` fourni par react-redux va nous permettre d'aller les récupérer et de nous en servir avec un `map` par exemple pour appeler plusieurs fois le composant `Message` à qui on va passer le contenu de chaque message en props

6 - **champ contrôlé** notre application sait afficher correctement des messages, il faut maintenant pouvoir en ajouter
  - On commence par mettre en place un champ contrôlé

**contrôle en lecture** On fait en sorte que la `value` du champ de notre composant `Form` dépende du state
  - On définit un emplacement dans notre state initial (au niveau du store)
  - On utilise `useSelector` pour afficher dans l'input du formulaire une valeur qui vient du state

 **contrôle en écriture** On fait en sorte que quand on change la valeur de l'input, le changement se répercute dans le state (qui est stocké dans le store)
   - _useDispatch_ permet d'émettre une action, une intention vers le store, dans le but de modifier le state. Si l'intention ne suffit pas, qu'il faut une/des donnée(s) supplémentaires on met en place un payload => information(s) stockée(s) dans l'objet action en plus du _type_. Pour ranger encore mieux et éviter des problèmes à cause de fautes de frappe, on peut utiliser un _action type_ et un _action creator_.

 => on devrait pouvoir saisir des caractères dans l'input, et la saisie est répercutée dans le state (qui est stocké dans le store, et qu'on peut donc visualiser avec le redux dev tool).

7 - **ajout du message** quand on soumet le formulaire, un nouveau message doit s'afficher avec les autres
  
- donc on veut modifier le tableau de messages qu'on a dans le state... Donc il va nous falloir une action. Est-ce qu'on a déjà une action dont l'intention et le traitement correspondent à "l'ajout d'un message dans le tableau des messages" ? Sinon, il va falloir l'ajouter à notre annuaire, et ajouter son traitement dans le reducer (bien regarder ce qu'on a comme infos dans le state et qui pourrait nous servir pour ce nouveau message :wink: ). Attention, quand on a un tableau dans un state on ne doit pas modifier directement ce tableau, on doit créer une copie de ce tableau et modifier la copie (immutabilité)
- on dispatch cette action quant le formulaire est soumis.
  
Si tu es arrivé jusque-là, c'est super chouette :star_struck:
</details>


## Bonus


<details>
  <summary>
    S'il te reste du jus, un peu de css ?
  </summary>

### On peaufine

Rapproche toi de la capture ci dessous en retravaillant tes styles

![résultat](bonus.png)
 </details>


