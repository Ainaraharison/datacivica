'use client';

import { useState } from 'react';

export function ProjectTracker() {
    const [projects] = useState([
        {
            id: 1,
            name: 'Construction École Primaire',
            location: 'Antsirabe, Vakinankaratra',
            status: 'En cours',
            progress: 68,
            budget: '500M Ar',
            budgetUsed: 340,
            startDate: '2024-03-15',
            endDate: '2025-06-30',
            participants: 142,
            updates: 8
        },
        {
            id: 2,
            name: 'Réhabilitation Centre de Santé Basique (CSB)',
            location: 'Toamasina, Atsinanana',
            status: 'En cours',
            progress: 45,
            budget: '380M Ar',
            budgetUsed: 171,
            startDate: '2024-06-01',
            endDate: '2025-03-31',
            participants: 89,
            updates: 5
        },
        {
            id: 3,
            name: 'Adduction d\'Eau Potable Villageoise',
            location: 'Ambositra, Amoron\'i Mania',
            status: 'En cours',
            progress: 82,
            budget: '650M Ar',
            budgetUsed: 533,
            startDate: '2023-11-20',
            endDate: '2025-01-15',
            participants: 234,
            updates: 12
        },
        {
            id: 4,
            name: 'Électrification Rurale par Solaire',
            location: 'Morondava, Menabe',
            status: 'Planification',
            progress: 15,
            budget: '920M Ar',
            budgetUsed: 138,
            startDate: '2024-09-01',
            endDate: '2026-12-31',
            participants: 67,
            updates: 2
        }
    ]);

    const getStatusColor = (status) => {
        switch (status) {
            case 'En cours':
                return 'bg-blue-100 text-blue-800';
            case 'Terminé':
                return 'bg-green-100 text-green-800';
            case 'Planification':
                return 'bg-yellow-100 text-yellow-800';
            case 'Suspendu':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-secondary p-6">
                <h3 className="text-xl font-bold text-white">🏗️ Projets en Suivi Participatif</h3>
                <p className="text-white/90 text-sm mt-1">Suivez l'avancement des projets de développement en temps réel</p>
            </div>
            
            <div className="divide-y divide-neutral-200">
                {projects.map((project) => (
                    <div key={project.id} className="p-6 hover:bg-neutral-50 transition-colors">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                            <div className="flex-1">
                                <div className="flex items-start gap-3 mb-2">
                                    <h4 className="text-lg font-bold text-neutral-900">{project.name}</h4>
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                                        {project.status}
                                    </span>
                                </div>
                                <p className="text-sm text-neutral-600 mb-2">📍 {project.location}</p>
                                <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
                                    <span>👥 {project.participants} participants</span>
                                    <span>📅 {project.startDate} → {project.endDate}</span>
                                    <span>💬 {project.updates} mises à jour</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm text-neutral-600 mb-1">Budget</div>
                                <div className="text-lg font-bold text-neutral-900">{project.budget}</div>
                                <div className="text-xs text-neutral-500">
                                    {project.budgetUsed}M Ar utilisé
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="font-semibold text-neutral-700">Progression</span>
                                <span className="font-bold text-neutral-900">{project.progress}%</span>
                            </div>
                            <div className="w-full bg-neutral-200 rounded-full h-3">
                                <div
                                    className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                                    style={{ width: `${project.progress}%` }}
                                >
                                    {project.progress > 10 && (
                                        <span className="text-xs font-bold text-white">{project.progress}%</span>
                                    )}
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-4 flex gap-2">
                            <button className="text-sm px-4 py-2 bg-primary text-white rounded hover:opacity-90 transition-opacity">
                                Voir Détails
                            </button>
                            <button className="text-sm px-4 py-2 bg-neutral-200 text-neutral-700 rounded hover:bg-neutral-300 transition-colors">
                                Participer
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
