<template>
  <div v-if="error" class="error-boundary">
    <span>{{ error }}</span>
  </div>
  <div class="itexia"><router-view /></div>
</template>

<script>
import { ref, onErrorCaptured } from "vue"

export default {
  name: "itexia",
  setup() {
    const error = ref(null)

    onErrorCaptured(e => (error.value = e))

    return { error }
  }
}
</script>

<style lang="scss" scoped>
.error-boundary {
  background-color: rgb(112, 0, 0);
  color: white;
  padding: 16px;
}
.itexia {
  height: 100vh;
  width: 100vw;

  overflow: scroll;

  background: rgb(242, 241, 255);
  background: linear-gradient(
    41deg,
    rgba(242, 241, 255, 1) 0%,
    rgba(233, 233, 255, 1) 30%,
    rgba(242, 255, 250, 1) 100%
  );
}
</style>
