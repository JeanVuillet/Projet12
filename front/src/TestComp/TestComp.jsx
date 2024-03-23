import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './TestComp.scss';
import { USER_ACTIVITY } from './../data/data';

export function TestComp() {
    const canvasRef = useRef(null);

    useEffect(() => {
        d3.select(canvasRef.current).selectAll("*").remove();
        
        const width = 700;
        const height = 200;
        const margin = { top: 20, right: 30, bottom: 30, left: 40 };
        const leftGap = 40;
        const xOffset1=12;
        const xOffset2=-12;

        const data = USER_ACTIVITY[0].sessions;
        let kilograms = [];
        let calories = [];
        for (let i = 0; i < data.length; i++) {
            kilograms.push(data[i].kilogram);
            calories.push(data[i].calories);
        }
        let tester =[77, 78,76,77,78,79,78];
        console.log(calories);
        console.log(kilograms);

        const minYValue = Math.min(...kilograms);
        const maxYValue = Math.max(...kilograms);

        const minYCalories= Math.min(...calories);
        const maxYCalories=Math.max(...calories);
        const x = d3.scaleBand()
            .domain(d3.range(1, 9)) // Utilisation de range de 1 à 8 pour avoir huit bandes
            .range([0, width - margin.left - margin.right])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([minYValue - 1, maxYValue + 1])
            .range([height - margin.top - margin.bottom, 0]);

        const svg = d3.select(canvasRef.current)
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        svg.selectAll(".kilograms")
            .data(kilograms)
            .enter()
            .append("rect")
            .attr('class', 'kilograms')
            .attr("x", (d, i) => x(i+1) + x.bandwidth() / 2) // Positionner au centre de chaque bande
            .attr("y", d => y(d))
            .attr("width", 7)
            .attr("height", d => height - margin.top - margin.bottom - y(d))
            .attr("fill", "#282D30")
            .attr("transform", "translate(" + xOffset1 + ", 0)");

        svg.selectAll(".calories")
            .data(calories)
            .enter()
            .append("rect")
            .attr('class', 'calories')
            .attr("x", (d, i) => x(i+1) + x.bandwidth() / 2 ) // Positionner au centre de chaque bande
            .attr("y", d => y(d/100+minYValue))
            .attr("width", 7)
            .attr("height", d => height - margin.top - margin.bottom -y(d/100+minYValue))
            .attr("fill", "#E60000")
            .attr("transform", "translate(" + xOffset2 + ", 0)");
console.log()
        const xAxis = d3.axisBottom(x)
            .tickValues(d3.range(1, 8)) // Utiliser d3.range(1, 9) pour placer les étiquettes au début de chaque bande
            .tickFormat(d3.format('d'));

        const yAxis = d3.axisLeft(y)
            .tickValues([minYValue, (minYValue + maxYValue + 1) / 2, maxYValue + 1])
            .tickFormat(d3.format("d"));

        svg.append("g")
            .attr("transform", "translate(0," + (height - margin.top - margin.bottom) + ")")
            .call(xAxis)
            .selectAll("line")
            .attr("stroke", "transparent");

        svg.append("g")
            .attr("transform", "translate(" + (width - margin.left - margin.right + leftGap) + ",0)")
            .call(yAxis)
            .selectAll("line, path")
            .attr("stroke", "red")
     
            .selectAll(".tick") // Sélectionne toutes les lignes de marqueur de l'axe y
            .attr("stroke-dasharray", "2,2") // Applique le style pointillé
            .attr("stroke", "rgba(0, 0, 0, 0.5)"); // Ajoute la couleur pour la visibilité
        

    }, []);

    return <div className='leDiv' ref={canvasRef}></div>;
}
