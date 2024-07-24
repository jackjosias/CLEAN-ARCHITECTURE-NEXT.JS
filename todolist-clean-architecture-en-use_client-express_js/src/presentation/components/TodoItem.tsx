// Importe le module React pour pouvoir utiliser JSX.
import React from 'react';

// Importe l'interface Todo depuis le fichier Todo.ts dans le dossier des entités du domaine.
import { Todo } from '../../core/domain/entities/Todo';

// Importe les composants motion et AnimatePresence de la librairie framer-motion pour animer l'élément.
import { motion, AnimatePresence } from 'framer-motion';

// Définit l'interface des props du composant TodoItem.
interface TodoItemProps
{
  // La tâche à afficher.
  todo: Todo;
  // Fonction à appeler lorsque l'état "terminé" de la tâche est modifié.
  onToggle: (id: string) => void;
  // Fonction à appeler lorsque la tâche est supprimée.
  onDelete: (id: string) => void;
}

// Composant React fonctionnel pour afficher un élément de tâche.
const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => 
{
  // Retourne un élément li pour chaque tâche.
  return (
    // Utilise AnimatePresence pour animer l'entrée et la sortie des éléments li.
    <AnimatePresence>
      {/* Utilise le composant motion.li pour animer l'élément li. */}
      <motion.li
        // Classes Tailwind CSS pour le style de l'élément li.
        // - flex: Affiche les éléments enfants en tant que flexbox.
        // - items-center: Aligne verticalement les éléments enfants au centre.
        // - justify-between: Justifie le contenu à gauche et à droite.
        // - p-4: Rembourrage de 4 unités autour du contenu.
        // - my-2: Marge verticale de 2 unités.
        // - mx-auto: Marge horizontale automatique pour centrer l'élément.
        // - rounded-lg: Coins arrondis avec une taille large.
        // - shadow-2xl: Ombre portée extra large.
        // - bg-white/10: Arrière-plan blanc avec une opacité de 10%.
        // - hover:bg-white/20: Arrière-plan blanc avec une opacité de 20% au survol.
        // - transition: Applique une transition aux changements de propriétés.
        // - duration-300: Durée de la transition de 300ms.
        // - ease-in-out: Accélération et décélération de la transition.
        // - transform: Active les transformations CSS.
        // - hover:scale-[1.01]: Augmente légèrement la taille au survol.
        // - group: Permet de cibler les éléments enfants au survol du parent.
        // - relative: Positionnement relatif pour les éléments enfants.
        className="flex items-center justify-between p-4 my-2 mx-auto rounded-lg shadow-2xl bg-white/10 hover:bg-white/20 transition duration-300 ease-in-out transform hover:scale-[1.01] group relative"
        // Propriétés d'animation de framer-motion.
        // - initial: État initial de l'animation.
        // - animate: État final de l'animation.
        // - exit: État de l'animation à la sortie.
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        // Options de transition de framer-motion.
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Conteneur pour la case à cocher et le titre de la tâche. */}
        <div className="flex items-center">
          {/* Case à cocher pour marquer la tâche comme terminée ou non. */}
          <input
            type="checkbox"
            // Coche la case si la tâche est marquée comme terminée.
            checked={todo.completed}
            // Appelle la fonction onToggle avec l'ID de la tâche lorsque l'état de la case à cocher change.
            onChange={() => onToggle(todo.id)}
            // Classes Tailwind CSS pour le style de la case à cocher.
            // - mr-4: Marge droite de 4 unités.
            // - form-checkbox: Style de base pour une case à cocher.
            // - appearance-none: Supprime les styles par défaut du navigateur.
            // - h-6: Hauteur de 6 unités.
            // - w-6: Largeur de 6 unités.
            // - border: Bordure de 1px.
            // - border-gray-600: Couleur de la bordure gris foncé.
            // - rounded-md: Coins arrondis avec une taille moyenne.
            // - checked:bg-gradient-to-r: Applique un dégradé de couleurs de fond lorsque la case est cochée.
            // - checked:from-blue-500: Couleur de départ du dégradé bleu.
            // - checked:to-purple-700: Couleur de fin du dégradé violet.
            // - checked:border-transparent: Bordure transparente lorsque la case est cochée.
            // - focus:outline-none: Supprime le contour au focus.
            // - transition: Applique une transition aux changements de propriétés.
            // - duration-300: Durée de la transition de 300ms.
            // - ease-in-out: Accélération et décélération de la transition.
            className="mr-4 form-checkbox appearance-none h-6 w-6 border border-gray-600 rounded-md checked:bg-gradient-to-r checked:from-blue-500 checked:to-purple-700 checked:border-transparent focus:outline-none transition duration-300 ease-in-out"
          />
          {/* Espace insécable pour séparer la case à cocher du titre. */}
            
          {/* Affiche le titre de la tâche. */}
          <span
            // Style inline pour définir la couleur du texte en blanc.
            style={{ color: 'white' }}
            // Classes Tailwind CSS pour le style du titre de la tâche.
            // - !text-white: Couleur du texte blanc (remplace toute autre règle).
            // - text-gray-300: Couleur du texte gris clair.
            // - font-medium: Police de caractères moyenne.
            // - text-lg: Taille du texte large.
            // - group-hover:text-blue-400: Couleur du texte bleu au survol du parent.
            // - transition: Applique une transition aux changements de propriétés.
            // - duration-300: Durée de la transition de 300ms.
            // - ease-in-out: Accélération et décélération de la transition.
            // - line-through: Ajoute un trait au milieu du texte si la tâche est terminée.
            // - text-gray-600: Couleur du texte gris foncé si la tâche est terminée.
            className={` !text-white text-gray-300 font-medium text-lg group-hover:text-blue-400 transition duration-300 ease-in-out ${
              todo.completed ? 'line-through text-gray-600' : ''
            }`}
          >
            {/* Titre de la tâche. */}
            {todo.title}

          </span>
        </div>

        
        {/* Bouton pour supprimer la tâche. */}
        <motion.button
          // Appelle la fonction onDelete avec l'ID de la tâche lorsque le bouton est cliqué.
          onClick={() => onDelete(todo.id)}
          // Style inline pour définir la couleur du texte en blanc.
          style={{ color: 'white' }}
          // Classes Tailwind CSS pour le style du bouton.
          // - !text-white: Couleur du texte blanc (remplace toute autre règle).
          // - absolute: Positionnement absolu par rapport au parent.
          // - right-4: Marge droite de 4 unités.
          // - top-1/2: Position verticale au milieu.
          // - transform: Active les transformations CSS.
          // - -translate-y-1/2: Déplace verticalement de -50% de sa propre hauteur pour le centrer.
          // - opacity-0: Opacité de 0 (transparent).
          // - group-hover:opacity-100: Opacité de 100% (opaque) au survol du parent.
          // - transition: Applique une transition aux changements de propriétés.
          // - duration-300: Durée de la transition de 300ms.
          // - ease-in-out: Accélération et décélération de la transition.
          // - bg-red-500: Couleur de fond rouge.
          // - hover:bg-red-600: Couleur de fond rouge foncé au survol.
          // - text-white: Couleur du texte blanc.
          // - px-3: Rembourrage horizontal de 3 unités.
          // - py-2: Rembourrage vertical de 2 unités.
          // - rounded-full: Coins arrondis pour un bouton circulaire.
          // - shadow-md: Ombre portée moyenne.
          // - focus:outline-none: Supprime le contour au focus.
          className="!text-white  absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-full shadow-md focus:outline-none"
          // Propriétés d'animation de framer-motion.
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Texte du bouton. */}
          Supprimer
        </motion.button>
      </motion.li>
    </AnimatePresence>
  );
};

// Exporte le composant TodoItem par défaut.
export default TodoItem;