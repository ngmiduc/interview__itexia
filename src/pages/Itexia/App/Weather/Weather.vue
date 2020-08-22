<template>
  <div v-if="isLoading" class="component-loader">
    <span> ... loading</span>
  </div>

  <div v-else class="weather">
    <h2>🌞 Weather information of 🏙️ Magdeburg</h2>

    <Table />
    <Graphic :data="weatherData" />
  </div>
</template>

<script>
import { watchEffect, watch } from "vue"

// composition
import composeLoading from "@/compositions/composeLoading"
import composeHttp from "@/compositions/composeHttp"

// components
import Graphic from "./components/Graphic"
import Table from "./components/Table"

// store
import composeWeather from "@/store/weather"

// utils
import * as fn from "@/utils/functions"

export default {
  name: "weather",
  components: { Graphic, Table },

  setup() {
    const http = composeHttp()
    const { setLoading, isLoading } = composeLoading(true)
    const { weather, setData } = composeWeather()

    watchEffect(async () => {
      await fn.wait(200)

      const { data } = await http.get("data/data.json")

      setData(data)
      setLoading(false)
    })

    return {
      isLoading,
      weatherData: weather.data
    }
  }
}
</script>

<style lang="scss" scoped>
.component-loader {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.weather {
  height: 100%;
  width: 100%;
}
</style>
