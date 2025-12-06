'use client';

import { useState } from 'react';

const analyses = [
    {
        id: 1,
        title: "Plan National de Développement 2023-2028 : Ambitions et Réalités",
        category: "Politique Publique",
        date: "Novembre 2023",
        author: "Équipe DataCivica",
        excerpt: "Analyse critique des objectifs du PND, des mécanismes de financement et des défis de mise en œuvre dans le contexte malgache.",
        readTime: "12 min",
        tags: ["Développement", "Gouvernance", "Stratégie"],
        status: "Publié"
    },
    {
        id: 2,
        title: "Budget 2024 : Répartition Sectorielle et Priorités de Développement",
        category: "Finances Publiques",
        date: "Octobre 2023",
        author: "Équipe DataCivica",
        excerpt: "Examen détaillé de l'allocation budgétaire 2024, comparaison avec les années précédentes et évaluation de la cohérence avec les objectifs de développement.",
        readTime: "15 min",
        tags: ["Budget", "Analyse Fiscale", "Politiques Publiques"],
        status: "Publié"
    },
    {
        id: 3,
        title: "Éducation Primaire : Entre Accès Universel et Qualité Pédagogique",
        category: "Éducation",
        date: "Septembre 2023",
        author: "Équipe DataCivica",
        excerpt: "Analyse de la politique d'éducation primaire gratuite, ses impacts sur les taux de scolarisation et les défis persistants en matière de qualité.",
        readTime: "10 min",
        tags: ["Éducation", "ODD", "Politique Sociale"],
        status: "Publié"
    },
    {
        id: 4,
        title: "Couverture Santé Universelle à Madagascar : État des Lieux",
        category: "Santé",
        date: "Août 2023",
        author: "Équipe DataCivica",
        excerpt: "Évaluation critique de la progression vers la couverture santé universelle, analyse des barrières d'accès et recommandations stratégiques.",
        readTime: "14 min",
        tags: ["Santé", "Protection Sociale", "CSU"],
        status: "Publié"
    },
    {
        id: 5,
        title: "Décentralisation et Gouvernance Locale : Bilan 2015-2023",
        category: "Gouvernance",
        date: "En cours",
        author: "Équipe DataCivica",
        excerpt: "Analyse approfondie du processus de décentralisation, des transferts de compétences aux communes et de l'efficacité de la gouvernance locale.",
        readTime: "18 min",
        tags: ["Décentralisation", "Communes", "Participation"],
        status: "En rédaction"
    }
];

export function AnalysisList() {
    const [selectedCategory, setSelectedCategory] = useState('Tous');
    
    const categories = ['Tous', ...new Set(analyses.map(a => a.category))];
    
    const filteredAnalyses = selectedCategory === 'Tous' 
        ? analyses 
        : analyses.filter(a => a.category === selectedCategory);

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex flex-wrap gap-2 mb-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                                selectedCategory === cat
                                    ? 'bg-primary text-white'
                                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                
                <p className="text-sm text-neutral-600">
                    {filteredAnalyses.length} analyse{filteredAnalyses.length > 1 ? 's' : ''} trouvée{filteredAnalyses.length > 1 ? 's' : ''}
                </p>
            </div>

            <div className="space-y-4">
                {filteredAnalyses.map((analysis) => (
                    <div key={analysis.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                        <div className="p-6">
                            <div className="flex items-start justify-between mb-3">
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                                    {analysis.category}
                                </span>
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                    analysis.status === 'Publié' 
                                        ? 'bg-green-100 text-green-800' 
                                        : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                    {analysis.status}
                                </span>
                            </div>
                            
                            <h3 className="text-xl font-bold text-neutral-900 mb-2">
                                {analysis.title}
                            </h3>
                            
                            <div className="flex items-center gap-4 text-sm text-neutral-600 mb-3">
                                <span>📅 {analysis.date}</span>
                                <span>✍️ {analysis.author}</span>
                                <span>⏱️ {analysis.readTime}</span>
                            </div>
                            
                            <p className="text-neutral-700 mb-4">
                                {analysis.excerpt}
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                                {analysis.tags.map((tag, index) => (
                                    <span key={index} className="px-2 py-1 bg-neutral-100 text-neutral-700 rounded text-xs">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            
                            {analysis.status === 'Publié' && (
                                <button className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 font-semibold">
                                    Lire l&apos;analyse complète →
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
