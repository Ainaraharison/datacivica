'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const categoryData = [
    { category: 'Infrastructure', signalements: 52 },
    { category: 'Eau potable', signalements: 38 },
    { category: 'Éducation', signalements: 34 },
    { category: 'Santé', signalements: 28 },
    { category: 'Environnement', signalements: 22 },
    { category: 'Autres', signalements: 12 }
];

const statusData = [
    { name: 'Traités', value: 98, color: '#10b981' },
    { name: 'En cours', value: 42, color: '#3b82f6' },
    { name: 'En attente', value: 16, color: '#f59e0b' }
];

export function ParticipationCharts() {
    return (
        <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">Signalements par Catégorie</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={categoryData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                            dataKey="category" 
                            stroke="#374151" 
                            angle={-45}
                            textAnchor="end"
                            height={80}
                            fontSize={12}
                        />
                        <YAxis stroke="#374151" />
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
                            labelStyle={{ color: '#374151' }}
                        />
                        <Bar dataKey="signalements" fill="#2bdcd2" name="Signalements" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">État des Signalements</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={statusData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, value }) => `${name}: ${value}`}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {statusData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
                        />
                    </PieChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-3 gap-2 mt-4">
                    {statusData.map((item, index) => (
                        <div key={index} className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-1">
                                <div 
                                    className="w-3 h-3 rounded-full" 
                                    style={{ backgroundColor: item.color }}
                                ></div>
                                <span className="text-sm font-semibold text-neutral-700">{item.name}</span>
                            </div>
                            <div className="text-2xl font-bold" style={{ color: item.color }}>
                                {item.value}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
