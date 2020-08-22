import { reactive, computed } from "vue"

// http
// import * as fn from "@/utils/functions"

// http
// import http from "@/utils/http"

const INITIAL_LOCATION = {
  addressLine1: null,
  addressLine2: null,
  addressLine3: null,
  city: null,
  country: null,
  postalCode: null
}
const INITIAL_META = {
  source: null,
  distribution: null
}

const INITIAL_STATE = {
  meta: INITIAL_META,
  location: INITIAL_LOCATION,
  data: []
}

const state = reactive(INITIAL_STATE)

const composeWeather = () => {
  const setMeta = ({ source, distribution }) => {
    state.meta = { ...state.meta, source, distribution }
  }

  const setLocation = location => {
    state.location = location
  }

  const setData = data => {
    state.data = data
  }

  return {
    weather: state,
    weatherMeta: computed(() => state.meta),
    weatherLocation: computed(() => state.location),
    setMeta,
    setLocation,
    setData
  }
}

export default composeWeather
