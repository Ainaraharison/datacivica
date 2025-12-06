'use client';

import { useState } from 'react';

export function ReportGenerator() {
    const [reportType, setReportType] = useState('mensuel');
    const [selectedPeriod, setSelectedPeriod] = useState('2023-11');
    const [selectedSector, setSelectedSector] = useState('sante');
    const [generated, setGenerated] = useState(false);

    const handleGenerate = () => {
        setGenerated(true);
        setTimeout(() => setGenerated(false), 3000);
    };

    const reports = [
        {
            title: 'Rapport Mensuel Santé',
            date: 'Novembre 2023',
            status: 'Disponible',
            size: '2.4 MB',
            format: 'PDF'
        },
        {
            title: 'Rapport Trimestriel Éducation',
            date: 'T3 2023',
            status: 'Disponible',
            size: '3.8 MB',
            format: 'PDF'
        },
        {
            title: 'Analyse Annuelle Infrastructure',
            date: '2023',
            status: 'En cours',
            size: '-',
            format: 'PDF'
        }
    ];

    return (
        <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">📄 Générateur de Rapports</h3>
                
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">
                            Type de Rapport
                        </label>
                        <select
                            value={reportType}
                            onChange={(e) => setReportType(e.target.value)}
                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-neutral-900"
                        >
                            <option value="mensuel">Rapport Mensuel</option>
                            <option value="trimestriel">Rapport Trimestriel</option>
                            <option value="annuel">Rapport Annuel</option>
                            <option value="personnalise">Rapport Personnalisé</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">
                            Secteur
                        </label>
                        <select
                            value={selectedSector}
                            onChange={(e) => setSelectedSector(e.target.value)}
                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-neutral-900"
                        >
                            <option value="sante">Santé</option>
                            <option value="education">Éducation</option>
                            <option value="infrastructure">Infrastructure</option>
                            <option value="agriculture">Agriculture</option>
                            <option value="environnement">Environnement</option>
                            <option value="tous">Tous les secteurs</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">
                            Période
                        </label>
                        <input
                            type="month"
                            value={selectedPeriod}
                            onChange={(e) => setSelectedPeriod(e.target.value)}
                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-neutral-900"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="flex items-center gap-2 text-sm text-neutral-700">
                                <input type="checkbox" className="w-4 h-4" defaultChecked />
                                Graphiques
                            </label>
                        </div>
                        <div>
                            <label className="flex items-center gap-2 text-sm text-neutral-700">
                                <input type="checkbox" className="w-4 h-4" defaultChecked />
                                Tableaux
                            </label>
                        </div>
                        <div>
                            <label className="flex items-center gap-2 text-sm text-neutral-700">
                                <input type="checkbox" className="w-4 h-4" />
                                Cartes
                            </label>
                        </div>
                        <div>
                            <label className="flex items-center gap-2 text-sm text-neutral-700">
                                <input type="checkbox" className="w-4 h-4" defaultChecked />
                                Analyses
                            </label>
                        </div>
                    </div>

                    {generated ? (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                            <div className="text-3xl mb-2">✓</div>
                            <p className="text-green-800 font-semibold">Rapport généré avec succès !</p>
                            <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm">
                                Télécharger le PDF
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={handleGenerate}
                            className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
                        >
                            Générer le Rapport
                        </button>
                    )}
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">📚 Rapports Disponibles</h3>
                
                <div className="space-y-3">
                    {reports.map((report, index) => (
                        <div key={index} className="border border-neutral-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                            <div className="flex items-start justify-between mb-2">
                                <div>
                                    <h4 className="font-semibold text-neutral-900">{report.title}</h4>
                                    <p className="text-sm text-neutral-600">{report.date}</p>
                                </div>
                                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                                    report.status === 'Disponible' 
                                        ? 'bg-green-100 text-green-800' 
                                        : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                    {report.status}
                                </span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-neutral-600">{report.format} • {report.size}</span>
                                {report.status === 'Disponible' && (
                                    <div className="flex gap-2">
                                        <button className="text-primary hover:underline font-medium">
                                            Télécharger
                                        </button>
                                        <button className="text-neutral-600 hover:underline">
                                            Aperçu
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">💡 Formats d&apos;Export</h4>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-white rounded text-sm font-medium text-neutral-700">PDF</span>
                        <span className="px-3 py-1 bg-white rounded text-sm font-medium text-neutral-700">Excel</span>
                        <span className="px-3 py-1 bg-white rounded text-sm font-medium text-neutral-700">CSV</span>
                        <span className="px-3 py-1 bg-white rounded text-sm font-medium text-neutral-700">JSON</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
