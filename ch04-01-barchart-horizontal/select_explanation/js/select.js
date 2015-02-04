var data = [1,2,3,4];

var svg = d3.select("#container")
.append("svg")
.attr("width", 1000)
.attr("height", 500);

svg.selectAll("circle")
.data(data)
.enter().append("circle")
.attr("cx", function(d,i) { return d*100; })
.attr("cy", 100)
.attr("r", 20);

