import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts'; // Importation des composants de Recharts
import { USER_ACTIVITY } from './../data/data'; // Importation des données
import './TestComp.scss'; // Importation du fichier de style CSS

export function TestComp() {
    // Transformation des données pour les adapter au format utilisé par Recharts
    const data = USER_ACTIVITY[0].sessions.map((session, index) => ({
        name: `${index + 1}`, // Nom du jour
        kilograms: session.kilogram, // Poids en kilogrammes
        calories: session.calories, // Calories brûlées
    }));

    // Vérification si les données pour le septième jour existent
    const seventhDayData = data[6]; // Les indices commencent à 0, donc le septième jour est à l'indice 6
    const hasSeventhDayData = seventhDayData !== undefined;

    // Recherche du poids minimum dans les données
    const minKilograms = Math.floor(Math.min(...data.map(entry => entry.kilograms)));

    // Définition du domaine de l'axe Y pour les kilogrammes en commençant à minKilograms
    const yAxisDomain = [minKilograms-1, Math.ceil(Math.max(...data.map(entry => entry.kilograms)))+1];
    console.log(data);

    return (
        <div className='leDiv' style={{ width: '500px', height: '400px' }}>
            <ResponsiveContainer>
                {/* Création du graphique */}
                <BarChart
                    data={data} // Données à afficher
                    margin={{ top: 20, right: 30, left: 40, bottom: 30 }} // Marge autour du graphique
                    barSize={8} // Taille des barres
                >
                    {/* Configuration de l'axe X */}
                    <XAxis dataKey="name" /> {/* Utilise les noms des jours comme étiquettes */}
                    
                    {/* Configuration de l'axe Y pour les kilogrammes */}
                    <YAxis
                        yAxisId="kilograms" // Identifiant de l'axe pour les kilogrammes
                        orientation="right" // Orientation de l'axe
                        domain={yAxisDomain} // Définit le domaine personnalisé pour les kilogrammes
                        tick={({ x, y, payload }) => ( // Configuration des étiquettes
                            <text
                                x={x + 15}
                                y={y}
                                dy={4}
                                textAnchor="start"
                                fill="#666"
                                className="couou"
                            >
                                {payload.value} {/* Affichage des valeurs des kilogrammes */}
                            </text>
                        )}
                    />
                    
                    {/* Configuration de l'axe Y pour les calories */}
                    <YAxis
                        yAxisId="calories" // Identifiant de l'axe pour les calories
                        orientation="right" // Orientation de l'axe
                        domain={[0, Math.ceil(Math.max(...data.map(entry => entry.calories)) / 4.81)]} // Définit le domaine personnalisé pour les calories
                        tick={({ x, y, payload }) => ( // Configuration des étiquettes
                            <text
                                x={x + 15}
                                y={y}
                                dy={4}
                                textAnchor="start"
                                fill="#666"
                                className="couou"
                            >
                                {Math.round(payload.value * 4.81)} {/* Conversion des calories en pixels */}
                            </text>
                        )}
                    />
                    
                    <Tooltip /> {/* Affichage des infobulles au survol */}
                    <CartesianGrid strokeDasharray="3 3" vertical={false} /> {/* Lignes de grille horizontales */}
                    
                    {/* Affichage des barres pour les kilogrammes */}
                    {hasSeventhDayData && (
                        <Bar dataKey="kilograms" fill="#282D30" yAxisId="kilograms" />
                      
                    )}
                    
                    {/* Affichage des barres pour les calories */}
                    {hasSeventhDayData && (
                        <Bar dataKey="calories" fill="#E60000" yAxisId="calories" />
                    )}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
