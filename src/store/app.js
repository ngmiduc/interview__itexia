import { reactive, computed } from "vue"

const INITIAL_STATE = {
  name: "itexia",
  theme: "default",
  version: 0.1,
  loading: false
}

const state = reactive(INITIAL_STATE)

const composeApp = () => {
  const setLoading = value => {
    state.loading = value
  }

  return {
    isLoading: computed(() => state.loading),
    setLoading
  }
}

export default composeApp
