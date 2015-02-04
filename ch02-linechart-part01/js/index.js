//svg
var svg = d3.select("#container")
.append("svg")
//width, height
.attr("width", 500) //attribute
.attr("height", 250)

d3.select("svg")
.append("g")
.attr("transform", "translate(50, 30)")