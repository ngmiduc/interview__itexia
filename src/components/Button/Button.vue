<template>
  <button>
    <img src="@/assets/loading.svg" alt="..." v-if="loading" />
    <span>{{ label }}</span>
  </button>
</template>

<script>
// vue
// import { reactive, computed } from "vue"

export default {
  name: "component-button",
  props: {
    label: String,
    loading: Boolean
  }
}
</script>

<style lang="scss" scoped>
button {
  padding: 8px 10px;
  border: 1px solid rgb(74, 95, 117);
  outline: none;
  background-color: rgb(90, 114, 139);
  box-shadow: 0 5px 10px rgb(233, 233, 233);
  color: white;
  border-radius: 4px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: max-width 0.3s, transform 0.3s, background-color 0.3s,
    box-shadow 0.3s;

  img {
    width: 40px;
    height: 40px;
    margin: -20px 0;
    margin-left: -10px;
  }

  &:hover {
    transform: translateY(-1px);
    background-color: rgb(66, 84, 102);
    box-shadow: 0 5px 10px rgb(201, 201, 201);
  }
}
</style>
