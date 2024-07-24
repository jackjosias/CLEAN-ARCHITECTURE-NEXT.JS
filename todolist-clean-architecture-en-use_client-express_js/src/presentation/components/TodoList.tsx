// Importe le hook 'useState' de React pour gérer l'état localement dans ce composant.
import React from 'react';
// Importe le hook personnalisé 'useTodos' qui contient la logique métier pour gérer les tâches.
import { useTodos } from '../hooks/useTodos';
// Importe le composant 'TodoItem' qui représente une tâche individuelle.
import TodoItem from './TodoItem';
// Importe le composant 'TodoForm' qui permet d'ajouter de nouvelles tâches.
import TodoForm from './TodoForm';
// Importe les composants 'motion' et 'AnimatePresence' de 'framer-motion' pour les animations.
import { motion, AnimatePresence } from 'framer-motion';

// Définition du composant fonctionnel 'TodoList'.
const TodoList = () =>
{
  // Utilise le hook 'useTodos' pour récupérer l'état et les fonctions de gestion des tâches.
  // 'todos': Un tableau contenant les tâches.
  // 'isLoading': Un booléen indiquant si les tâches sont en cours de chargement.
  // 'error': Une chaîne de caractères contenant un message d'erreur en cas de problème.
  // 'toggleTodo': Une fonction pour basculer l'état 'terminé' d'une tâche.
  // 'deleteTodo': Une fonction pour supprimer une tâche.
  const { todos, isLoading, error, toggleTodo, deleteTodo } = useTodos();


  if (!todos || isLoading) {
    return (
      <div className="flex items-center justify-center h-32">
        <div className="loading-spinner">
          Loading&hellip;
        </div>
      </div>
    );
  }


  // Affiche un message d'erreur si 'error' est défini.
  if (error) return <div className="text-center text-red-500">Erreur: {error}</div>;

  // Affiche la liste des tâches.
  return (
    <div
      // Styles Tailwind CSS pour le conteneur principal de la liste de tâches.
      // - 'p-4': Ajoute un padding de 4 unités autour du conteneur.
      // - 'max-w-lg': Définit une largeur maximale pour le conteneur, le rendant responsive.
      // - 'mx-auto': Centre le conteneur horizontalement.
      // - 'h-full': Définit la hauteur du conteneur à 100% de son parent.
      // - 'flex flex-col items-center justify-start': Affiche les éléments en colonne, centrés horizontalement et en haut de l'espace vertical.
      className="p-4 max-w-lg mx-auto h-full flex flex-col items-center justify-start"
    >

      {/*
        Conteneur pour le formulaire d'ajout de tâches.
        - 'initial={{ opacity: 0, scale: 0.95 }}': Définit l'état initial de l'animation avec une opacité de 0 et une échelle de 0.95.
        - 'animate={{ opacity: 1, scale: 1 }}': Définit l'état final de l'animation avec une opacité de 1 et une échelle de 1.
        - 'transition={{ duration: 0.4, ease: "easeOut" }}': Définit la durée de l'animation à 0.4 seconde et utilise une fonction d'accélération 'easeOut'.
      */}

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {/* Affiche le formulaire d'ajout de tâches. */}
        <TodoForm />
        
      </motion.div>

      {/*
        Liste non ordonnée pour afficher les tâches.
        - 'mt-8': Ajoute une marge supérieure de 8 unités.
        - 'w-full': Définit la largeur de la liste à 100% de son parent.
        - 'h-64': Définit la hauteur de la liste à 64 unités.
        - 'overflow-y-auto': Ajoute une barre de défilement verticale si nécessaire.
        - 'custom-scrollbar': Applique un style personnalisé à la barre de défilement (défini ailleurs dans le code).
        - 'p-8': Ajoute un padding de 8 unités autour de la liste.
      */}
      <ul className="mt-8 w-full h-64 overflow-y-auto custom-scrollbar p-8">
        <AnimatePresence>
          {/*
            Vérifie si 'todos' est un tableau et s'il contient des éléments.
          */}
          {Array.isArray(todos) && todos.length > 0 ? (
            // Si oui, affiche chaque tâche dans un élément 'li'.
            todos.map((todo) => (
              <motion.div
                key={todo.id}
                // Animations pour l'apparition et la disparition des tâches.
                initial={{ opacity: 0, y: 20 }} // État initial : opacité 0, décalage vertical de 20 unités vers le bas
                animate={{ opacity: 1, y: 0 }} // État animé : opacité 1, décalage vertical de 0
                exit={{ opacity: 0, y: -20 }} // État de sortie : opacité 0, décalage vertical de 20 unités vers le haut
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }} // Options de transition : durée, fonction d'accélération
              >
                <TodoItem
                  todo={todo} // Passe l'objet 'todo' au composant 'TodoItem'
                  onToggle={toggleTodo} // Passe la fonction 'toggleTodo' au composant 'TodoItem'
                  onDelete={deleteTodo} // Passe la fonction 'deleteTodo' au composant 'TodoItem'
                />
              </motion.div>
            ))
          ) : (
            // Si non, affiche un message indiquant qu'il n'y a aucune tâche.
            <div style={{ color: 'white' }} className="text-center !text-white">
              Aucune tâche pour le moment
            </div>
          )}
        </AnimatePresence>
      </ul>
    </div>
  );
};

// Exporte le composant 'TodoList' pour le rendre utilisable dans d'autres parties de l'application.
export default TodoList;








