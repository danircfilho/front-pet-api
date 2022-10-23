//Configuração para chamar a API em toda a aplicação
import axios from "axios";

export default axios.create({
  baseURL: 'https://node-api-01.onrender.com'
})