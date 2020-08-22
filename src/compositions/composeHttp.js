// axios
import axios from "axios"

// store
import composeAuth from "@/store/auth"

const composeHttp = () => {
  const { getAuthTokenSilently } = composeAuth()

  const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/"
  })

  axiosInstance.interceptors.request.use(
    config => {
      const attachTokenToRquest = () => {
        const token = getAuthTokenSilently

        if (token !== null) {
          config.headers.Authorization = `Token ${token}`
        }
      }

      attachTokenToRquest()

      return config
    },
    error => {
      return Promise.reject(error)
    }
  )

  axiosInstance.interceptors.response.use(
    response => {
      return response
    },
    error => {
      return Promise.reject(error)
    }
  )

  return axiosInstance
}

export default composeHttp