/*

  ## Explication du code:

  Ce code est un composant React appelé `TodoList` qui affiche une liste de tâches. Il utilise plusieurs concepts importants :

  **1. Hooks React:**

  - `useState`: Ce hook n’est pas utilisé directement dans ce composant, mais il est important de le comprendre car il est probablement utilisé dans le hook personnalisé `useTodos`. `useState` permet de gérer l’état localement dans un composant fonctionnel.
  - `useTodos`: Ce hook personnalisé est importé et utilisé pour récupérer l’état des tâches (`todos`, `isLoading`, `error`) et les fonctions pour interagir avec ces tâches (`toggleTodo`, `deleteTodo`). L’utilisation d’un hook personnalisé permet de séparer la logique métier de la présentation, ce qui rend le code plus lisible et maintenable.

  **2. Composants React:**

  - `TodoItem`: Ce composant représente une seule tâche et est rendu pour chaque tâche dans le tableau `todos`. Il reçoit la tâche individuelle (`todo`), la fonction `toggleTodo` pour marquer une tâche comme terminée ou non, et la fonction `deleteTodo` pour supprimer une tâche.
  - `TodoForm`: Ce composant permet aux utilisateurs d’ajouter de nouvelles tâches à la liste.

  **3. Librairie Framer Motion:**

  - `motion.div`: Ce composant de Framer Motion permet d'animer des éléments HTML. Dans ce code, il est utilisé pour animer l'apparition du formulaire `TodoForm` et des tâches individuelles (`TodoItem`).
  - `AnimatePresence`: Ce composant de Framer Motion est utilisé pour animer l'ajout et la suppression d'éléments de la liste. Il permet de réaliser des animations d'entrée et de sortie fluides pour les tâches.

  **4. Tailwind CSS:**

  Ce code utilise Tailwind CSS pour le style. Tailwind CSS est une librairie CSS utilitaire qui permet de styliser les éléments directement dans le code HTML à l'aide de classes CSS précises. Voici quelques exemples de classes utilisées et leur signification :

  - `flex`: Affiche les éléments enfants en tant que flexbox.
  - `items-center`: Aligne les éléments enfants au centre verticalement.
  - `justify-center`: Aligne les éléments enfants au centre horizontalement.
  - `h-32`: Définit la hauteur de l'élément à 32 unités (pixels par défaut).
  - `w-8`: Définit la largeur de l'élément à 8 unités.
  - `border-4`: Définit l'épaisseur de la bordure à 4 unités.
  - `border-t-blue-500`: Définit la couleur de la bordure supérieure à bleu-500 (une nuance de bleu dans la palette de couleurs de Tailwind CSS).
  - `rounded-full`: Arrondit les coins de l'élément pour en faire un cercle.
  - `animate-spin`: Applique une animation de rotation infinie à l'élément.

  **5. Logique du code:**

  - Le composant `TodoList` affiche d'abord un indicateur de chargement si `isLoading` est vrai, indiquant que les tâches sont en cours de récupération.
  - Si une erreur se produit pendant la récupération des tâches (`error` est défini), un message d'erreur est affiché.
  - Si tout se passe bien, le composant affiche le formulaire `TodoForm` pour ajouter des tâches et la liste des tâches existantes.
  - La liste des tâches est affichée à l'aide de la méthode `map()`, qui parcourt le tableau `todos` et rend un composant `TodoItem` pour chaque tâche.
  - Des animations sont utilisées pour l'apparition du formulaire, l'ajout et la suppression de tâches, ce qui rend l'interface utilisateur plus dynamique et agréable à utiliser.

  ## Commentaire final général:

  Ce code est un bon exemple de composant React bien structuré et lisible. Il utilise des hooks personnalisés pour séparer la logique métier de la présentation, des composants React pour la modularité et la réutilisation du code, et une librairie d'animation pour une meilleure expérience utilisateur.

  **Lacunes et améliorations possibles:**

  - **Gestion des erreurs plus robuste**: Actuellement, le code affiche un message d'erreur générique. Il serait intéressant de fournir des informations plus précises sur l'erreur et des solutions possibles à l'utilisateur.
  - **Pagination**: Si la liste des tâches devient trop longue, il serait judicieux d'implémenter une pagination pour améliorer les performances et la convivialité.
  - **Tri et filtrage**: La possibilité de trier et de filtrer les tâches pourrait être ajoutée pour aider les utilisateurs à gérer des listes de tâches plus volumineuses.

  ## Ce que le développeur Jack-Josias pensait probablement en codant cela:

  Jack-Josias voulait probablement créer un composant de liste de tâches réutilisable, maintenable et agréable à utiliser. Il a utilisé les meilleures pratiques de développement React, comme les hooks personnalisés et la composition de composants, pour atteindre cet objectif. Il a également accordé une attention particulière à l'expérience utilisateur en ajoutant des animations fluides.

  ## Impact positif et négatif du code:

  **Positif:**

  - Code propre, lisible et maintenable.
  - Bonne séparation des préoccupations (logique métier, présentation, animation).
  - Expérience utilisateur agréable grâce aux animations.
  - Bonne base pour ajouter des fonctionnalités supplémentaires (pagination, tri, filtrage).

  **Négatif:**

  - Gestion des erreurs basique.
  - Manque de fonctionnalités avancées (pagination, tri, filtrage).

  ## Cas pratiques d'utilisation en 2024:

  - Applications de gestion de tâches personnelles et professionnelles.
  - Tableaux de bord et outils de suivi de projet.
  - Applications de liste de courses et de rappels.
  - Systèmes de gestion des tickets d'assistance.
  - Plateformes d'apprentissage en ligne pour suivre les progrès des étudiants.

  ## En résumé:

  Ce code est un excellent exemple de composant de liste de tâches bien conçu et peut servir de base solide pour des applications plus complexes. En ajoutant des fonctionnalités supplémentaires et en améliorant la gestion des erreurs, ce code peut être utilisé dans une variété d'applications réelles en 2024 et au-delà.

*/