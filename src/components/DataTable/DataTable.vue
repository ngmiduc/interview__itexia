<template>
  <div class="component-data-table">
    <div
      class="component-data-table-header"
      :style="{
        gridTemplateColumns: columnSizes
      }"
    >
      <span
        class="component-data-table-header-item"
        v-for="head in header"
        :key="head.name"
        @click="sortBy(head.name)"
      >
        {{ head.label ? head.label : head.name }}
      </span>
    </div>

    <div class="component-data-table-list">
      <div
        class="component-data-table-list-item"
        :style="{
          gridTemplateColumns: columnSizes
        }"
        v-for="record in paginatedData"
        :key="record['JJJJMMDD']"
      >
        <slot
          :id="record['JJJJMMDD']"
          :record="record"
          :columns="header"
          :columnSizes="columnSizes"
        ></slot>
      </div>
    </div>

    <hr />

    <pagination
      :page="state.currentPage"
      :pageSize="state.pageSize"
      :total="totalPages"
      @change="$event => setPage($event)"
      @change-pagesize="
        $event => {
          setPageSize($event)
          setPage(1)
        }
      "
    ></pagination>
  </div>
</template>

<script>
import { computed, reactive } from "vue"

// components
import Pagination from "./Pagination"
// import SearchBar from "./SearchBar"
// import FilterDropbox from "./FilterDropbox"

export default {
  name: "component-data-table",
  components: { Pagination },
  props: {
    data: Array,
    header: Array,
    loading: Boolean,
    showPagination: Boolean,
    filterBy: {
      type: Object,
      default: () => ({
        value: "",
        keys: [],
        comparisionFn: () => false
      })
    }
  },

  setup(props) {
    const state = reactive({
      currentPage: 1,
      pageSize: 20,
      total: 0,
      sortBy: null,
      sortDirection: "ASC"
    })

    const setPage = value => {
      state.currentPage = value
    }
    const setPageSize = value => {
      state.pageSize = value
    }

    const filteredData = computed(() =>
      props.data.filter(record => {
        const {
          key = [],
          comparisionFn = () => true,
          value = ""
        } = props.filterBy

        if (key.length === 0) return true

        return key.some(comparisionKey =>
          comparisionFn(record[comparisionKey], value)
        )
      })
    )

    const sortedData = computed(() =>
      state.sortBy !== null
        ? [...filteredData.value].sort((a, b) => {
            return state.sortDirection === "ASC"
              ? a[state.sortBy] - b[state.sortBy]
              : b[state.sortBy] - a[state.sortBy]
          })
        : [...filteredData.value]
    )

    return {
      state,
      sortBy: name => {
        if (state.sortBy === name) {
          if (state.sortDirection === "ASC") {
            state.sortDirection = "DESC"
          } else if (state.sortDirection === "DESC") {
            state.sortBy = null
          } else state.sortBy = "ASC"
        } else {
          state.sortBy = name
          state.sortDirection = "ASC"
        }
      },
      columnSizes: computed(() =>
        props.header.map(item => item.size).join(" ")
      ),
      setPageSize,
      setPage,
      totalPages: computed(() => filteredData.value.length),
      paginatedData: computed(() => {
        const startRecord = (state.currentPage - 1) * state.pageSize
        return [...sortedData.value].splice(startRecord, state.pageSize)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.component-data-table {
  width: 100%;

  // border: 1px solid rgb(236, 236, 236);
  background: rgba(238, 238, 238, 0.54);
  box-shadow: 0 5px 15px rgba(153, 151, 151, 0.35);
  border-radius: 6px;
  overflow: hidden;
  overflow-x: scroll;

  transform: scale(0.9975);

  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    transform: scale(1);
    box-shadow: 0 5px 15px rgba(153, 151, 151, 0.95);
  }

  hr {
    margin: 0;
    opacity: 0.5;
    background: rgb(242, 242, 242);
    border-color: rgb(242, 242, 242);
  }

  .component-data-table-header {
    display: grid;
    width: 100%;

    .component-data-table-header-item {
      background: rgb(72, 70, 77);
      color: white;
      padding: 4px 8px;

      font-weight: 600;

      transition: background 0.3s;

      &:hover {
        background: rgba(31, 31, 31, 1);
        cursor: pointer;
      }
    }
  }

  .component-data-table-list {
    display: flex;
    flex-direction: column;
    padding: 4px 0px;

    .component-data-table-list-item {
      padding: 5px 0;

      transition: background 0.3s;

      &:hover {
        background: rgba(115, 118, 152, 0.15);
        cursor: pointer;
      }
    }
  }
}
</style>
