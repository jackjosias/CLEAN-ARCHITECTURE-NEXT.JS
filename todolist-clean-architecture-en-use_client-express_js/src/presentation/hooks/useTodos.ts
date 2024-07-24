
// src/presentation/hooks/useTodos.ts

// Importer le hook useEffect de la bibliothèque React
import { useEffect } from 'react';

// Importer le hook useTodoStore depuis le module store/todoStore.ts
import { useTodoStore } from '../../store/todoStore';

// Définir la fonction useTodos qui sera utilisée comme hook
export function useTodos() 
{

  
  
  
  
  
  
  
  

  const {
    todos,            // - todos : Tableau des tâches
    isLoading,        // - isLoading : Booléen indiquant si le chargement des tâches est en cours
    error,            // - error : Objet d'erreur, null s'il n'y a pas d'erreur
    fetchTodos,       // - fetchTodos : Fonction de récupération des tâches
    addTodo,          // - addTodo : Fonction d'ajout d'une tâche
    toggleTodo,       // - toggleTodo : Fonction de basculement de l'état d'une tâche (fait/à faire)
    deleteTodo,       // - deleteTodo : Fonction de suppression d'une tâche

  } = useTodoStore(); // Récupérer les propriétés et fonctions du store de gestion des tâches


  // Exécuter l'effet à chaque rendu du composant (initial et mises à jour)
  useEffect(() =>
  {

    // Lancer la récupération des tâches au chargement initial du composant
    fetchTodos();

  }, [fetchTodos]); // Dépendance sur la fonction fetchTodos pour éviter une boucle infinie


  // Retourner les données et fonctions nécessaires au composant
  return { todos, isLoading, error, addTodo, toggleTodo, deleteTodo };
}


/*

  **Commentaire final général sur le code :**

    Ce code est une implémentation du hook `useTodos` dans une architecture propre. Il fournit une interface pour récupérer, ajouter, modifier et supprimer des tâches dans l'application.

  **Ce à quoi le développeur pensait en codant ce code :**

  En concevant ce hook, l'objectif était de fournir une interface simple et facile à utiliser pour gérer les tâches dans l'application. L'utilisation du hook permet de séparer les préoccupations liées à la gestion de l'état des tâches de la logique de l'interface utilisateur, ce qui rend le code plus maintenable et testable.

  **Impact positif du code :**

      - Séparation des préoccupations entre la gestion de l'état et la logique de l'interface utilisateur
      - Amélioration de la maintenabilité et de la testabilité du code
      - Fournit une interface facile à utiliser pour gérer les tâches dans l'application

  **Impact négatif du code :**

      - Peut nécessiter une compréhension de la gestion de l'état avec Redux ou un autre système de gestion de l'état
      - Peut ajouter une complexité supplémentaire à l'architecture de l'application

*/