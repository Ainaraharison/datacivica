'use client';

import { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const regionData = [
    { region: 'Analamanga', population: 3618, pib: 4.2, taux_pauvrete: 42 },
    { region: 'Vakinankaratra', population: 2074, pib: 1.8, taux_pauvrete: 68 },
    { region: 'Atsinanana', population: 1484, pib: 1.5, taux_pauvrete: 72 },
    { region: 'Haute Matsiatra', population: 1447, pib: 1.3, taux_pauvrete: 75 },
    { region: 'Boeny', population: 931, pib: 1.1, taux_pauvrete: 58 },
    { region: 'Menabe', population: 700, pib: 0.9, taux_pauvrete: 82 }
];

const secteurData = [
    { name: 'Agriculture', value: 24, color: '#10b981' },
    { name: 'Services', value: 54, color: '#3b82f6' },
    { name: 'Industrie', value: 16, color: '#f59e0b' },
    { name: 'Autres', value: 6, color: '#8b5cf6' }
];

const evolutionData = [
    { annee: '2019', budget_sante: 180, budget_education: 420, budget_infrastructure: 350 },
    { annee: '2020', budget_sante: 210, budget_education: 390, budget_infrastructure: 310 },
    { annee: '2021', budget_sante: 245, budget_education: 450, budget_infrastructure: 380 },
    { annee: '2022', budget_sante: 280, budget_education: 490, budget_infrastructure: 420 },
    { annee: '2023', budget_sante: 315, budget_education: 530, budget_infrastructure: 460 }
];

export function InteractiveDashboard() {
    const [selectedRegion, setSelectedRegion] = useState('Analamanga');

    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-lg shadow-lg text-white">
                <h3 className="text-2xl font-bold mb-2">📊 Tableau de Bord Interactif</h3>
                <p className="text-white/90">Données consolidées par région - Madagascar 2023</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-lg font-bold text-neutral-900 mb-4">Population par Région (milliers)</h4>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={regionData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis 
                                dataKey="region" 
                                angle={-45}
                                textAnchor="end"
                                height={100}
                                fontSize={10}
                            />
                            <YAxis fontSize={12} />
                            <Tooltip />
                            <Bar dataKey="population" fill="#2bdcd2" name="Population (milliers)" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-lg font-bold text-neutral-900 mb-4">Contribution au PIB (%)</h4>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie
                                data={secteurData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, value }) => `${name}: ${value}%`}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {secteurData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-lg font-bold text-neutral-900 mb-4">Budgets Sectoriels (Milliards Ar)</h4>
                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={evolutionData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="annee" />
                            <YAxis fontSize={12} />
                            <Tooltip />
                            <Legend wrapperStyle={{ fontSize: '11px' }} />
                            <Line type="monotone" dataKey="budget_sante" stroke="#10b981" strokeWidth={2} name="Santé" />
                            <Line type="monotone" dataKey="budget_education" stroke="#3b82f6" strokeWidth={2} name="Éducation" />
                            <Line type="monotone" dataKey="budget_infrastructure" stroke="#f59e0b" strokeWidth={2} name="Infrastructure" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-neutral-900 mb-4">Données Détaillées par Région</h4>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-neutral-100">
                            <tr>
                                <th className="px-4 py-3 text-left font-semibold text-neutral-700">Région</th>
                                <th className="px-4 py-3 text-right font-semibold text-neutral-700">Population</th>
                                <th className="px-4 py-3 text-right font-semibold text-neutral-700">PIB (Md Ar)</th>
                                <th className="px-4 py-3 text-right font-semibold text-neutral-700">Taux Pauvreté (%)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200">
                            {regionData.map((region, index) => (
                                <tr key={index} className="hover:bg-neutral-50">
                                    <td className="px-4 py-3 font-medium text-neutral-900">{region.region}</td>
                                    <td className="px-4 py-3 text-right text-neutral-700">{region.population.toLocaleString()}</td>
                                    <td className="px-4 py-3 text-right text-neutral-700">{region.pib}</td>
                                    <td className="px-4 py-3 text-right">
                                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                                            region.taux_pauvrete > 70 ? 'bg-red-100 text-red-800' :
                                            region.taux_pauvrete > 60 ? 'bg-orange-100 text-orange-800' :
                                            'bg-green-100 text-green-800'
                                        }`}>
                                            {region.taux_pauvrete}%
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
