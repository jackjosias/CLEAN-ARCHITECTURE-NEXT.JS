// src/core/domain/entities/Todo.ts

/**
 * Interface représentant une tâche (Todo).
 * Une interface en TypeScript est comme un contrat
 * que les objets peuvent implémenter.
 * Elle définit les propriétés et leurs types que l'objet doit avoir.
 *
 * @interface Todo
 */
export interface Todo
{
    /**
     * Identifiant unique de la tâche.
     * C'est une chaîne de caractères qui permet d'identifier
     * de manière unique chaque tâche.
     *
     * @type {string}
     */
    id: string;

    /**
     * Titre ou description de la tâche.
     * C'est le nom que l'on donne à la tâche,
     * par exemple "Faire les courses" ou "Apprendre TypeScript".
     *
     * @type {string}
     */
    title: string;

    /**
     * Indique si la tâche est terminée ou non.
     * Si la tâche est terminée, cette propriété vaut `true`, 
     * sinon elle vaut `false`.
     *
     * @type {boolean}
     */
    completed: boolean;

    /**
     * Date et heure de création de la tâche.
     * C'est la date à laquelle la tâche a été créée.
     *
     * @type {Date}
     */
    createdAt: Date;

    /**
     * Date et heure de la dernière modification de la tâche.
     * C'est la date à laquelle la tâche a été modifiée
     * pour la dernière fois.
     *
     * @type {Date}
     */
    updatedAt: Date;
}




/*

  *Explication du code :
      Ce code définit une interface TypeScript nommée Todo qui représente la structure d'une tâche.

      Interface:
        En TypeScript, une interface sert de contrat pour les objets.
        Elle définit les propriétés (avec leur type) qu'un objet doit avoir pour être conforme à cette interface.

      Propriétés :
        id (string) : Un identifiant unique pour chaque tâche.
        title (string) : Le titre ou la description de la tâche.
        completed (boolean) : Indique si la tâche est terminée (true) ou non (false).
        createdAt (Date) : La date et l'heure de création de la tâche.
        updatedAt (Date) : La date et l'heure de la dernière modification de la tâche.


  *Commentaire final général :

    Objectif :
      Cette interface Todo fournit un modèle pour représenter une tâche dans l'application.

    Utilité :
      Elle assure la cohérence des données de type "tâche" dans tout le code.

    Lacunes et améliorations :
      Pour une application plus complexe, on pourrait ajouter d'autres propriétés comme une description plus détaillée, une dueDate (date limite), une priority (priorité), etc.
      On pourrait également créer une classe Todo à partir de cette interface pour y ajouter des méthodes (fonctions) spécifiques aux tâches, par exemple, une méthode markAsComplete() pour marquer une tâche comme terminée.


  *Pensées du développeur Jack-Josias :
      On peut imaginer que le développeur souhaitait créer une base solide pour la gestion des tâches dans son application. L'utilisation d'une interface démontre une volonté d'avoir un code typé et maintenable.


  *Impact du code :
      Positif :
        Clarté et lisibilité : Le code est bien structuré et facile à comprendre.
        Cohérence des données : L'interface garantit que toutes les tâches auront la même structure.
        Maintenance facilitée : Si la structure d'une tâche doit changer, il suffit de modifier l'interface Todo et le compilateur TypeScript signalera toutes les parties du code qui doivent être mises à jour.

      Négatif :
        Manque de flexibilité (potentiel) : Si l'application doit gérer différents types de tâches avec des propriétés spécifiques, cette interface pourrait devenir limitante.

*/