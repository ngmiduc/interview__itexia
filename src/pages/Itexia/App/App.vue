<template>
  <div class="app">
    <Suspense>
      <template #default>
        <router-view />
      </template>
      <template #fallback>
        <div class="component-loader">
          <img src="@/assets/loader.svg" alt="..." />
          <span> ... loading ⏱️</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
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

.app {
  height: 100%;
  width: 100%;

  padding: 16px;
  box-sizing: border-box;
}
</style>
