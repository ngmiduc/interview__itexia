import { reactive, toRefs, watch } from "vue"

import router from "@/router"

const composeRouter = () => {
  const state = reactive({
    route: router.currentRoute.value
  })

  watch(
    () => router.currentRoute.value,
    route => {
      state.route = route
    }
  )

  return { ...toRefs(state), router: router }
}

export default composeRouter
