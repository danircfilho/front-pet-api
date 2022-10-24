//Configuração para chamar a API em toda a aplicação
import axios from "axios";

const API = process.env.REACT_APP_API

export default axios.create({
  baseURL: API
})