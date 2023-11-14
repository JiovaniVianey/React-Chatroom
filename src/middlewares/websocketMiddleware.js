import {
  SAVE_SUCCESSFUL_LOGIN,
  SEND_MESSAGE,
  handleMessageReceived,
} from '../actions/chatActions';

// on veut une variable qui persiste en-dehors des appels au middleware (cf
// commentaire en bas du fichier)
let socket;

// middleware chargé de gérer le websocket
const websocketMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans websocketmiddleware: ', action);

  switch (action.type) {
    // quand on a une action SAVE_SUCCESSFUL_LOGIN qui passe, on veut créer un
    // websocket avec le serveur
    case SAVE_SUCCESSFUL_LOGIN:
      // création websocket
      socket = window.io('http://localhost:3001');

      // on s'abonne à un événement que le serveur peut envoyer
      socket.on(
        // nom de l'événement (doit être cohérent avec le code du serveur)
        'server_send_message',
        // données reçues
        (data) => {
          // console.log(data); // objet avec id, content, author
          // on ajoute le message sur l'interface
          store.dispatch(handleMessageReceived(data));

          // équivalent avec variable intermédiaire, /!\ il faut un autre nom que
          // 'action' pour la variable (à cause du paramètre 'action')
          // const actionToDispatch = handleMessageReceived(data);
          // store.dispatch(actionToDispatch);
        }
      );

      break;

    case SEND_MESSAGE:
      // on veut empêcher l'envoi du message quand il est vide
      // trim : enlever les espaces inutiles au début et à la fin d'une chaîne
      // de caractères => comme ça on empêche aussi de poster "    "
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
      if (store.getState().inputMessage.trim().length === 0) {
        // on n'a pas de traitement à appliquer, on sort du switch
        break;
      }

      // console.log(
      //   `on veut envoyer '${
      //     store.getState().inputMessage
      //   }' avec comme auteur '${store.getState().nickname}'`
      // );

      // on émet un message sur le websocket pour le serveur

      socket.emit(
        // nom de l'événement (doit être cohérent avec le code du serveur)
        'client_send_message',
        // données à envoyer
        {
          author: store.getState().nickname,
          content: store.getState().inputMessage,
        }
      );

      /* le contenu du message a été pris en compte, on veut vider l'input
      Possibilités ?
        - dans le onSubmit du Form on peut vider le state
        => dispatch(changeInputMessage('')) , après le dispatch de sendMessage
        - ici => store.dispatch(changeInputMessage(''))
        - ajouter le case SEND_MESSAGE dans le reducer et vider l'input
        => return {...state, inputMessage: ''}
      */

      break;

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default websocketMiddleware;

/*
const doSomething = () => {
  const toto = 25;
  // toto est utilisable uniquement pendant l'appel de la fonction, la variable
  // est détruite ensuite
}

// pour faire persister la valeur après l'appel, on peut utiliser return
const doSomething = () => {
  const toto = 25;
  return toto;
}

const result = doSomething();
// => on conserve la valeur de toto, mais pas la variable toto

Ici on veut conserver le websocket après sa création. La fonction middleware est
appelée par redux automatiquement (chaque fois qu'une action est reçue par le store),
dans notre code on a jamais "websocketMiddleware()", si on fait "return websocket"
il n'y aura pas de création de variable.

=> solution ici :
let toto = 25;

const doSomething = () => {
  console.log(toto);
  toto = 19;
  // => en JS on peut accéder aux variables définies en-dehors de la fonction
}
*/
