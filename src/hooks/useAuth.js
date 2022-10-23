import api from '../utils/api' //Chamar e utilizar as configura~ções da API
import useFlashMessage from './useFlashMessage'

//Hook
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom' //manipular url - ex: enviar automaticamente para um local

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false)
  const navigate = useNavigate()
  const { setFlashMessage } = useFlashMessage()

  //Verificar e pegar o token
  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
      setAuthenticated(true)
    }

    /* setLoading(false) */
  }, [])

  async function register(user) {
    let msgText = 'Cadastro realizado com sucesso!'
    let msgType = 'success'

    try {
      const data = await api.post('/users/register', user).then((response) => {
        return response.data
      })

      await authUser(data)
  
    } catch (error) {
      msgText = error.response.data.message
      msgType = 'error'
    }

    setFlashMessage(msgText, msgType)
  }

  async function authUser(data) {
    setAuthenticated(true)
    localStorage.setItem('token', JSON.stringify(data.token))

    navigate('/')
  }

  async function login(user) {
    let msgText = 'Login realizado com sucesso!'
    let msgType = 'success'

    try {
      const data = await api.post('/users/login', user).then((response) => {
        return response.data
      })

      await authUser(data)
    } catch (error) {
      msgText = error.response.data.message
      msgType = 'error'
    }

    setFlashMessage(msgText, msgType)
  }

  function logout() {
    const msgText = 'Logout realizado com sucesso!'
    const msgType = 'success'

    setAuthenticated(false)
    localStorage.removeItem('token')
    api.defaults.headers.Authorization = undefined
    navigate('/')

    setFlashMessage(msgText, msgType)
  }

  //Retorno das funções
  return { authenticated, register, login, logout }

  /* return {authenticated, loading, register, login, logout} */
}