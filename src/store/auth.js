import { reactive, computed } from "vue"

// http
import * as fn from "@/utils/functions"

const INITIAL_STATE = {
  auth: {
    authentificated: false,
    jwtToken: null
  },
  user: {
    authKey: null,
    email: null,
    givenName: null,
    familyName: null,
    picture: null
  }
}

const state = reactive(INITIAL_STATE)

const composeAuth = () => {
  const setAuth = ({ auth, jwtToken }) => {
    state.auth.authentificated = auth
    state.auth.jwtToken = jwtToken
  }
  const setUser = user => {
    state.user = { ...state.user, ...user }
  }
  const reset = () => {
    state.user = INITIAL_STATE.user
    state.auth = INITIAL_STATE.auth
  }

  const login = async () => {
    await fn.wait(1500)

    setAuth({
      auth: true,
      jwtToken: "auth0_389fhojdjskbf94whfjkdfbgiuh53geg53grf"
    })

    setUser({
      authKey: "auth0|389fhojdjskbf94whfjkdfbgiuh53geg53grf",
      email: "undefined",
      givenName: "Minh",
      familyName: "Nguyen",
      picture: null
    })
  }

  const logout = async () => {
    await fn.wait(1000)

    reset()
  }

  return {
    auth: state,
    login,
    logout,
    getAuthTokenSilently: computed(() => state.jwtToken),
    isAuthentificated: computed(() => state.auth.authentificated)
  }
}

export default composeAuth
