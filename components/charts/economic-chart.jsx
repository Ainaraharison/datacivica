'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { annee: '2015', pib: 10.7, revenuParHabitant: 448 },
    { annee: '2016', pib: 11.2, revenuParHabitant: 461 },
    { annee: '2017', pib: 11.8, revenuParHabitant: 475 },
    { annee: '2018', pib: 12.4, revenuParHabitant: 492 },
    { annee: '2019', pib: 13.1, revenuParHabitant: 508 },
    { annee: '2020', pib: 12.2, revenuParHabitant: 468 },
    { annee: '2021', pib: 13.6, revenuParHabitant: 512 },
    { annee: '2022', pib: 14.5, revenuParHabitant: 537 },
    { annee: '2023', pib: 15.3, revenuParHabitant: 558 }
];

export function EconomicChart() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Indicateurs Économiques - Madagascar</h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="annee" stroke="#374151" />
                    <YAxis stroke="#374151" />
                    <Tooltip 
                        contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
                        labelStyle={{ color: '#374151' }}
                    />
                    <Legend />
                    <Bar 
                        dataKey="pib" 
                        fill="#2bdcd2" 
                        name="PIB (Milliards USD)"
                    />
                    <Bar 
                        dataKey="revenuParHabitant" 
                        fill="#016968" 
                        name="Revenu par habitant (USD)"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
