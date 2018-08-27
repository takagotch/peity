var updatingChart = $(".updating-chart").peity("line", { width: 64})

setInterval(function() {
  var random = Math.round(Math.random() * 10)
  var values = updtingChart.text().split(",")
  values.shift()
  values.push(random)

  updatingChart
    .text(values.join(","))
    .change()
}, 1000)


