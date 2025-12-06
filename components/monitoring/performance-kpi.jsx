'use client';

import { useState, useEffect } from 'react';

export function PerformanceKPI() {
    const [kpis, setKpis] = useState({
        totalProcesses: 6,
        running: 3,
        completed: 1,
        failed: 0,
        avgDuration: 245,
        successRate: 98.5,
        uptime: 99.2
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setKpis((prev) => ({
                ...prev,
                avgDuration: Math.max(200, Math.min(300, prev.avgDuration + (Math.random() - 0.5) * 10)),
                successRate: Math.max(95, Math.min(100, prev.successRate + (Math.random() - 0.5) * 0.5)),
                uptime: Math.max(98, Math.min(100, prev.uptime + (Math.random() - 0.5) * 0.2))
            }));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const kpiCards = [
        {
            label: 'Processus Actifs',
            value: kpis.running,
            total: kpis.totalProcesses,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50',
            icon: '⚙️'
        },
        {
            label: 'Taux de Réussite',
            value: `${kpis.successRate.toFixed(1)}%`,
            color: 'text-green-600',
            bgColor: 'bg-green-50',
            icon: '✓'
        },
        {
            label: 'Durée Moyenne',
            value: `${Math.round(kpis.avgDuration)}s`,
            color: 'text-purple-600',
            bgColor: 'bg-purple-50',
            icon: '⏱️'
        },
        {
            label: 'Disponibilité',
            value: `${kpis.uptime.toFixed(1)}%`,
            color: 'text-teal-600',
            bgColor: 'bg-teal-50',
            icon: '📊'
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {kpiCards.map((kpi, index) => (
                <div key={index} className={`${kpi.bgColor} p-6 rounded-lg shadow`}>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl">{kpi.icon}</span>
                        <span className={`text-3xl font-bold ${kpi.color}`}>
                            {kpi.value}
                        </span>
                    </div>
                    <p className="text-sm text-neutral-600 font-medium">{kpi.label}</p>
                    {kpi.total && (
                        <p className="text-xs text-neutral-500 mt-1">sur {kpi.total} total</p>
                    )}
                </div>
            ))}
        </div>
    );
}
