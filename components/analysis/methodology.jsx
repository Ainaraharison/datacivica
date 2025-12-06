'use client';

export function MethodologyCard() {
    const criteria = [
        {
            title: "Pertinence",
            description: "Adéquation entre les objectifs annoncés et les besoins réels de la population",
            icon: "🎯"
        },
        {
            title: "Cohérence",
            description: "Logique interne entre les moyens mobilisés et les objectifs visés",
            icon: "🔗"
        },
        {
            title: "Efficacité",
            description: "Capacité à atteindre les résultats escomptés dans les délais prévus",
            icon: "📈"
        },
        {
            title: "Efficience",
            description: "Optimisation des ressources pour maximiser les résultats obtenus",
            icon: "⚡"
        },
        {
            title: "Viabilité",
            description: "Durabilité des résultats et pérennité des impacts à long terme",
            icon: "🌱"
        },
        {
            title: "Impact",
            description: "Effets directs et indirects sur les bénéficiaires et l'environnement",
            icon: "💫"
        }
    ];

    return (
        <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">📋 Cadre Méthodologique</h3>
            <p className="text-neutral-700 mb-6">
                Nos analyses critiques s'appuient sur des critères reconnus d'évaluation des politiques publiques :
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {criteria.map((criterion, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow">
                        <div className="text-3xl mb-2">{criterion.icon}</div>
                        <h4 className="font-bold text-neutral-900 mb-2">{criterion.title}</h4>
                        <p className="text-sm text-neutral-600">{criterion.description}</p>
                    </div>
                ))}
            </div>

            <div className="mt-6 bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-neutral-900 mb-2">🔍 Démarche Analytique</h4>
                <ol className="list-decimal list-inside space-y-2 text-sm text-neutral-700">
                    <li>Contextualisation et cadrage de l'objet d'étude</li>
                    <li>Collecte et triangulation des données</li>
                    <li>Analyse comparative et benchmarking</li>
                    <li>Évaluation multicritère</li>
                    <li>Formulation de recommandations argumentées</li>
                </ol>
            </div>
        </div>
    );
}
