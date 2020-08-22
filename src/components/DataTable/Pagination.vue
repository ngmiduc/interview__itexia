<template>
  <div class="component-pagination">
    <div class="pageSize">
      <select
        class="pageSize"
        name="pageSize"
        :value="pageSize"
        @change="e => $emit('change-pagesize', e.target.value)"
      >
        <option value="5">pageSize 5</option>
        <option value="10">pageSize 10</option>
        <option value="20">pageSize 20</option>
        <option value="25">pageSize 25</option>
        <option value="50">pageSize 50</option>
        <option value="100">pageSize 100</option>
        <option value="1000">show all</option>
      </select>
    </div>

    <button
      @click="n == page ? null : $emit('change', n)"
      type="button"
      name="button"
      :class="{ active: n == page }"
      :key="n"
      v-for="n in Math.ceil(total / pageSize)"
    >
      {{ n }}
    </button>
  </div>
</template>

<script>
export default {
  name: "component-pagination",
  props: {
    page: Number,
    pageSize: Number,
    total: Number
  }
}
</script>

<style lang="scss" scoped>
.component-pagination {
  display: flex;
  align-items: center;

  .pageSize {
    cursor: pointer;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 7px;
    color: rgb(51, 51, 51);
    border-radius: 4px;
    margin-right: 3px;

    select {
      text-align-last: center;
      margin: 0;
      border: none;
      background: none;
      font-size: 10px;
    }
  }

  button {
    height: 25px;
    width: 25px;
    padding: 0;
    margin: 5px 3px;
    opacity: 1;
    background: none;
    border: none;
    color: rgb(55, 55, 55);
    outline: none;
    cursor: pointer;
    border-radius: 100%;
    font-size: 10px;

    transition: background 0.3s;

    &:hover {
      background: royalblue;
      opacity: 0.5;
      color: white;
    }

    &.active {
      background: royalblue;
      opacity: 1;
      color: white;
    }
  }
}
</style>
