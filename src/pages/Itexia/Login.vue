<template>
  <div class="login">
    <Button
      label="🛂 authentificate "
      @click="authentificate()"
      :loading="isLoading"
    />
    <vue-google-calendar :data="[]" />
  </div>
</template>

<script>
// components
import { Button } from "@/components"

// composition
import composeLoading from "@/compositions/composeLoading"
import composeRouter from "@/compositions/composeRouter"

// store
import composeAuth from "@/store/auth"

const VueGoogleCalendar = require("vue-google-calendar")

export default {
  name: "login",
  components: { Button, VueGoogleCalendar },
  setup() {
    const { login, isAuthentificated } = composeAuth()
    const { setLoading, isLoading } = composeLoading()
    const { route, router } = composeRouter()

    const authentificate = async () => {
      try {
        setLoading(true)
        await login()
        setLoading(false)
      } catch (e) {
        console.error(e)
      }

      router.push(route.value.query?.redirec ?? "/app")
    }

    return {
      isAuthentificated,
      authentificate,
      isLoading
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
