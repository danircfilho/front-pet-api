//Configuração para chamar a API em toda a aplicação
import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_API
})