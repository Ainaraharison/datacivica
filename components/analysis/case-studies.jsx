'use client';

import { useState } from 'react';

export function CaseStudySelector() {
    const [selectedCase, setSelectedCase] = useState(null);

    const caseStudies = [
        {
            id: 1,
            title: "Programme CASEF : Impact sur la Sécurité Alimentaire",
            region: "Atsimo-Andrefana",
            period: "2020-2023",
            budget: "45 Milliards Ar",
            beneficiaires: "125,000 ménages",
            status: "Terminé",
            findings: {
                positive: [
                    "Amélioration de 23% de la production agricole",
                    "Réduction de 15% de l'insécurité alimentaire",
                    "Formation de 3,500 producteurs"
                ],
                challenges: [
                    "Distribution inégale des bénéfices selon les zones",
                    "Dépendance continue aux intrants subventionnés",
                    "Faible appropriation communautaire"
                ],
                recommendations: [
                    "Renforcer l'accompagnement post-projet",
                    "Améliorer la distribution géographique",
                    "Développer des mécanismes d'auto-financement"
                ]
            }
        },
        {
            id: 2,
            title: "Électrification Rurale par Solaire : Cas de Menabe",
            region: "Menabe",
            period: "2021-2024",
            budget: "32 Milliards Ar",
            beneficiaires: "45 villages",
            status: "En cours",
            findings: {
                positive: [
                    "Installation de 850 kits solaires individuels",
                    "Création de 12 mini-réseaux communautaires",
                    "Taux de satisfaction de 82%"
                ],
                challenges: [
                    "Coûts de maintenance élevés",
                    "Manque de techniciens locaux formés",
                    "Vols et dégradations d'équipements"
                ],
                recommendations: [
                    "Former des techniciens locaux",
                    "Créer des comités de gestion communautaire",
                    "Mettre en place un système d'assurance"
                ]
            }
        },
        {
            id: 3,
            title: "Réhabilitation des CSB2 : Amélioration de l'Accès aux Soins",
            region: "Vakinankaratra",
            period: "2019-2022",
            budget: "28 Milliards Ar",
            beneficiaires: "18 CSB2 réhabilités",
            status: "Terminé",
            findings: {
                positive: [
                    "Augmentation de 40% de la fréquentation",
                    "Amélioration des infrastructures sanitaires",
                    "Équipements médicaux modernisés"
                ],
                challenges: [
                    "Pénurie persistante de médicaments",
                    "Turn-over élevé du personnel médical",
                    "Budget de fonctionnement insuffisant"
                ],
                recommendations: [
                    "Sécuriser l'approvisionnement en médicaments",
                    "Améliorer les conditions du personnel",
                    "Augmenter les budgets de fonctionnement"
                ]
            }
        }
    ];

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">📚 Études de Cas</h3>
                <p className="text-neutral-700 mb-6">
                    Analyses approfondies de projets et programmes de développement à Madagascar
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                    {caseStudies.map((study) => (
                        <div
                            key={study.id}
                            onClick={() => setSelectedCase(study.id === selectedCase ? null : study.id)}
                            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                                selectedCase === study.id
                                    ? 'border-primary bg-blue-50'
                                    : 'border-neutral-200 hover:border-primary'
                            }`}
                        >
                            <div className="flex items-start justify-between mb-2">
                                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                                    study.status === 'Terminé'
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-blue-100 text-blue-800'
                                }`}>
                                    {study.status}
                                </span>
                            </div>
                            <h4 className="font-bold text-neutral-900 mb-2 text-sm">{study.title}</h4>
                            <div className="space-y-1 text-xs text-neutral-600">
                                <p>📍 {study.region}</p>
                                <p>📅 {study.period}</p>
                                <p>💰 {study.budget}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedCase && (
                <div className="bg-white p-6 rounded-lg shadow-lg animate-fadeIn">
                    {caseStudies.filter(s => s.id === selectedCase).map((study) => (
                        <div key={study.id}>
                            <h3 className="text-2xl font-bold text-neutral-900 mb-4">{study.title}</h3>
                            
                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                                <div>
                                    <p className="text-sm text-neutral-600 mb-1">Région</p>
                                    <p className="font-semibold text-neutral-900">{study.region}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-600 mb-1">Période</p>
                                    <p className="font-semibold text-neutral-900">{study.period}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-600 mb-1">Budget</p>
                                    <p className="font-semibold text-neutral-900">{study.budget}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-600 mb-1">Bénéficiaires</p>
                                    <p className="font-semibold text-neutral-900">{study.beneficiaires}</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                                        <span>✅</span> Points Positifs
                                    </h4>
                                    <ul className="space-y-2 text-sm text-green-800">
                                        {study.findings.positive.map((point, idx) => (
                                            <li key={idx}>• {point}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-orange-50 p-4 rounded-lg">
                                    <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                                        <span>⚠️</span> Défis
                                    </h4>
                                    <ul className="space-y-2 text-sm text-orange-800">
                                        {study.findings.challenges.map((challenge, idx) => (
                                            <li key={idx}>• {challenge}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                                        <span>💡</span> Recommandations
                                    </h4>
                                    <ul className="space-y-2 text-sm text-blue-800">
                                        {study.findings.recommendations.map((rec, idx) => (
                                            <li key={idx}>• {rec}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
