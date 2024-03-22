import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './TestComp.scss';

import {    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE} from './../data/data'


export function TestComp() {
    const canvasRef = useRef(null);



    useEffect(() => {
        d3.select(canvasRef.current).selectAll("*").remove();


      


        const width = 700;
        const height = 200;
        const margin = { top: 20, right: 30, bottom: 30, left: 40 };
const data=USER_ACTIVITY[0].sessions;
        const values=[];
        for (let i=0; i<data.length; i++){
            values.push(data[i].kilogram)
        }


        const x = d3.scaleBand() // Utiliser une échelle de bande pour les valeurs discrètes
            .domain(d3.range(values.length)) // Domaine basé sur le nombre d'éléments dans le tableau
            .range([0, width - margin.left - margin.right])
            .padding(0.1); // Espacement entre les barres

        const y = d3.scaleLinear()
            .domain([0, d3.max(values)]) // Domaine basé sur les valeurs de votre tableau
            .range([height - margin.top - margin.bottom, 0]);

        const svg = d3.select(canvasRef.current)
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        svg.selectAll("rect")
            .data(values)
            .enter()
            .append("rect")
            .attr("x", (d, i) => x(i)) // Utiliser l'indice i pour positionner les barres sur l'axe x
            .attr("y", d => y(d))
            .attr("width", 7) // Largeur basée sur la largeur de la bande
            .attr("height", d => height - margin.top - margin.bottom - y(d))
            .attr("fill", "#282D30");

        const xAxis = d3.axisBottom(x)
        .ticks(10)
            .tickFormat(d3.format('d')); // Utiliser les valeurs de votre tableau pour les étiquettes de l'axe x

        const yAxis = d3.axisLeft(y)
            .ticks(10)
            .tickFormat(d3.format("d"));

        svg.append("g")
            .attr("transform", "translate(0," + (height - margin.top - margin.bottom) + ")")
            .call(xAxis);

        svg.append("g")
            .call(yAxis);
      
    }, []);

    return <div className='leDiv' ref={canvasRef}></div>;
}

