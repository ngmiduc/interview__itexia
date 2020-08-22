<template>
  <div id="container"></div>
</template>

<script>
// charts
import Highcharts from "highcharts"
import Exporting from "highcharts/modules/exporting"
Exporting(Highcharts)

// data
import JSONDATA from "./data.json"

// lodash
import { groupBy } from "lodash"

export default {
  name: "MyComponent",

  props: { data: Object },
  mounted() {
    var colors = Highcharts.getOptions().colors

    const d = JSON.parse(JSON.stringify(JSONDATA))

    Highcharts.chart("container", {
      chart: {
        type: "spline"
      },

      legend: {
        symbolWidth: 40
      },

      title: {
        text: "..."
      },

      yAxis: {},

      xAxis: {
        title: {
          text: "Time"
        },
        accessibility: {
          description: "Time from December 2010 to September 2019"
        },
        categories: d.map(i => i["JJJJMMDD"])
      },

      tooltip: {
        valueSuffix: "%"
      },

      plotOptions: {
        series: {
          point: {
            events: {
              click: function() {
                window.location.href = this.series.options.website
              }
            }
          },
          cursor: "pointer"
        }
      },

      series: Object.entries(
        d.reduce(
          (current, acc) => {
            const keys = Object.keys(current)

            let result = {}

            keys.forEach(key => {
              result[key] = [...current[key], acc[key]]
            })

            return result
          },
          {
            // STAT: [],
            // JJJJMMDD: [],
            QN: [],
            TG: [],
            TN: [],
            TM: [],
            TX: [],
            // RFM: [],
            FM: [],
            FX: [],
            SO: [],
            NM: [],
            RR: []
            // PM: []
          }
        )
      ).map(([key, values]) => ({
        name: key,
        data: values,
        website: "https://www.freedomscientific.com/Products/Blindness/JAWS",
        dashStyle: "ShortDashDot",
        color: colors[0]
      })),

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 550
            },
            chartOptions: {
              legend: {
                itemWidth: 150
              },
              xAxis: {
                categories: [
                  "Dec. 2010",
                  "May 2012",
                  "Jan. 2014",
                  "July 2015",
                  "Oct. 2017",
                  "Sep. 2019"
                ]
              },
              yAxis: {
                title: {
                  enabled: false
                },
                labels: {
                  format: "{value}%"
                }
              }
            }
          }
        ]
      }
    })

    return {}
  }
}
</script>

<style lang="scss">
#container {
  margin-top: 16px;
  margin-bottom: 166px;
  background: rgba(238, 238, 238, 0.54);
  box-shadow: 0 5px 15px rgba(153, 151, 151, 0.35);
  border-radius: 6px;

  transform: scale(0.9975);

  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    transform: scale(1);
    box-shadow: 0 5px 15px rgba(153, 151, 151, 0.95);
  }

  svg {
    .highcharts-credits {
      display: none;
    }
  }
}
</style>
