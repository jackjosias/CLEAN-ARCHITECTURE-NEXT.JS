
// Importe la fonction 'create' de la librairie Zustand. Cette fonction permet de créer un nouveau store.
import { create } from 'zustand';
// Importe l'interface 'Todo'. Cette interface définit la structure d'un objet "Todo" qui représente une tâche.
import { Todo } from '../core/domain/entities/Todo';
// Importe la classe 'TodoUseCases'. Cette classe contient la logique métier (use cases) pour les opérations sur les tâches.
import { TodoUseCases } from '../core/usecases/TodoUseCases';
// Importe la classe 'TodoService'. Cette classe sert d'intermédiaire entre les use cases et le repository. 
// Elle permet d'implémenter la logique d'accès aux données sans exposer les détails au niveau des use cases.
import { TodoService } from '../core/application/services/TodoService';
// Importe la classe 'ApiTodoRepository'. Cette classe est responsable de la communication avec l'API pour les opérations CRUD (Create, Read, Update, Delete) sur les tâches.
import { ApiTodoRepository } from '../infrastructure/repositories/ApiTodoRepository';


// Définition de l'interface 'TodoState'. Cette interface décrit la structure de l'état du store pour les tâches. 
interface TodoState
{
  // 'todos' : Un tableau d'objets 'Todo' qui représente la liste des tâches.
  todos: Todo[];
  // 'isLoading' : Un booléen indiquant si les tâches sont en cours de chargement depuis l'API.
  isLoading: boolean;
  // 'error' : Une chaîne de caractères contenant un message d'erreur en cas de problème, sinon null.
  error: string | null;
  // 'fetchTodos' : Une fonction asynchrone qui permet de récupérer la liste des tâches depuis l'API.
  fetchTodos: () => Promise<void>;
  // 'addTodo' : Une fonction asynchrone qui permet d'ajouter une nouvelle tâche à la liste. Elle prend en paramètre le titre de la tâche.
  addTodo: (title: string) => Promise<void>;
  // 'toggleTodo' : Une fonction asynchrone qui permet de basculer l'état "completed" d'une tâche. Elle prend en paramètre l'identifiant de la tâche à modifier.
  toggleTodo: (id: string) => Promise<void>;
  // 'deleteTodo' : Une fonction asynchrone qui permet de supprimer une tâche de la liste. Elle prend en paramètre l'identifiant de la tâche à supprimer.
  deleteTodo: (id: string) => Promise<void>;
}


// Création d'une instance de 'ApiTodoRepository'. C'est ici qu'on pourrait changer l'implémentation pour utiliser LocalStorage par exemple.
const todoRepository = new ApiTodoRepository();
// Création d'une instance de 'TodoService' en lui injectant le repository 'todoRepository'. 
// Cette injection de dépendances permet de facilement changer l'implémentation du repository sans modifier le code du service.
const todoService = new TodoService(todoRepository);
// Création d'une instance de 'TodoUseCases' en lui injectant le service 'todoService'.
const todoUseCases = new TodoUseCases(todoService);


