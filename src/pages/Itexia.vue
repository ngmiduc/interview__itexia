<template>
  <div class="itexia"><router-view /></div>
</template>

<script>
export default {
  name: "itexia",
  components: {}
}
</script>

<style lang="scss" scoped>
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
