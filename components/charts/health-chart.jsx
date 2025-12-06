'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { annee: '2015', esperanceVie: 64.8, mortaliteInfantile: 41.2, accesSoins: 42 },
    { annee: '2016', esperanceVie: 65.2, mortaliteInfantile: 39.8, accesSoins: 44 },
    { annee: '2017', esperanceVie: 65.6, mortaliteInfantile: 38.5, accesSoins: 46 },
    { annee: '2018', esperanceVie: 66.1, mortaliteInfantile: 37.2, accesSoins: 48 },
    { annee: '2019', esperanceVie: 66.5, mortaliteInfantile: 35.9, accesSoins: 51 },
    { annee: '2020', esperanceVie: 66.0, mortaliteInfantile: 37.5, accesSoins: 49 },
    { annee: '2021', esperanceVie: 66.7, mortaliteInfantile: 35.1, accesSoins: 53 },
    { annee: '2022', esperanceVie: 67.2, mortaliteInfantile: 33.8, accesSoins: 56 },
    { annee: '2023', esperanceVie: 67.6, mortaliteInfantile: 32.5, accesSoins: 58 }
];

export function HealthChart() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Indicateurs de Santé - Madagascar</h3>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="annee" stroke="#374151" />
                    <YAxis stroke="#374151" />
                    <Tooltip 
                        contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
                        labelStyle={{ color: '#374151' }}
                    />
                    <Legend />
                    <Area 
                        type="monotone" 
                        dataKey="esperanceVie" 
                        stackId="1"
                        stroke="#2bdcd2" 
                        fill="#2bdcd2"
                        fillOpacity={0.6}
                        name="Espérance de vie (années)"
                    />
                    <Area 
                        type="monotone" 
                        dataKey="accesSoins" 
                        stackId="2"
                        stroke="#016968" 
                        fill="#016968"
                        fillOpacity={0.6}
                        name="Accès aux soins (%)"
                    />
                </AreaChart>
            </ResponsiveContainer>
            <p className="text-sm text-neutral-600 mt-4">
                Note : Mortalité infantile : {data[data.length - 1].mortaliteInfantile} pour 1000 naissances (2023)
            </p>
        </div>
    );
}
