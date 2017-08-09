var width = 300,
    height = 100,
    padding = 5,
    dataset = [5, 10, 23, 33, 40],
    svgBar = d3.select("section.bar-chart").append("svg")
                .attr("width", width).attr("height", height).attr("id", "bar-chart"),
    svgLine = d3.select("section.line-chart").append("svg")
                .attr("width", width).attr("height", height).attr("id", "line-chart"),
    svgScatter = d3.select("section.scatter-chart").append("svg")
                .attr("width", width).attr("height", height).attr("id", "scatter-chart");


svgBar.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
        .attr("x", (data, index) => {
            return index * (width / dataset.length);
        })
        .attr("y", (data) => {
            return height - data * height / d3.max(dataset);
        })
        .attr("width", width / dataset.length - padding)
        .attr("height", (data) => {return data * height / d3.max(dataset)})
        .attr("fill", (data) => {
            return d3.scaleLinear()
                    .domain([d3.min(dataset), d3.max(dataset)])
                    .range(["blue", "red"])(data);
        });


//svgLine.append("path")
//.data(dataset)
//.attr("fill", "none")
//.attr("stroke", "pink")
//.attr("stroke-width", 2)
//.attr("d", 
//    d3.svg.line()
//    .x((d, i) => {return i * (width / dataset.length)})
//    .y((d, i) => {return d * height / d3.max(dataset)})
//    .interpolate("linear")
//)

svgScatter.selectAll("circle")
.data(dataset)
.enter()
.append("circle")
.attr("r", 5)
.attr("cx", (data, i) => {return i * (width / dataset.length)})
.attr("cy", (data) => {return data * height / d3.max(dataset)} )