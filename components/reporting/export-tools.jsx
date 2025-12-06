'use client';

export function DataExportTools() {
    const exportFormats = [
        { name: 'Excel (.xlsx)', icon: '📊', description: 'Format idéal pour analyses et calculs' },
        { name: 'CSV', icon: '📄', description: 'Compatible avec tous les logiciels' },
        { name: 'JSON', icon: '{ }', description: 'Pour intégration technique' },
        { name: 'PDF', icon: '📑', description: 'Documents imprimables' }
    ];

    const visualizationTools = [
        { name: 'Graphiques Interactifs', icon: '📈', status: 'Actif' },
        { name: 'Cartes Géographiques', icon: '🗺️', status: 'Actif' },
        { name: 'Tableaux de Bord', icon: '📊', status: 'Actif' },
        { name: 'Infographies', icon: '🎨', status: 'Bientôt' }
    ];

    return (
        <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">💾 Export de Données</h3>
                <p className="text-neutral-600 mb-4 text-sm">
                    Exportez les données dans le format qui vous convient pour vos analyses personnalisées.
                </p>
                
                <div className="space-y-3">
                    {exportFormats.map((format, index) => (
                        <div key={index} className="border border-neutral-200 rounded-lg p-4 hover:border-primary hover:shadow-md transition-all cursor-pointer">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-2xl">{format.icon}</span>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-neutral-900">{format.name}</h4>
                                    <p className="text-xs text-neutral-600">{format.description}</p>
                                </div>
                                <button className="px-4 py-2 bg-primary text-white rounded hover:opacity-90 text-sm font-medium">
                                    Exporter
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 bg-neutral-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-neutral-900 mb-2 text-sm">⚙️ Options d&apos;Export</h4>
                    <div className="space-y-2 text-sm">
                        <label className="flex items-center gap-2 text-neutral-700">
                            <input type="checkbox" className="w-4 h-4" defaultChecked />
                            Inclure les métadonnées
                        </label>
                        <label className="flex items-center gap-2 text-neutral-700">
                            <input type="checkbox" className="w-4 h-4" defaultChecked />
                            Exporter avec formatage
                        </label>
                        <label className="flex items-center gap-2 text-neutral-700">
                            <input type="checkbox" className="w-4 h-4" />
                            Compresser en ZIP
                        </label>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">🎨 Outils de Visualisation</h3>
                <p className="text-neutral-600 mb-4 text-sm">
                    Créez des visualisations percutantes pour communiquer vos données efficacement.
                </p>
                
                <div className="space-y-3">
                    {visualizationTools.map((tool, index) => (
                        <div key={index} className="border border-neutral-200 rounded-lg p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">{tool.icon}</span>
                                    <h4 className="font-semibold text-neutral-900">{tool.name}</h4>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                    tool.status === 'Actif' 
                                        ? 'bg-green-100 text-green-800' 
                                        : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                    {tool.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 space-y-3">
                    <button className="w-full px-4 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 font-semibold">
                        Créer une Visualisation
                    </button>
                    <button className="w-full px-4 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all font-semibold">
                        Bibliothèque de Templates
                    </button>
                </div>
            </div>
        </div>
    );
}
