// Importe le composant TodoService depuis le chemin '../application/services/TodoService'. 
// Ce composant est responsable de la logique métier liée aux tâches.
import { TodoService } from '../application/services/TodoService';

// Importe les interfaces CreateTodoDTO et UpdateTodoDTO depuis le chemin '../dtos/TodoDTO'.
// Ces interfaces définissent la structure des données pour la création et la mise à jour des tâches.
import { CreateTodoDTO, UpdateTodoDTO } from '../dtos/TodoDTO';

// Importe l'interface Todo depuis le chemin '../domain/entities/Todo'.
// Cette interface définit la structure d'une tâche.
import { Todo } from '../domain/entities/Todo';

// Définition de la classe TodoUseCases, qui contient les cas d'utilisation liés aux tâches.
export class TodoUseCases 
{
    // Déclaration d'une propriété privée nommée 'todoService' de type 'TodoService'.
    // Cette propriété sera injectée via le constructeur et permettra d'accéder aux méthodes du service TodoService.

    // Constructeur de la classe TodoUseCases.
    // Il prend en paramètre une instance de TodoService et l'assigne à la propriété 'todoService'.
  constructor(private todoService: TodoService) 
  {
    this.todoService = todoService;
  }

    // Méthode asynchrone pour récupérer toutes les tâches.
    // Elle appelle la méthode 'getAllTodos' du service 'todoService' et retourne une promesse qui se résout avec un tableau de tâches.
  async getAllTodos(): Promise<Todo[]> 
  {
    return this.todoService.getAllTodos();
  }

    // Méthode asynchrone pour créer une nouvelle tâche.
    // Elle prend en paramètre un objet 'dto' de type 'CreateTodoDTO' contenant les informations de la nouvelle tâche.
    // Elle appelle la méthode 'createTodo' du service 'todoService' avec l'objet 'dto' en argument.
    // Elle retourne une promesse qui se résout avec la tâche nouvellement créée.
  async createTodo(dto: CreateTodoDTO): Promise<Todo> 
  {
    return this.todoService.createTodo(dto);
  }

    // Méthode asynchrone pour basculer l'état de complétion d'une tâche.
    // Elle prend en paramètre l'identifiant 'id' de la tâche à modifier.
    // Elle appelle la méthode 'updateTodo' du service 'todoService' avec l'identifiant 'id' et un objet contenant la propriété 'completed' à 'true'.
    // Elle retourne une promesse qui se résout avec la tâche mise à jour.
  async toggleTodoCompletion(id: string): Promise<Todo> 
  {
    const todo = await this.todoService.updateTodo(id, { completed: true });
    return todo;
  }

    // Méthode asynchrone pour supprimer une tâche.
    // Elle prend en paramètre l'identifiant 'id' de la tâche à supprimer.
    // Elle appelle la méthode 'deleteTodo' du service 'todoService' avec l'identifiant 'id'.
    // Elle retourne une promesse qui se résout lorsque la tâche est supprimée.
  async deleteTodo(id: string): Promise<void> 
  {
    return this.todoService.deleteTodo(id);
  }
}











/*

  ## Documentation du code et explications pour débutants :

      Ce code représente une partie d'une application de gestion de tâches ("Todo List") construite avec une architecture logicielle propre (Clean Architecture) et le framework Next.js. 

  **Explications détaillées du code :**

  - **Importations :** Le code commence par importer les éléments nécessaires provenant d'autres parties de l'application. Cela inclut :
      - **`TodoService`**: Un service qui gère la logique métier liée aux tâches, comme l'ajout, la modification et la suppression.
      - **`CreateTodoDTO`, `UpdateTodoDTO`**: Des interfaces (types de données) qui définissent la structure des données attendues lors de la création ou de la mise à jour d'une tâche. DTO signifie "Data Transfer Object" (objet de transfert de données).
      - **`Todo`**: Une interface qui définit la structure d'une tâche, avec ses propriétés (par exemple : id, titre, description, état de complétion).

  - **Classe `TodoUseCases`**: 
      - Cette classe regroupe les différents cas d'utilisation possibles pour interagir avec les tâches. Un cas d'utilisation représente une action complète que l'utilisateur peut effectuer, comme "afficher toutes les tâches", "créer une nouvelle tâche", etc.
      - La classe utilise l'injection de dépendances : elle reçoit une instance de `TodoService` via son constructeur. Cela permet de découpler la logique des cas d'utilisation de l'implémentation concrète du service.
      - **Méthodes de la classe :**
          - **`getAllTodos()`**: Récupère toutes les tâches enregistrées.
          - **`createTodo(dto: CreateTodoDTO)`**: Crée une nouvelle tâche à partir des données fournies dans l'objet `dto`.
          - **`toggleTodoCompletion(id: string)`**: Modifie l'état de complétion d'une tâche existante (cochée/décochée).
          - **`deleteTodo(id: string)`**: Supprime une tâche existante.

  **Résumé et analyse du code :**

  - **But**: Ce code a pour but de fournir une interface claire et structurée pour gérer les actions liées aux tâches dans l'application.
  - **Avantages**: 
      - **Code propre et maintenable**: La séparation des préoccupations (Clean Architecture) rend le code plus facile à comprendre, à tester et à faire évoluer.
      - **Réutilisabilité**: Les cas d'utilisation peuvent être réutilisés dans différentes parties de l'application, comme dans les composants de l'interface utilisateur.
  - **Lacunes et améliorations possibles**: 
      - **Gestion des erreurs**: Le code ne gère pas explicitement les erreurs qui pourraient survenir lors de l'interaction avec le service `TodoService`. Il serait judicieux d'ajouter des blocs `try...catch` pour gérer les exceptions et renvoyer des messages d'erreur pertinents.
      - **Documentation plus détaillée**:  Des commentaires plus précis pourraient être ajoutés pour expliquer les choix de conception et les détails d'implémentation, notamment pour les développeurs qui ne sont pas familiers avec le projet.

  **Pensées du développeur "Jack-Josias" (hypothèses) :**

  - **Modularité et maintenabilité**: Le développeur a probablement cherché à créer un code modulaire et facile à maintenir en utilisant la Clean Architecture.
  - **Évolutivité**: La structure du code suggère une volonté de pouvoir facilement ajouter de nouveaux cas d'utilisation et de nouvelles fonctionnalités à l'application à l'avenir.
  - **Collaboration en équipe**: L'organisation du code et les conventions de nommage laissent penser que le développeur avait à l'esprit la collaboration avec d'autres développeurs.

  **Impact du code :**

  - **Positif**: Améliore la qualité du code, facilite la maintenance, la réutilisation et l'évolution de l'application.
  - **Négatif**: Peut rendre le code initialement plus complexe à comprendre pour les débutants.

  **Cas d'utilisation en 2024 :**

  - Applications web et mobiles de gestion de tâches
  - Plateformes collaboratives en ligne
  - Logiciels de gestion de projets
  - Outils de suivi des progrès personnels

*/