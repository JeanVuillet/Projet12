import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import './TestComp.scss';


export function TestComp() {
    const canvasRef = useRef(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            d3.select(canvasRef.current).selectAll("*").remove();

            try {
                const response = await fetch('../../../back/app/data.js');
                if (!response.ok) {
                    throw Error('La requête a échoué ' + response.status);
                }

                const text = await response.clone().text();
                const script = new Function(text);
                const newData = script();
                setData(newData);
            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (data) {
            // Votre code D3 ici...
        }
    }, [data]);

    return <div className='leDiv' ref={canvasRef}></div>;
}