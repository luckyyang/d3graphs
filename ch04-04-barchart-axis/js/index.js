d3.csv("data.csv", type, function(data) { 

  var width = 400,
  height = 400;

  var svg = d3.select("#container")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

  var g = svg.append("g")
  .attr("transform", "translate(200, 200)");



});

function type(d) {
  d.population = +d.population;
  return d;
}