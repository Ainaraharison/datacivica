'use client';

import { useState } from 'react';

export function ParticipationStats() {
    const stats = [
        {
            label: 'Citoyens Actifs',
            value: '2,847',
            change: '+12%',
            trend: 'up',
            icon: '👥',
            color: 'bg-blue-50',
            textColor: 'text-blue-600'
        },
        {
            label: 'Projets Suivis',
            value: '23',
            change: '+3',
            trend: 'up',
            icon: '📊',
            color: 'bg-green-50',
            textColor: 'text-green-600'
        },
        {
            label: 'Signalements',
            value: '156',
            change: '+8%',
            trend: 'up',
            icon: '🚩',
            color: 'bg-orange-50',
            textColor: 'text-orange-600'
        },
        {
            label: 'Taux de Réponse',
            value: '87%',
            change: '+5%',
            trend: 'up',
            icon: '✓',
            color: 'bg-teal-50',
            textColor: 'text-teal-600'
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
                <div key={index} className={`${stat.color} p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow`}>
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-3xl">{stat.icon}</span>
                        <span className={`text-sm font-semibold ${stat.textColor} bg-white px-2 py-1 rounded`}>
                            {stat.change}
                        </span>
                    </div>
                    <div className={`text-3xl font-bold ${stat.textColor} mb-1`}>
                        {stat.value}
                    </div>
                    <p className="text-sm text-neutral-600 font-medium">{stat.label}</p>
                </div>
            ))}
        </div>
    );
}
