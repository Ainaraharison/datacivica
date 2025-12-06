import { Markdown } from 'components/markdown';
import { AnalysisList } from 'components/analysis/analysis-list';
import { MethodologyCard } from 'components/analysis/methodology';
import { CaseStudySelector } from 'components/analysis/case-studies';
import { FeedbackForm } from 'components/feedback-form';

export const metadata = {
    title: 'Analyse Critique - Politiques & Projets'
};

const explainer = `
Analyse Critique propose une exploration approfondie de différents objets d’étude tels que des textes, projets, politiques publiques, productions scientifiques ou données de terrain. Chaque analyse est conçue pour dépasser la simple observation en adoptant une démarche rigoureuse, structurée et réflexive.

Ici, vous trouverez des contenus qui ne se limitent pas à décrire, mais qui interrogent, évaluent, et interprètent. L’objectif est de faire apparaître les forces, les limites, les présupposés et les implications des éléments analysés, tout en formulant des propositions argumentées.

Chaque analyse contient :

une présentation claire de l’objet étudié et de son contexte ;

un résumé neutre de ses idées principales ou de sa structure ;

une analyse critique des arguments, du raisonnement, du style et des choix méthodologiques ;

une évaluation des apports et des faiblesses, appuyée sur des critères explicites ;

une prise de position raisonnée sur les enjeux soulevés ;

des pistes de réflexion ou d’amélioration pour aller plus loin.

Cette rubrique s'adresse à toute personne souhaitant approfondir sa compréhension, aiguiser son esprit critique ou enrichir son regard sur des sujets complexes. C'est un espace d'examen lucide, de dialogue intellectuel et de responsabilité intellectuelle face à l'information, à la connaissance et à l'action.
`;

const detailsText = `
## 📝 Structure de nos Analyses

Chaque analyse critique contient :

- **Contextualisation** : Présentation claire de l'objet étudié et de son contexte malgache
- **Synthèse** : Résumé neutre des objectifs, de la structure et des acteurs impliqués
- **Analyse** : Évaluation critique des arguments, méthodes et choix stratégiques
- **Évaluation** : Apports et faiblesses appuyés sur des critères explicites
- **Recommandations** : Propositions argumentées pour l'amélioration
- **Perspectives** : Pistes de réflexion pour aller plus loin

## 🎯 Objectifs

Cette rubrique s'adresse à toute personne souhaitant approfondir sa compréhension des enjeux de développement de Madagascar, aiguiser son esprit critique ou enrichir son regard sur les politiques publiques. C'est un espace d'examen lucide, de dialogue intellectuel et de responsabilité collective face aux défis du développement national.
`;

export default async function Page() {
    return (
        <div className="flex flex-col gap-8">
            {/* Hero section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-2xl -z-10"></div>
                <div className="p-6 sm:p-8">
                    <h1 className="mb-4">🔍 Analyse Critique</h1>
                    <div className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full max-w-md mb-6"></div>
                    <Markdown content={explainer} className="text-neutral-300" />
                </div>
            </section>

            {/* Analysis list section */}
            <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-2xl shadow-xl border border-neutral-700">
                <AnalysisList />
            </section>

            {/* Methodology section */}
            <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-2xl shadow-xl border border-neutral-700">
                <MethodologyCard />
            </section>

            {/* Case studies section */}
            <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-2xl shadow-xl border border-neutral-700">
                <CaseStudySelector />
            </section>

            {/* Details section */}
            <section className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 sm:p-8 rounded-2xl border border-primary/20">
                <Markdown content={detailsText} className="text-neutral-200" />
            </section>

            {/* Contribution section */}
            <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 sm:p-8 rounded-2xl shadow-xl border border-neutral-700">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                        <span className="text-xl">💬</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Contribuez à nos Analyses</h3>
                </div>
                <p className="text-neutral-300 mb-6">
                    Vous avez des suggestions d'analyses, des remarques sur nos contenus, ou souhaitez partager 
                    votre expertise sur un sujet spécifique ? N'hésitez pas à nous faire part de vos commentaires.
                </p>
                <div className="max-w-2xl mx-auto">
                    <FeedbackForm />
                </div>
            </section>

            {/* Resources section */}
            <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 sm:p-8 rounded-2xl shadow-xl border border-neutral-700">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                        <span className="text-xl">📚</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Ressources Complémentaires</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 p-5 rounded-xl border border-blue-700/50 hover:border-blue-500 transition-colors">
                        <h4 className="font-semibold text-blue-300 mb-2 flex items-center gap-2">
                            <span>📄</span> Rapports
                        </h4>
                        <p className="text-sm text-blue-200">Rapports d'évaluation et audits sectoriels</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 p-5 rounded-xl border border-green-700/50 hover:border-green-500 transition-colors">
                        <h4 className="font-semibold text-green-300 mb-2 flex items-center gap-2">
                            <span>📊</span> Données
                        </h4>
                        <p className="text-sm text-green-200">Statistiques et bases de données publiques</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 p-5 rounded-xl border border-purple-700/50 hover:border-purple-500 transition-colors">
                        <h4 className="font-semibold text-purple-300 mb-2 flex items-center gap-2">
                            <span>📝</span> Publications
                        </h4>
                        <p className="text-sm text-purple-200">Études académiques et recherches appliquées</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
