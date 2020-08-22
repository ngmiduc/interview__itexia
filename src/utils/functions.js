// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// FUNCTIONS
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

export const wait = async delayTime => {
  const delay = ms => new Promise(res => setTimeout(res, ms))
  await delay(delayTime)
}

export const isNumber = value =>
  !isNaN(value) && value !== undefined && typeof value === "number"

export const renderAnalyticValue = (
  value,
  {
    nullRepresenter = "–",
    suffix = "",
    prefix = "",
    includeIfNull = false,
    precision = 2
  } = {
    nullRepresenter: "–",
    suffix: "",
    prefix: "",
    includeIfNull: false,
    precision: 2
  }
) =>
  value !== null && value !== undefined
    ? prefix +
      (isNumber(value)
        ? Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision)
        : value) +
      suffix
    : includeIfNull
    ? prefix + nullRepresenter + suffix
    : nullRepresenter
