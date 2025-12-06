'use client';

import { useState, useEffect } from 'react';

export function ActivityLog() {
    const [logs, setLogs] = useState([
        { id: 1, time: '14:32:15', type: 'info', message: 'Démarrage du processus de collecte de données', process: 'Collecte' },
        { id: 2, time: '14:32:18', type: 'success', message: 'Connexion à la base de données établie', process: 'Système' },
        { id: 3, time: '14:32:45', type: 'info', message: 'Traitement ETL en cours - 1000 enregistrements traités', process: 'ETL' },
        { id: 4, time: '14:33:12', type: 'success', message: 'Analyse statistique terminée avec succès', process: 'Analyse' },
        { id: 5, time: '14:33:30', type: 'warning', message: 'Utilisation mémoire élevée détectée (85%)', process: 'Système' }
    ]);

    useEffect(() => {
        const messages = [
            { type: 'info', message: 'Traitement de données en cours', process: 'ETL' },
            { type: 'success', message: 'Validation des données réussie', process: 'Validation' },
            { type: 'info', message: 'Génération du rapport statistique', process: 'Rapport' },
            { type: 'success', message: 'Sauvegarde automatique effectuée', process: 'Système' },
            { type: 'info', message: 'Mise à jour des indicateurs', process: 'Analyse' }
        ];

        const interval = setInterval(() => {
            const randomMsg = messages[Math.floor(Math.random() * messages.length)];
            const now = new Date();
            const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
            
            setLogs((prev) => [
                {
                    id: Date.now(),
                    time: timeStr,
                    type: randomMsg.type,
                    message: randomMsg.message,
                    process: randomMsg.process
                },
                ...prev.slice(0, 9)
            ]);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const getTypeStyle = (type) => {
        switch (type) {
            case 'success':
                return { bg: 'bg-green-100', text: 'text-green-800', icon: '✓' };
            case 'warning':
                return { bg: 'bg-yellow-100', text: 'text-yellow-800', icon: '⚠' };
            case 'error':
                return { bg: 'bg-red-100', text: 'text-red-800', icon: '✗' };
            default:
                return { bg: 'bg-blue-100', text: 'text-blue-800', icon: 'ℹ' };
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Journal d&apos;Activité</h3>
            <div className="space-y-2 max-h-96 overflow-y-auto">
                {logs.map((log) => {
                    const style = getTypeStyle(log.type);
                    return (
                        <div key={log.id} className="flex items-start gap-3 p-3 hover:bg-neutral-50 rounded transition-colors">
                            <span className={`${style.bg} ${style.text} px-2 py-1 rounded text-sm font-semibold flex-shrink-0`}>
                                {style.icon}
                            </span>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs text-neutral-500 font-mono">{log.time}</span>
                                    <span className="text-xs text-neutral-400">•</span>
                                    <span className="text-xs font-semibold text-neutral-600">{log.process}</span>
                                </div>
                                <p className="text-sm text-neutral-700">{log.message}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
