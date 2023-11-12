/* eslint-disable import/prefer-default-export */
// => on dit à ESLint que peut-être ensuite on aura besoin d'ajouter d'autres
// fonctions dans ce fichier, donc il nous faut un export nommé

// on place dans ce fichier des fonctions JS utilitaires, pas liées à ce projet,
// qui pourraient re-servir sur un autre projet

// une fonction qui nous indique le prochain id à utiliser, pour un tableau
// d'objets
// => récupérer l'id maximum et faire +1
export const getNextId = (arrayData) => {
  // cas particulier du tableau vide : prochain id vaut 1
  if (arrayData.length === 0) {
    return 1;
  }

  // - récupérer tous les ids : 13/45/3
  // transformer chaque élément du tableau en ne gardant que l'id
  const ids = arrayData.map((item) => item.id);
  // => [13, 45, 3]

  // - sélectionner l'id max : 45
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  // fournit le nombre maximum parmi les arguments
  // Si on veut le maximum d'un tableau, on utilise un spread operator
  const idMax = Math.max(...ids);
  // c'est comme si on faisait Math.max(ids[0], ids[1], etc)
  // => 45

  // - faire +1
  return idMax + 1;
};

/* Exemple de tableau :
[
  {
    id: 13,
    // des données
  },
  {
    id: 45,
    // des données
  },
  {
    id: 3,
    // des données
  }
]

=> algorithme :
- récupérer tous les ids : 13/45/3
- sélectionner l'id max : 45
- faire +1

Attention si le tableau est vide :
- récupérer tous les ids : tableau vide
- sélectionner l'id max : NaN (Not a Number)
- faire +1 : NaN
=> on fait une exception de traitement : si tableau vide alors prochain id = 1
*/
