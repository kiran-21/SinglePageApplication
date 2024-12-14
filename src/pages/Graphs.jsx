import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as d3 from "d3";

const Graphs = ({ tasks }) => {
	useEffect(() => {
		// Clear previous SVGs to avoid duplicate rendering
		d3.select("#priority-pie-chart").selectAll("*").remove();
		d3.select("#stacked-bar-chart").selectAll("*").remove();

		if (tasks.length === 0) return; // Exit if there are no tasks

		// Prepare data for the pie chart
		const priorityCounts = tasks.reduce(
			(acc, task) => {
				acc[task.priority] = (acc[task.priority] || 0) + 1;
				return acc;
			},
			{ High: 0, Medium: 0, Low: 0 }
		);

		const pieData = Object.entries(priorityCounts).map(([key, value]) => ({
			priority: key,
			count: value,
		}));

		// Pie Chart Dimensions and SVG setup
		const pieWidth = 400;
		const pieHeight = 400;
		const pieRadius = Math.min(pieWidth, pieHeight) / 2;

		const pieSvg = d3
			.select("#priority-pie-chart")
			.attr("width", pieWidth)
			.attr("height", pieHeight)
			.append("g")
			.attr("transform", `translate(${pieWidth / 2}, ${pieHeight / 2})`);

		const pieColor = d3.scaleOrdinal().domain(["High", "Medium", "Low"]).range(["#ff6347", "#ffa500", "#32cd32"]);

		const pie = d3.pie().value(d => d.count);
		const arc = d3.arc().innerRadius(0).outerRadius(pieRadius);

		// Draw the pie chart
		pieSvg
			.selectAll("path")
			.data(pie(pieData))
			.enter()
			.append("path")
			.attr("d", arc)
			.attr("fill", d => pieColor(d.data.priority))
			.attr("stroke", "#fff")
			.style("stroke-width", "2px");

		// Add pie chart labels
		pieSvg
			.selectAll("text")
			.data(pie(pieData))
			.enter()
			.append("text")
			.text(d => `${d.data.priority}: ${d.data.count}`)
			.attr("transform", d => `translate(${arc.centroid(d)})`)
			.style("text-anchor", "middle")
			.style("font-size", "12px");

		// Prepare data for stacked bar chart
		const groupedData = tasks.reduce(
			(acc, task) => {
				acc[task.priority].completed += task.completed ? 1 : 0;
				acc[task.priority].incomplete += task.completed ? 0 : 1;
				return acc;
			},
			{
				High: { completed: 0, incomplete: 0 },
				Medium: { completed: 0, incomplete: 0 },
				Low: { completed: 0, incomplete: 0 },
			}
		);

		const barData = Object.entries(groupedData).map(([priority, counts]) => ({
			priority,
			completed: counts.completed,
			incomplete: counts.incomplete,
		}));

		// Stacked Bar Chart Dimensions and SVG setup
		const barWidth = 500;
		const barHeight = 300;
		const margin = { top: 20, right: 30, bottom: 40, left: 60 };

		const barSvg = d3
			.select("#stacked-bar-chart")
			.attr("width", barWidth)
			.attr("height", barHeight)
			.append("g")
			.attr("transform", `translate(${margin.left}, ${margin.top})`);

		const xScale = d3
			.scaleLinear()
			.domain([0, d3.max(barData, d => d.completed + d.incomplete)])
			.range([0, barWidth - margin.left - margin.right]);

		const yScale = d3
			.scaleBand()
			.domain(barData.map(d => d.priority))
			.range([0, barHeight - margin.top - margin.bottom])
			.padding(0.2);

		const barColor = d3.scaleOrdinal().domain(["completed", "incomplete"]).range(["#4CAF50", "#FF5722"]);

		// Add bars
		barSvg
			.selectAll("g")
			.data(barData)
			.enter()
			.append("g")
			.attr("transform", d => `translate(0, ${yScale(d.priority)})`)
			.selectAll("rect")
			.data(d => [
				{ type: "completed", value: d.completed },
				{ type: "incomplete", value: d.incomplete },
			])
			.enter()
			.append("rect")
			.attr("x", (d, i, nodes) => (i === 0 ? 0 : xScale(d3.select(nodes[i - 1]).datum().value)))
			.attr("y", 0)
			.attr("width", d => xScale(d.value))
			.attr("height", yScale.bandwidth())
			.attr("fill", d => barColor(d.type));

		// Add x-axis
		barSvg
			.append("g")
			.attr("transform", `translate(0, ${barHeight - margin.top - margin.bottom})`)
			.call(d3.axisBottom(xScale).ticks(5))
			.attr("font-size", "12px");

		// Add y-axis
		barSvg.append("g").call(d3.axisLeft(yScale)).attr("font-size", "12px");

		// Add legend
		const legend = barSvg.append("g").attr("transform", `translate(${barWidth - margin.right - 150}, 10)`);

		["completed", "incomplete"].forEach((type, i) => {
			legend
				.append("rect")
				.attr("x", 0)
				.attr("y", i * 25) // Spacing between items
				.attr("width", 18)
				.attr("height", 18)
				.attr("fill", barColor(type));

			legend
				.append("text")
				.attr("x", 25) // Position next to the rectangle
				.attr("y", i * 25 + 14) // Align vertically with the rectangle
				.text(type.charAt(0).toUpperCase() + type.slice(1))
				.attr("font-size", "12px");
		});
	}, [tasks]);

	return (
		<Box
			sx={{
				minHeight: "80vh",
				padding: "20px",
				display: "flex",
				flexDirection: "column", // Stacked layout
				alignItems: "center",
				justifyContent: "flex-start",
				backgroundColor: "#f5f5f5",
			}}
		>
			<Typography variant="h5" sx={{ marginBottom: "20px" }}>
				Task Analysis
			</Typography>

			{tasks.length === 0 ? (
				<Box>
					<Typography variant="h6" sx={{ marginBottom: "10px", textAlign: "center" }}>
						No Tasks Available
					</Typography>
					<Typography variant="body1" sx={{ textAlign: "center" }}>
						Once tasks are added, graphs will appear here to show the priority distribution and task completion
						status.
					</Typography>
				</Box>
			) : (
				<Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%" }}>
					{/* Pie Chart */}
					<Box>
						<Typography variant="h6" sx={{ marginBottom: "10px", textAlign: "center" }}>
							Priority Distribution (Pie Chart)
						</Typography>
						<svg id="priority-pie-chart"></svg>
					</Box>

					{/* Stacked Bar Chart */}
					<Box>
						<Typography variant="h6" sx={{ marginBottom: "10px", textAlign: "center" }}>
							Priority vs. Completion (Stacked Bar Chart)
						</Typography>
						<svg id="stacked-bar-chart"></svg>
					</Box>
				</Box>
			)}
		</Box>
	);
};

export default Graphs;
