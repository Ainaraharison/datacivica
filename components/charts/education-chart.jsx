'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { annee: '2015', tauxScolarisation: 68.2, tauxAlphabetisation: 71.6 },
    { annee: '2016', tauxScolarisation: 69.8, tauxAlphabetisation: 72.3 },
    { annee: '2017', tauxScolarisation: 71.4, tauxAlphabetisation: 73.1 },
    { annee: '2018', tauxScolarisation: 73.1, tauxAlphabetisation: 74.2 },
    { annee: '2019', tauxScolarisation: 74.8, tauxAlphabetisation: 75.3 },
    { annee: '2020', tauxScolarisation: 72.5, tauxAlphabetisation: 75.8 },
    { annee: '2021', tauxScolarisation: 75.2, tauxAlphabetisation: 76.5 },
    { annee: '2022', tauxScolarisation: 76.8, tauxAlphabetisation: 77.4 },
    { annee: '2023', tauxScolarisation: 78.3, tauxAlphabetisation: 78.2 }
];

export function EducationChart() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Indicateurs d&apos;Éducation - Madagascar</h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="annee" stroke="#374151" />
                    <YAxis stroke="#374151" />
                    <Tooltip 
                        contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
                        labelStyle={{ color: '#374151' }}
                    />
                    <Legend />
                    <Line 
                        type="monotone" 
                        dataKey="tauxScolarisation" 
                        stroke="#2bdcd2" 
                        strokeWidth={2}
                        name="Taux de scolarisation (%)"
                    />
                    <Line 
                        type="monotone" 
                        dataKey="tauxAlphabetisation" 
                        stroke="#016968" 
                        strokeWidth={2}
                        name="Taux d'alphabétisation (%)"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
