//Configuração para chamar a API em toda a aplicação
import axios from "axios";

export default axios.create({
  baseURL: 'https://backend-pet-api-production.up.railway.app'
})