'use client';

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Hydroélectrique', value: 52, color: '#2bdcd2' },
    { name: 'Énergies fossiles', value: 38, color: '#016968' },
    { name: 'Biomasse', value: 8, color: '#0ea5e9' },
    { name: 'Solaire & Éolien', value: 2, color: '#6366f1' }
];

const accessData = [
    { annee: '2015', acces: 15 },
    { annee: '2016', acces: 17 },
    { annee: '2017', acces: 19 },
    { annee: '2018', acces: 23 },
    { annee: '2019', acces: 26 },
    { annee: '2020', acces: 28 },
    { annee: '2021', acces: 32 },
    { annee: '2022', acces: 36 },
    { annee: '2023', acces: 39 }
];

export function EnvironmentChart() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Indicateurs Environnementaux - Madagascar</h3>
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h4 className="text-lg font-semibold text-neutral-800 mb-2 text-center">
                        Mix énergétique (2023)
                    </h4>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div>
                    <h4 className="text-lg font-semibold text-neutral-800 mb-2 text-center">
                        Accès à l&apos;électricité (%)
                    </h4>
                    <div className="space-y-2 mt-6">
                        {accessData.slice(-5).map((item) => (
                            <div key={item.annee} className="flex items-center gap-2">
                                <span className="text-sm font-medium text-neutral-700 w-12">{item.annee}</span>
                                <div className="flex-1 bg-neutral-200 rounded-full h-6">
                                    <div 
                                        className="bg-gradient-to-r from-primary to-secondary h-6 rounded-full flex items-center justify-end pr-2"
                                        style={{ width: `${item.acces}%` }}
                                    >
                                        <span className="text-xs font-bold text-white">{item.acces}%</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
