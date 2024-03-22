import React, { useEffect, useRef } from 'react'; // Importation des hooks React nécessaires
import * as d3 from 'd3'; // Importation de D3.js pour la visualisation des données
import './TestComp.scss'; // Importation du fichier de style CSS
import { USER_ACTIVITY } from './../data/data'; // Importation des données utilisateur

export function TestComp() {
    const canvasRef = useRef(null); // Création d'une référence pour le composant Canvas

    useEffect(() => { // Utilisation de useEffect pour effectuer des opérations lors du montage du composant
        d3.select(canvasRef.current).selectAll("*").remove(); // Suppression de tout contenu précédent dans le composant Canvas

        // Définition des dimensions du graphique et des marges
        const width = 700;
        const height = 200;
        const margin = { top: 20, right: 30, bottom: 30, left: 40 };
        const leftGap=40;

        // Récupération des données d'activité utilisateur
        const data = USER_ACTIVITY[0].sessions;
        console.log(data);
        let kilograms=[];
        let calories=[]
        for( let i=0; i<data.length; i++){
            kilograms.push(data[i].kilogram)
            calories.push(data[i].calories)
        }

        console.log(kilograms);
        console.log(calories);
    
        // Création du tableau de données pour les barres
        const list2 = [69, 73, 81, 80, 79, 78, 66];

        // Création de l'échelle pour l'axe x (échelle lineaire)
        const x = d3.scaleLinear()
            .domain([1,7]) 
            .range([0, width - margin.left - margin.right])//taille en px de laxe des x
        
            const minYValue = Math.min(...kilograms);
            const maxYValue=Math.max(...kilograms);
        // Création de l'échelle pour l'axe y (échelle linéaire)
        const y = d3.scaleLinear()
            .domain([minYValue-1,maxYValue+1]) // Définition du domaine de 65 à 85 pour l'axe y
            .range([height - margin.top - margin.bottom ,0]);

        // Création de l'élément SVG et du conteneur graphique
        const svg = d3.select(canvasRef.current)
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        // Création des barres rectangulaires
        svg.selectAll("rect")
            .data(kilograms)
            .enter()
            .append("rect")
            .attr("x", (d, i) => x(i+1))
            .attr("y", d => y(d))
            .attr("width", 7)
            .attr("height", d => height - margin.top - margin.bottom - y(d))
            .attr("fill", "#282D30");

        // Création de l'axe x
        const xAxis = d3.axisBottom(x)
            .tickValues(d3.range(1, 8)) // Définition des valeurs de l'axe x de 1 à 7
            .tickFormat(d3.format('d')); // Formatage des étiquettes de l'axe x

        // Création de l'axe y
        const yAxis = d3.axisLeft(y)
        .tickValues([minYValue, (minYValue + maxYValue+1) / 2, maxYValue+1,]) 
            .tickFormat(d3.format("d"))
 

        // Ajout de l'axe x au graphique
        svg.append("g")
            .attr("transform", "translate(0," + (height - margin.top - margin.bottom) + ")")
            .call(xAxis);

        // Ajout de l'axe y au graphique
        svg.append("g")
        .attr("transform", "translate(" + (width - margin.left - margin.right+leftGap) + ",0)")
        .call(yAxis)
     
        .selectAll("line, path")
        .attr("stroke", "transparent"); // Rendre les lignes de l'axe invisibles;

    }, []); // La dépendance vide indique que cette fonction useEffect ne s'exécute qu'une seule fois après le montage initial du composant

    // Rendu du composant Canvas
    return <div className='leDiv' ref={canvasRef}></div>;
}
