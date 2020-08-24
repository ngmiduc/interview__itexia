<template>
  <div class="weather">
    <h2>🌞 Weather information of 🏙️ Magdeburg</h2>
    <Table />
    <Graphic />
  </div>
</template>

<script>
import { watchEffect, watch, computed } from "vue"

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

  async setup() {
    const http = composeHttp()
    const { setLoading, isLoading } = composeLoading(true)
    const { setData } = composeWeather()

    const initState = async () => {
      await fn.wait(1200)

      const { data } = await http.get("data/data.json")

      setData(data)
      setLoading(false)
    }

    await initState()

    return {
      isLoading
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

  img {
    height: 100px;
    width: 100px;
    margin-right: -25px;
  }
}

.weather {
  height: 100%;
  width: 100%;
}
</style>
