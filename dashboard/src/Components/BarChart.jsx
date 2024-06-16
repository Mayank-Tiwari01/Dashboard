import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    const svg = d3.select(chartRef.current)
      .attr('width', 600)
      .attr('height', 400);

    // Clear previous content
    svg.selectAll('*').remove();

    const margin = { top: 20, right: 30, bottom: 40, left: 90 },
      width = +svg.attr('width') - margin.left - margin.right,
      height = +svg.attr('height') - margin.top - margin.bottom;

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleLinear()
      .range([0, width])
      .domain([0, d3.max(data, d => d.acv)]);

    const y = d3.scaleBand()
      .range([height, 0])
      .padding(0.1)
      .domain(data.map(d => d.Acct_Industry));

    g.append('g')
      .selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', 0)
      .attr('height', y.bandwidth())
      .attr('y', d => y(d.Acct_Industry))
      .attr('width', d => x(d.acv));

    g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(y));

    g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));
  }, [data]);

  return <svg ref={chartRef}></svg>;
};

export default BarChart;