// Création et export du store 'useTodoStore' en utilisant la fonction 'create' de Zustand. 
// Ce store utilise l'interface 'TodoState' pour définir la structure de son état.
export const useTodoStore = create<TodoState>((set) => (
{
  // Définition de l'état initial du store.
  todos: [], // La liste des tâches est vide au départ.
  isLoading: false, // Aucun chargement en cours.
  error: null, // Pas d'erreur au départ.

  // Fonction pour récupérer la liste des tâches depuis l'API.
  fetchTodos: async () =>
  {
    // Mise à jour de l'état pour indiquer que le chargement est en cours.
    set({ isLoading: true });
    // Bloc try/catch pour gérer les erreurs potentielles lors de la récupération des tâches.
    try
    {
      // Appel de la fonction 'getAllTodos' du use case pour récupérer les tâches.
      const todos = await todoUseCases.getAllTodos();
      // Mise à jour de l'état avec la liste des tâches récupérées et indication que le chargement est terminé.
      set({ todos, isLoading: false });
    } catch (error) {
      // En cas d'erreur, mise à jour de l'état avec un message d'erreur et indication que le chargement est terminé.
      set({ error: 'Erreur lors de la récupération des tâches', isLoading: false });
    }
  },

  // Fonction pour ajouter une nouvelle tâche à la liste.
  addTodo: async (title: string) =>
  {
    // Bloc try/catch pour gérer les erreurs potentielles lors de l'ajout de la tâche.
    try
    {
      // Appel de la fonction 'createTodo' du use case pour ajouter la tâche.
      const newTodo = await todoUseCases.createTodo({ title });
      // Mise à jour de l'état en ajoutant la nouvelle tâche à la liste existante. 
      // On utilise une callback dans 'set' pour accéder à l'état précédent et éviter les problèmes de concurrence.
      set((state) => ({ todos: [...state.todos, newTodo] }));
    } catch (error) {
      // En cas d'erreur, mise à jour de l'état avec un message d'erreur.
      set({ error: 'Erreur lors de l\'ajout de la tâche' });
    }
  },

  // Fonction pour basculer l'état "completed" d'une tâche.
  toggleTodo: async (id: string) =>
  {
    // Bloc try/catch pour gérer les erreurs potentielles lors de la bascule de l'état de la tâche.
    try
    {
      // Appel de la fonction 'toggleTodoCompletion' du use case pour basculer l'état de la tâche.
      const updatedTodo = await todoUseCases.toggleTodoCompletion(id);
      // Mise à jour de l'état en mettant à jour la tâche correspondante dans la liste. 
      // On utilise 'map' pour parcourir la liste et modifier uniquement la tâche avec l'identifiant correspondant.
      set((state) => (
      {
        todos: state.todos.map((todo) =>
          todo.id === id ? updatedTodo : todo
        ),
      }));
    } catch (error) {
      // En cas d'erreur, mise à jour de l'état avec un message d'erreur.
      set({ error: 'Erreur lors de la bascule de la tâche' });
    }
  },

  // Fonction pour supprimer une tâche de la liste.
  deleteTodo: async (id: string) =>
  {
    // Bloc try/catch pour gérer les erreurs potentielles lors de la suppression de la tâche.
    try
    {
      // Appel de la fonction 'deleteTodo' du use case pour supprimer la tâche.
      await todoUseCases.deleteTodo(id);
      // Mise à jour de l'état en supprimant la tâche correspondante de la liste.
      // On utilise 'filter' pour créer une nouvelle liste sans la tâche à supprimer.
      set((state) => (
      {
        todos: state.todos.filter((todo) => todo.id !== id),
      }));
    } catch (error) {
      // En cas d'erreur, mise à jour de l'état avec un message d'erreur.
      set({ error: 'Erreur lors de la suppression de la tâche' });
    }
  },

}));






/*

  ## Commentaire final général

    Ce code représente un exemple d'implémentation d'un store global avec Zustand pour gérer des tâches dans une application Next.js. Il suit les principes de la Clean Architecture et de l'injection de dépendances pour une meilleure organisation et testabilité du code. 

  **Points forts :**

      * **Clean Architecture :** Séparation claire des responsabilités (domaine, application, infrastructure) pour un code plus facile à maintenir et à faire évoluer.
      * **Injection de dépendances :** Permet de facilement remplacer l'implémentation des dépendances (repository, services) sans modifier le code des use cases.
      * **Utilisation de Zustand :** Simplifie la gestion de l'état global de l'application.

  **Lacunes et améliorations possibles :**

      * **Gestion des erreurs :** Le code utilise des blocs try/catch pour gérer les erreurs, mais il pourrait être amélioré en utilisant une librairie dédiée pour gérer les erreurs de manière plus centralisée et robuste.
      * **Typage :** Le code utilise le typage de TypeScript, mais il pourrait être amélioré en utilisant des types plus précis et en ajoutant des commentaires pour une meilleure documentation.
      * **Tests unitaires :** Il serait important d'ajouter des tests unitaires pour chaque fonction du store afin de garantir le bon fonctionnement du code.

  ## Pensées du développeur 
  
      En tant que développeur (Jack-Josias), j'ai conçu ce code en pensant à :

      * **Facilité de maintenance :** Le code doit être facile à lire, comprendre et modifier par moi-même ou par d'autres développeurs.
      * **Évolutivité :** Le code doit pouvoir évoluer facilement pour répondre aux besoins futurs de l'application.
      * **Testabilité :** Le code doit être facilement testable pour garantir son bon fonctionnement.
      * **Performance :** Le code doit être performant pour offrir une bonne expérience utilisateur.

  ## Impact du code

      **Positif :**

      * **Meilleure organisation du code**
      * **Code plus lisible et maintenable**
      * **Facilité de test et de débogage**
      * **Réutilisation du code facilitée**

      **Négatif :**

      * **Complexité accrue au début**
      * **Risque de sur-ingénierie si le projet est trop simple**

  ## Cas pratiques d'utilisation en 2024

      * **Gestion d'une liste de produits dans un site e-commerce**
      * **Gestion des utilisateurs dans une application web**
      * **Gestion des commentaires dans un blog**
      * **Gestion des réservations dans une application de réservation d'hôtels**
      * **Gestion des données d'un tableau de bord (dashboard)**

  ## Conclusion

      Ce code fournit une base solide pour la gestion de l'état des tâches dans une application Next.js. Il peut être facilement adapté et étendu pour répondre à des besoins spécifiques. L'utilisation de la Clean Architecture et de l'injection de dépendances permet d'obtenir un code plus maintenable, évolutif et testable. N'oubliez pas d'ajouter des tests unitaires pour garantir la qualité de votre code.


*/