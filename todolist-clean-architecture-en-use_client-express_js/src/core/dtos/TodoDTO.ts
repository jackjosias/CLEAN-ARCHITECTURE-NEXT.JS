// src/core/dtos/TodoDTO.ts

/**
 * Interface représentant les données pour créer une nouvelle tâche.
 */
export interface CreateTodoDTO
{
  /**
   * Le titre de la tâche.
   * @type {string}
   */
  title: string;
}

/**
 * Interface représentant les données pour mettre à jour une tâche existante.
 */
export interface UpdateTodoDTO
{
  /**
   * Le nouveau titre de la tâche (facultatif).
   * @type {string | undefined}
   */
  title?: string;

  /**
   * Indique si la tâche est terminée ou non (facultatif).
   * @type {boolean | undefined}
   */
  completed?: boolean;
}


/*

    ## Explication du code et des concepts

      Ce fichier `TodoDTO.ts` définit des interfaces TypeScript pour les données de type "tâche" (Todo) utilisées dans l'application. 


      **C'est quoi une interface en TypeScript ?**
          Imaginez une interface comme un contrat que vos données doivent respecter. Elle définit la forme que doivent avoir vos objets.  


      **DTO (Data Transfer Object) :**
          C'est un patron de conception (design pattern) utilisé pour transmettre des données entre différentes couches d'une application. Ici, les DTOs  `CreateTodoDTO` et `UpdateTodoDTO` définissent la structure des données  échangées lors de la création ou de la mise à jour d'une tâche.


      **A quoi servent ces interfaces ?**

          * **Meilleure organisation du code :** En définissant clairement la structure des données, le code est plus lisible et maintenable.
          * **Prévention des erreurs :** TypeScript utilise ces interfaces pour vérifier les types de données, ce qui permet de détecter les erreurs potentielles dès la compilation. 
          * **Collaboration facilitée :**  En définissant un format standard pour les données, la collaboration entre développeurs est simplifiée.


      **Détail des interfaces:**

          * **`CreateTodoDTO`**:  Utilisée pour créer une nouvelle tâche. Elle exige uniquement le `title` (titre) de la tâche, qui est de type `string` (chaîne de caractères).

          * **`UpdateTodoDTO`**: Utilisée pour mettre à jour une tâche existante.  
              * `title?` : Le `?` signifie que le champ `title` est optionnel. Vous pouvez mettre à jour le titre, mais ce n'est pas obligatoire.
              * `completed?`:  Ce champ est également optionnel et permet de marquer une tâche comme terminée (`true`) ou non (`false`).

      ## Résumé et Analyse du Code

      ### But et Utilité
          Le fichier `TodoDTO.ts` est essentiel pour la gestion des données "tâche" dans une application de type "liste de tâches" (todo list). Il assure la cohérence et la validation des données échangées entre les différentes couches de l'application.


      ### Lacunes et Améliorations Possibles

          * **Gestion des erreurs :**
              On pourrait envisager d'ajouter des messages d'erreur plus précis en cas de données invalides, par exemple si le titre est vide.
          
          * **Documentation complémentaire :**
              Bien que les commentaires soient présents, on pourrait ajouter des exemples d'utilisation concrets des DTOs pour une meilleure compréhension.


      ## Réflexions du Développeur Jack-Josias
          On peut imaginer que le développeur Jack-Josias cherchait à créer une base solide pour son application de liste de tâches. L'utilisation de TypeScript et des DTOs reflète une volonté d'avoir un code propre, maintenable et évolutif.


      ## Impact du Code

      ### Positif

          * **Clarté et lisibilité du code.**
          * **Meilleure collaboration entre développeurs.**
          * **Prévention des erreurs liées aux types de données.**

      ### Négatif

         * **Légère augmentation de la quantité de code à écrire.**


      ## Cas Pratiques d'Utilisation en 2024
      Ce type de code est pertinent pour une variété d'applications web modernes en 2024 :

          * **Applications de gestion de tâches (Trello, Asana, etc.).**
          * **Plateformes e-commerce (gestion des produits, des commandes, etc.).**
          * **Applications de réseaux sociaux (gestion des publications, des commentaires, etc.).**
          * **Logiciels de gestion de projet.**

      En résumé, tout projet nécessitant une structuration et une validation des données peut bénéficier de l'utilisation de TypeScript et des DTOs. 

*/