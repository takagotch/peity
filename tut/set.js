$("bar-colurs-1").peity("bar", {
  fill: ["red", "green", "blue"]
})

$("bar-colurs-2").peity("bar", {
  fill: function(value) {
    return value > 0 ? "green" : "red"
  }
})


$("bar-colurs-3").peity("bar", {
  fill: function(_, i, all) {
    var g = parseInt((i / all.length) * 255)
    return "rgb(255, " + g + ", 0)"
  }
})


$("bar-colurs-1").peity("pie", {
  fill: ["cyan", "magenta", "yellow", "black"]
})


$("bar-colurs-2").peity("pie", {
  fill: function(_, i, all) {
    var g = parseInt((i / all.length) * 255)
    return "rgb(255, " + g + ", 0)"
  }
})


