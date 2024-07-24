// Importation de la bibliothèque Axios pour effectuer des requêtes HTTP.
import axios from 'axios';

// Création d'une instance Axios avec une configuration par défaut.
const api = axios.create(
{
  // URL de base de l'API, récupérée depuis les variables d'environnement ou définie par défaut à 'http://localhost:3002/api'.
  baseURL: process.env.NEXT_PUBLIC_API_URL,

  // En-têtes par défaut pour toutes les requêtes effectuées avec cette instance.
  headers:
  {
    // Type de contenu des requêtes défini à 'application/json'.
    'Content-Type': 'application/json',
  },
});

// Exportation de l'instance Axios configurée pour être utilisée dans d'autres parties de l'application.
export default api;