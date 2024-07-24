// Importer les modules nécessaires depuis la bibliothèque 'react'.
// 'useState' est un hook qui permet de gérer l'état local d'un composant.
import React, { useState } from 'react';
// Importer le hook 'useTodoStore' depuis le fichier 'todoStore.ts' situé dans le dossier parent '../../store'.
// Ce hook permet d'accéder à l'état global du store et à ses actions.
import { useTodoStore } from '../../store/todoStore';

// Définir un composant fonctionnel React appelé 'TodoForm'.
// Ce composant représente le formulaire de création de tâche.
// 'React.FC' est un type générique pour les composants fonctionnels React.
const TodoForm: React.FC = () =>
{
    // Initialiser l'état local du composant avec 'useState'.
    // 'title' représente le titre de la nouvelle tâche, initialisé à une chaîne vide.
    // 'setTitle' est une fonction permettant de mettre à jour la valeur de 'title'.
    const [title, setTitle] = useState('');

    // Utiliser le hook 'useTodoStore' pour accéder à l'action 'addTodo' du store.
    // 'addTodo' est une fonction qui permet d'ajouter une nouvelle tâche à la liste des tâches dans le store.
    const addTodo = useTodoStore((state) => state.addTodo);

    // Définir une fonction asynchrone appelée 'handleSubmit'.
    // Cette fonction sera exécutée lors de la soumission du formulaire.
    // 'e' est un objet d'événement de type 'React.FormEvent'.
    const handleSubmit = async (e: React.FormEvent) =>
    {
        // Empêcher le rechargement de la page par défaut lors de la soumission du formulaire.
        e.preventDefault();

        // Vérifier si le titre de la tâche n'est pas vide après suppression des espaces.
        if (title.trim()) {
            // Si le titre n'est pas vide, appeler la fonction 'addTodo' pour ajouter la nouvelle tâche au store.
            // La fonction 'addTodo' prend en paramètre le titre de la tâche.
            await addTodo(title);

            // Réinitialiser la valeur du champ de saisie 'title' à une chaîne vide.
            setTitle('');
        }
    };

    // Retourner le JSX du composant 'TodoForm'.
    return (
        // Définir un formulaire HTML avec la classe 'relative flex items-center h-full p-8 my-4 mx-auto w-full max-w-md rounded-lg shadow-2xl bg-opacity-80 backdrop-filter backdrop-blur-lg border border-gray-800 transition duration-300 ease-in-out transform hover:scale-[1.02]'.
        // La classe applique des styles Tailwind CSS pour le positionnement, la flexbox, la taille, le padding, la marge, l'arrondi des coins, l'ombre, l'arrière-plan, la bordure et la transition.
        <form onSubmit={handleSubmit} className="relative flex items-center h-full p-8 my-4 mx-auto w-full max-w-md rounded-lg shadow-2xl bg-opacity-80 backdrop-filter backdrop-blur-lg border border-gray-800 transition duration-300 ease-in-out transform hover:scale-[1.02]">
            {/* 
                Définir un champ de saisie de type 'text' avec les attributs suivants :
                - type: 'text'
                - value: la valeur de l'état local 'title'
                - onChange: une fonction qui met à jour l'état local 'title' avec la valeur saisie dans le champ
                - placeholder: 'Nouvelle tâche'
                - style: un objet de style inline avec la propriété 'color' définie à 'black'
                - className: 'rounded-lg text-gray-800 rounded-full w-full p-8 px-6 py-4 text-lg font-medium border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out h-16'
                - required: indique que le champ est obligatoire
                La classe applique des styles Tailwind CSS pour l'arrondi des coins, la couleur du texte, la largeur, le padding, la taille du texte, la police, la bordure, le focus et la transition.
            */}
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Nouvelle tâche" style={{ color: 'black' }} className="rounded-lg text-gray-800 rounded-full w-full p-8 px-6 py-4 text-lg font-medium border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out h-16" required />
             
            {/* 
                Définir un bouton de soumission avec les attributs suivants :
                - type: 'submit'
                - className: 'rounded-lg p-7 py-4 absolute right-2 top-1/2 transform -translate-y-1/2 px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out hover:scale-105 focus:outline-none h-16'
                La classe applique des styles Tailwind CSS pour l'arrondi des coins, le padding, le positionnement absolu, la transformation, la couleur du texte, l'arrière-plan dégradé, l'ombre, la transition, le focus et la hauteur.
            */}
            <button type="submit" className="rounded-lg p-7 py-4 absolute right-2 top-1/2 transform -translate-y-1/2 px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out hover:scale-105 focus:outline-none h-16">
                Ajouter
            </button>
        </form>
    );
};

// Exporter le composant 'TodoForm' par défaut.
export default TodoForm;