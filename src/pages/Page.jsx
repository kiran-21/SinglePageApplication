import React, { useEffect } from "react";
import * as d3 from "d3";

const Graph = () => {
  useEffect(() => {
    
    d3.csv("/netflix_titles.csv").then((data) => {
     
      const counts = d3.rollup(
        data,
        (v) => v.length,
        (d) => d.type 
      );

      const processedData = Array.from(counts, ([key, value]) => ({
        type: key,
        count: value,
      }));

     
      const width = 500;
      const height = 300;
      const margin = { top: 20, right: 30, bottom: 40, left: 50 };

    
      const svg = d3
        .select("#chart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

   
      const x = d3
        .scaleBand()
        .domain(processedData.map((d) => d.type))
        .range([0, width])
        .padding(0.2);

      const y = d3
        .scaleLinear()
        .domain([0, d3.max(processedData, (d) => d.count)])
        .nice()
        .range([height, 0]);

    
      svg
        .append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(0,10)")
        .style("text-anchor", "middle");

      
      svg.append("g").call(d3.axisLeft(y));

      
      svg
        .selectAll("rect")
        .data(processedData)
        .enter()
        .append("rect")
        .attr("x", (d) => x(d.type))
        .attr("y", (d) => y(d.count))
        .attr("width", x.bandwidth())
        .attr("height", (d) => height - y(d.count))
        .attr("fill", "#4CAF50");

    
      svg
        .selectAll("text.label")
        .data(processedData)
        .enter()
        .append("text")
        .attr("class", "label")
        .attr("x", (d) => x(d.type) + x.bandwidth() / 2)
        .attr("y", (d) => y(d.count) - 5)
        .attr("text-anchor", "middle")
        .text((d) => d.count);
    });
  }, []);

  return <div id="chart"></div>;
};

export default Graph;
