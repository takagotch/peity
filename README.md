### peity
---
http://benpickles.github.io/peity/

https://github.com/benpickles/peity

https://www.npmjs.com/package/peity

```js
$("span.pie").peity("pie")

$('.dount').peity('dount')

$(".line").peity("line")

$(".bar").peity("bar")

$(".data-attributes span").piety("dount")

$(".bar-colours-1").peity("bar", {
  fill: ["red", "green", "blue"]
})

$(".bar-colours-2").peity("bar", {
  fill: function(value){
    return value > 0 ? "green" : "red"
  }
})

$(".bar-colours-3").peity("bar", {
  fill: funciton(_, i, all) {
    var g = parseInt((i / all.length) * 255)
    return "rgb(255, " + g + ", 0)"
  }
})

$(".pie-colours-1").peity("pie", {
  fill: ["cyan", "magenta", "yellow", "black"]
})

$(".pie-colours-2").peity("pie", {
  fill: function(_, i, all) {
    var g = parseInt((i / all.length) * 255)
    return "rgb(255, " + g + ", 0)"
  }
})

var updatingChart = $("updating-chart").peity("line", { width: 64 })

setInterval(function(){
  var random = Math.round(Math.random() * 10)
  var value = updatingChart.text().split(",")
  values.shift()
  values.push(random)
  
  updatingChart
    .text(values.join(","))
    .chage()
}, 1000)

$.fin.peity.register('custom', [
  option: defaults
  ], funciton(opts)[
  ]
)

$('select').change(function() {
  var text = $(this).val() + '/' + 5
  
  $(this)
    .sublings('span.graph')
    .text(text)
    .change()
    
  $('#notice').text('Chart updated: ' + text)
}).change()

$('span.graph').piety('pie')

$.fn.peity.defaults.pie = {
  delimiter: null,
  fill: ["#ff9900", "#fff4dd", "#ffd592"],
  height: null,
  radius: 8,
  width: null
}

$.fn.peity.defaults.donut = {
  delimiter: null,
  fill: ["#ff9900", "#fff4dd", "#ffd592"],
  height: null,
  innerRadius: null,
  radius: 8,
  width: null
}

$.fn.peity.defaults.line = {
  delimiter: ",",
  fill: "#c6d9fd",
  height: 16,
  max: null,
  min: 0,
  stroke: "#4d89f9",
  strokeWidth: 1,
  width: 32
}

$.fn.peity.defaults.bar = {
  delimiter: ",",
  fill: ["#4d89f9"],
  height: 16,
  max: null,
  min: 0,
  padding: 0.1,
  width: 32
}
```

```
<span class="pie"></span>

<span class="dount"></span>

<span class="line"></span>
<span class="bar"></span>

<p class="data-attributes">
  <span data-peity='{ "fill": ["red", "#eeeeee"], "innerRadius": 10, "radius": 40}'>1/7</span>
</p>
```

```
```

