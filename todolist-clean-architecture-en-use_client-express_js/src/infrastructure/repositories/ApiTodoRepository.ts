// Importe l'interface ITodoRepository depuis le chemin relatif '../../core/domain/repositories/ITodoRepository'.
// Cette interface définit les méthodes que doivent implémenter tous les repositories de Todo.
import { ITodoRepository } from '../../core/domain/repositories/ITodoRepository';

// Importe la classe Todo depuis le chemin relatif '../../core/domain/entities/Todo'.
// Cette classe représente un objet Todo avec ses propriétés.
import { Todo } from '../../core/domain/entities/Todo';

// Importe l'objet api depuis le chemin relatif '../http/proxy'.
// Cet objet est probablement un client HTTP configuré pour interagir avec une API.
import api from '../http/proxy';

  // Définition de la classe ApiTodoRepository qui implémente l'interface ITodoRepository.
  // Cette classe est responsable de la communication avec l'API pour gérer les Todos.
export class ApiTodoRepository implements ITodoRepository
{
    // Implémentation de la méthode getAll() de l'interface ITodoRepository.
    // Cette méthode permet de récupérer tous les Todos depuis l'API.
  async getAll(): Promise<Todo[]>
  {
    // Effectue une requête GET à l'API à l'endpoint '/todos' pour récupérer tous les Todos.
    // La méthode get() de l'objet api retourne une promesse qui se résout avec la réponse de l'API.
    const response = await api.get<Todo[]>('/todos');

    // Retourne les données de la réponse de l'API.
    // La propriété data de la réponse contient les données renvoyées par l'API.
    return response.data;
  }

    // Implémentation de la méthode getById() de l'interface ITodoRepository.
    // Cette méthode permet de récupérer un Todo spécifique à partir de son ID.
  async getById(id: string): Promise<Todo | null>
  {
    // Effectue une requête GET à l'API à l'endpoint `/todos/${id}` pour récupérer le Todo correspondant à l'ID.
    const response = await api.get<Todo>(`/todos/${id}`);

    // Retourne les données de la réponse de l'API.
    // Si aucun Todo n'est trouvé, la réponse de l'API peut être vide, auquel cas null est retourné.
    return response.data;
  }

    // Implémentation de la méthode create() de l'interface ITodoRepository.
    // Cette méthode permet de créer un nouveau Todo.
  async create(title: string): Promise<Todo>
  {
    // Effectue une requête POST à l'API à l'endpoint '/todos' pour créer un nouveau Todo.
    // Le corps de la requête contient le titre du nouveau Todo.
    const response = await api.post<Todo>('/todos', { title });

    // Retourne les données de la réponse de l'API, qui devraient contenir le nouveau Todo créé.
    return response.data;
  }

    // Implémentation de la méthode update() de l'interface ITodoRepository.
    // Cette méthode permet de mettre à jour un Todo existant.
  async update(id: string, data: Partial<Todo>): Promise<Todo>
  {
    // Effectue une requête PUT à l'API à l'endpoint `/todos/${id}` pour mettre à jour le Todo correspondant à l'ID.
    // Le corps de la requête contient les données à mettre à jour.
    const response = await api.put<Todo>(`/todos/${id}`, data);

    // Retourne les données de la réponse de l'API, qui devraient contenir le Todo mis à jour.
    return response.data;
  }

  // Implémentation de la méthode delete() de l'interface ITodoRepository.
  // Cette méthode permet de supprimer un Todo.
  async delete(id: string): Promise<void> 
  {
    // Effectue une requête DELETE à l'API à l'endpoint `/todos/${id}` pour supprimer le Todo correspondant à l'ID.
    await api.delete(`/todos/${id}`);
  }

}