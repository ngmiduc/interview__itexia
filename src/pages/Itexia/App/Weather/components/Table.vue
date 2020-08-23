<template>
  <div class="table-weather">
    <input v-model="searchValue" placeholder="search me 🔎" />
    <data-table :data="weatherData" :header="header" :filterBy="filter">
      <template v-slot="{ columnSizes, columns, record }">
        <div
          class="scoped-list-item"
          :style="{
            gridTemplateColumns: columnSizes
          }"
        >
          <span
            class="scoped-list-item-value"
            :key="head.name"
            v-for="head in columns"
            v-html="
              head.render
                ? head.render(
                    record[head.name] !== undefined ? record[head.name] : record
                  )
                : record[head.name]
            "
          >
          </span>
        </div>
      </template>
    </data-table>
  </div>
</template>

<script>
import { ref, computed } from "vue"

// components
import { DataTable } from "@/components"

// utils
import * as fn from "@/utils/functions"

// store
import composeWeather from "@/store/weather"

export default {
  name: "component-table",
  components: { DataTable },
  setup() {
    const searchValue = ref("")
    const { weather } = composeWeather()

    return {
      weatherData: computed(() => weather?.data ?? []),
      searchValue,
      filter: {
        value: searchValue,
        key: ["JJJJMMDD", "TX", "TN", "TM"],
        comparisionFn: (matchValue, value) => {
          return matchValue.toString().includes(value.value)
        }
      },
      header: [
        {
          name: "STAT",
          label: null,
          size: "100px",
          render: v =>
            `<span style="font-weight: 600;">📎 ${fn.renderAnalyticValue(
              v
            )}</span>`
        },
        {
          name: "JJJJMMDD",
          label: null,
          size: "80px",
          render: v => fn.renderAnalyticValue(v)
        },
        {
          name: "QN",
          label: null,
          size: "40px",
          render: v => fn.renderAnalyticValue(v)
        },
        {
          name: "TG",
          label: null,
          size: "60px",
          render: v =>
            `<span style="color: ${
              v >= 0 ? "blue" : "red"
            };font-weight: 400;">${fn.renderAnalyticValue(v)}</span>`
        },
        {
          name: "Minh",
          label: null,
          size: "60px",
          render: record => (record["TG"] > 0 ? "⛱️" : "☔")
        },
        {
          name: "TN",
          label: null,
          size: "60px",
          render: v => fn.renderAnalyticValue(v)
        },
        {
          name: "TM",
          label: null,
          size: "60px",
          render: v => fn.renderAnalyticValue(v)
        },
        {
          name: "TX",
          label: null,
          size: "60px",
          render: v => fn.renderAnalyticValue(v)
        },
        {
          name: "RFM",
          label: null,
          size: "60px",
          render: v => fn.renderAnalyticValue(v)
        },
        {
          name: "FM",
          label: null,
          size: "60px",
          render: v => fn.renderAnalyticValue(v)
        },
        {
          name: "FX",
          label: null,
          size: "60px",
          render: v => fn.renderAnalyticValue(v)
        },
        {
          name: "SO",
          label: null,
          size: "60px",
          render: v => fn.renderAnalyticValue(v)
        },
        {
          name: "NM",
          label: null,
          size: "60px",
          render: v => fn.renderAnalyticValue(v)
        },
        {
          name: "RR",
          label: null,
          size: "60px",
          render: v => fn.renderAnalyticValue(v)
        },
        {
          name: "PM",
          label: null,
          size: "auto",
          render: v => fn.renderAnalyticValue(v)
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.table-weather {
  input {
    margin: 16px 0;
    box-sizing: border-box;
    width: 100%;
    padding: 8px 8px;

    background-color: rgba(45, 45, 45, 0.95);
    box-shadow: 0 5px 15px rgba(153, 151, 151, 0.35);
    border: none;
    border-radius: 6px;
    outline: none;
    color: white;

    transform: scale(0.9975);

    transition: box-shadow 0.3s, transform 0.3s;

    &:hover {
      transform: scale(1);
      box-shadow: 0 5px 15px rgba(153, 151, 151, 0.95);
    }
  }
}

.scoped-list-item {
  display: grid;

  .scoped-list-item-value {
    padding: 0 4px;
  }
}
</style>
