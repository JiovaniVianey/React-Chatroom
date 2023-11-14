// le middleware pour gérer l'authentification (généralement un middleware par
// fonctionnalité)
import axios from 'axios';
import { SUBMIT_LOGIN, saveSuccessfulLogin } from '../actions/chatActions';

const authMiddleware = (store) => (next) => (action) => {
  // console.log('authMiddleware', action);

  // on veut envoyer une requête au serveur quand le formulaire est soumis
  switch (action.type) {
    case SUBMIT_LOGIN:
      // console.log('il faut envoyer la requête');
      axios
        .post(
          // URL
          'http://localhost:3001/login',
          // paramètres
          {
            email: store.getState().email,
            password: store.getState().password,
          }
        )
        .then((response) => {
          console.log(response);
          // dans response.data.pseudo on a le pseudo de l'utilisateur connecté

          // Objectif :
          // enregistrer le pseudo dans le state => c'est le reducer qui doit s'en
          // occuper, donc on dispatch une action

          // NE PAS réutiliser l'action qui a déclenché la requête, sinon boucle
          // infinie
          store.dispatch(saveSuccessfulLogin(response.data.pseudo));

          // /!\ si on veut stocker l'action dans une variable, il faut un autre
          // nom que 'action' pour la variable (le middleware a déjà un paramètre
          // qui s'appelle 'action')
          // const actionToDispatch = saveSuccessfulLogin(response.data.pseudo);
          // store.dispatch(actionToDispatch);
        })
        .catch((error) => {
          // par exemple si les identifiants sont non valides, le serveur renvoie
          // une erreur 401 Unauthorized
          console.log(error);
          // TODO afficher un message d'erreur pour l'utilisateur
        });
      break;

    default:
  }

  // on passe l'action "au suivant"
  next(action);
};

export default authMiddleware;
