'use client';

import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function ProcessStatusMonitor() {
    const [processes, setProcesses] = useState([
        { id: 1, name: 'Collecte de données', status: 'running', progress: 75, cpu: 45, memory: 62 },
        { id: 2, name: 'Traitement ETL', status: 'running', progress: 92, cpu: 78, memory: 85 },
        { id: 3, name: 'Analyse statistique', status: 'completed', progress: 100, cpu: 0, memory: 0 },
        { id: 4, name: 'Génération de rapports', status: 'running', progress: 58, cpu: 34, memory: 48 },
        { id: 5, name: 'Validation qualité', status: 'pending', progress: 0, cpu: 0, memory: 0 },
        { id: 6, name: 'Publication des résultats', status: 'pending', progress: 0, cpu: 0, memory: 0 }
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setProcesses((prev) =>
                prev.map((proc) => {
                    if (proc.status === 'running' && proc.progress < 100) {
                        const newProgress = Math.min(proc.progress + Math.random() * 5, 100);
                        const newStatus = newProgress >= 100 ? 'completed' : 'running';
                        return {
                            ...proc,
                            progress: newProgress,
                            status: newStatus,
                            cpu: newStatus === 'completed' ? 0 : Math.max(10, proc.cpu + (Math.random() - 0.5) * 20),
                            memory: newStatus === 'completed' ? 0 : Math.max(10, proc.memory + (Math.random() - 0.5) * 15)
                        };
                    }
                    return proc;
                })
            );
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const getStatusColor = (status) => {
        switch (status) {
            case 'running':
                return 'bg-blue-500';
            case 'completed':
                return 'bg-green-500';
            case 'pending':
                return 'bg-gray-400';
            case 'error':
                return 'bg-red-500';
            default:
                return 'bg-gray-400';
        }
    };

    const getStatusText = (status) => {
        switch (status) {
            case 'running':
                return 'En cours';
            case 'completed':
                return 'Terminé';
            case 'pending':
                return 'En attente';
            case 'error':
                return 'Erreur';
            default:
                return 'Inconnu';
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">État des Processus en Temps Réel</h3>
            <div className="space-y-4">
                {processes.map((proc) => (
                    <div key={proc.id} className="border border-neutral-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                                <div className={`w-3 h-3 rounded-full ${getStatusColor(proc.status)} animate-pulse`}></div>
                                <span className="font-semibold text-neutral-800">{proc.name}</span>
                            </div>
                            <span className="text-sm text-neutral-600 font-medium">{getStatusText(proc.status)}</span>
                        </div>
                        
                        <div className="mb-2">
                            <div className="flex justify-between text-sm text-neutral-600 mb-1">
                                <span>Progression</span>
                                <span>{Math.round(proc.progress)}%</span>
                            </div>
                            <div className="w-full bg-neutral-200 rounded-full h-2">
                                <div
                                    className={`h-2 rounded-full transition-all duration-500 ${
                                        proc.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'
                                    }`}
                                    style={{ width: `${proc.progress}%` }}
                                ></div>
                            </div>
                        </div>

                        {proc.status === 'running' && (
                            <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
                                <div>
                                    <span className="text-neutral-600">CPU: </span>
                                    <span className="font-semibold text-neutral-800">{Math.round(proc.cpu)}%</span>
                                </div>
                                <div>
                                    <span className="text-neutral-600">Mémoire: </span>
                                    <span className="font-semibold text-neutral-800">{Math.round(proc.memory)}%</span>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
