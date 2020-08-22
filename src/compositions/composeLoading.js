import { reactive, computed } from "vue"

const LOADING_LABELS = {
  ready: "ready !",
  loading: "... loading",
  success: "yeah !",
  cancelled: "x"
}

const INITIAL_STATE = {
  loading: false,
  status: LOADING_LABELS.ready,
  text: ""
}

const INITIAL_LOCAL_STATE = {
  loading: false,
  status: LOADING_LABELS.ready,
  text: ""
}

const state = reactive(INITIAL_STATE)

const composeLoading = (init = false) => {
  const localState = reactive({ ...INITIAL_LOCAL_STATE, loading: init })

  const setAppLoading = value => {
    state.loading = value
  }

  const setLoading = value => {
    localState.loading = value
  }

  return {
    isLoading: computed(() => localState.loading),
    isAppLoading: computed(() => state.loading),
    label: computed(() => localState.loading),
    appLabel: computed(() => state.loading),
    setLoading,
    setAppLoading
  }
}

export default composeLoading
