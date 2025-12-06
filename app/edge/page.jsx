import { Markdown } from 'components/markdown';
import { ParticipationStats } from 'components/participation/stats';
import { CitizenFeedbackForm } from 'components/participation/feedback-form';
import { ProjectTracker } from 'components/participation/project-tracker';
import { ParticipationCharts } from 'components/participation/charts';

export const metadata = {
    title: 'Suivi Participatif - Engagement Citoyen'
};

const explainer = `
Le suivi participatif est une approche inclusive qui vise à impliquer activement les citoyen·ne·s, les communautés locales, les organisations de la société civile et d’autres parties prenantes dans le suivi, l’évaluation et la prise de décision autour de projets, politiques publiques ou actions de développement.

Plutôt que de confier exclusivement aux institutions le suivi des données et des indicateurs, cette méthode donne aux acteurs concernés les moyens de co-produire de l’information, d’exprimer leurs priorités, et de contribuer à une gouvernance plus transparente et démocratique.

🔍 Objectifs du suivi participatif :

Renforcer la transparence et la redevabilité des institutions.

Valoriser les savoirs locaux et les expériences vécues.

Améliorer la qualité des données collectées grâce à une observation de terrain.

Encourager l’appropriation collective des résultats et des solutions.

🌱 Pourquoi est-ce important ?
Dans les domaines du développement, de la gestion des ressources naturelles, de l'éducation ou de la santé, le suivi participatif permet de mieux adapter les actions aux besoins réels des populations. Il favorise également une dynamique de co-responsabilité et de confiance mutuelle entre décideurs et communautés
`;

const benefitsText = `
## 🔍 Objectifs du Suivi Participatif

- **Transparence** : Renforcer la redevabilité des institutions
- **Savoirs locaux** : Valoriser les expériences vécues sur le terrain
- **Qualité des données** : Améliorer la collecte par l'observation directe
- **Appropriation** : Encourager l'engagement collectif dans les solutions

## 🌱 Impact et Importance

Le suivi participatif transforme la relation entre citoyens et institutions en créant un espace de dialogue et de collaboration. Cette approche garantit que les projets répondent véritablement aux besoins des communautés et renforce la confiance dans les processus démocratiques.
`;

export default function ParticipationPage() {
    return (
        <div className="flex flex-col gap-8">
            {/* Hero section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-2xl -z-10"></div>
                <div className="p-6 sm:p-8">
                    <h1 className="mb-4">🤝 Suivi Participatif</h1>
                    <div className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full max-w-md mb-6"></div>
                    <Markdown content={explainer} className="text-neutral-300" />
                </div>
            </section>

            {/* Stats section */}
            <section>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                        <span className="text-xl">📊</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white">Statistiques de Participation</h2>
                </div>
                <ParticipationStats />
            </section>

            {/* Charts section */}
            <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-2xl shadow-xl border border-neutral-700">
                <ParticipationCharts />
            </section>

            {/* Project tracker section */}
            <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-2xl shadow-xl border border-neutral-700">
                <ProjectTracker />
            </section>

            {/* Form and guide section */}
            <section className="grid lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-2xl shadow-xl border border-neutral-700">
                    <CitizenFeedbackForm />
                </div>
                <div className="flex flex-col gap-6">
                    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-2xl border border-primary/20">
                        <div className="prose prose-invert max-w-none">
                            <h2 className="text-white mb-4">🔍 Objectifs du Suivi Participatif</h2>
                            <ul className="text-neutral-200 space-y-2">
                                <li><strong>Transparence</strong> : Renforcer la redevabilité des institutions</li>
                                <li><strong>Savoirs locaux</strong> : Valoriser les expériences vécues sur le terrain</li>
                                <li><strong>Qualité des données</strong> : Améliorer la collecte par l&apos;observation directe</li>
                                <li><strong>Appropriation</strong> : Encourager l&apos;engagement collectif dans les solutions</li>
                            </ul>
                            <h3 className="text-primary mt-6 mb-3">🌱 Impact et Importance</h3>
                            <p className="text-neutral-200">
                                Le suivi participatif transforme la relation entre citoyens et institutions en créant un espace de dialogue et de collaboration. 
                                Cette approche garantit que les projets répondent véritablement aux besoins des communautés et renforce la confiance dans les processus démocratiques.
                            </p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-2xl shadow-xl border border-neutral-700">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                                <span className="text-xl">💡</span>
                            </div>
                            <h3 className="text-lg font-bold text-white">Comment Participer ?</h3>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-neutral-300">
                                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-sm font-bold text-neutral-900">1</span>
                                <span>Choisissez un projet qui vous concerne</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-300">
                                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-sm font-bold text-neutral-900">2</span>
                                <span>Soumettez vos observations et suggestions</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-300">
                                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-sm font-bold text-neutral-900">3</span>
                                <span>Suivez les mises à jour et l&apos;avancement</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-300">
                                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-sm font-bold text-neutral-900">4</span>
                                <span>Contribuez aux décisions collectives</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Platform info section */}
            <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 sm:p-8 rounded-2xl shadow-xl border border-neutral-700">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                        <span className="text-xl">🎯</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Plateforme de Suivi Participatif</h3>
                </div>
                <p className="text-neutral-300 mb-6">
                    Cette plateforme permet aux citoyens de suivre activement les projets de développement,
                    de soumettre des signalements, et de contribuer aux prises de décision.
                    Ensemble, construisons une gouvernance plus transparente et inclusive.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-900/30 p-5 rounded-xl border border-blue-700/50 hover:border-blue-500 transition-colors">
                        <h4 className="font-semibold text-blue-300 mb-2 flex items-center gap-2">
                            <span>📍</span> Géolocalisation
                        </h4>
                        <p className="text-sm text-blue-200">Signalements géolocalisés pour une meilleure réactivité</p>
                    </div>
                    <div className="bg-green-900/30 p-5 rounded-xl border border-green-700/50 hover:border-green-500 transition-colors">
                        <h4 className="font-semibold text-green-300 mb-2 flex items-center gap-2">
                            <span>🔔</span> Notifications
                        </h4>
                        <p className="text-sm text-green-200">Alertes en temps réel sur l&apos;évolution des projets</p>
                    </div>
                    <div className="bg-purple-900/30 p-5 rounded-xl border border-purple-700/50 hover:border-purple-500 transition-colors">
                        <h4 className="font-semibold text-purple-300 mb-2 flex items-center gap-2">
                            <span>📈</span> Tableaux de Bord
                        </h4>
                        <p className="text-sm text-purple-200">Visualisation claire des données et indicateurs</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
