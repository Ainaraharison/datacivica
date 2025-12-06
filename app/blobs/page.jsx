import { Markdown } from '../../components/markdown';
import { InteractiveDashboard } from '../../components/reporting/dashboard';
import { ReportGenerator } from '../../components/reporting/report-generator';
import { DataExportTools } from '../../components/reporting/export-tools';

export const metadata = {
    title: 'Reporting & Visualisation des Données'
};

const explainer = `
📊 Reporting & Visualisation des Données
Le reporting et la visualisation des données désignent l’ensemble des méthodes et outils permettant de transformer des données brutes en informations claires, compréhensibles et exploitables.

Concrètement, il s’agit de collecter, analyser et présenter des données sous forme de tableaux de bord, graphiques interactifs, cartes ou rapports automatisés afin de faciliter la prise de décision.

🔍 Le reporting consiste à structurer et synthétiser les informations clés dans des rapports périodiques ou personnalisés. Il permet de suivre l’évolution d’indicateurs, de mesurer les performances et d’identifier rapidement les écarts ou tendances.

📈 La visualisation des données, quant à elle, met l'accent sur la représentation graphique de ces informations : elle aide à rendre visibles des phénomènes complexes, à détecter des patterns et à communiquer efficacement les résultats à différents types d'utilisateurs, même sans expertise technique;
`;

const detailsText = `
## 🔍 Le Reporting

Le reporting consiste à structurer et synthétiser les informations clés dans des rapports périodiques ou personnalisés. Il permet de :
- Suivre l'évolution d'indicateurs de développement
- Mesurer les performances sectorielles
- Identifier rapidement les écarts ou tendances
- Faciliter la prise de décision basée sur les données

## 📈 La Visualisation des Données

La visualisation met l'accent sur la représentation graphique des informations. Elle permet de :
- Rendre visibles des phénomènes complexes
- Détecter des patterns et corrélations
- Communiquer efficacement les résultats
- Rendre les données accessibles à tous les publics

## 🎯 Applications à Madagascar

Ces outils sont essentiels pour :
- Le suivi des Objectifs de Développement Durable (ODD)
- L'évaluation des politiques publiques
- La transparence des budgets et dépenses
- L'engagement citoyen dans la gouvernance
`;

// const uploadDisabledText = `
// User uploads are disabled in this site. To run your own and try it out: 
// <a href="https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/next-platform-starter">
// <img src="https://www.netlify.com/img/deploy/button.svg" style="display: inline;" alt="Deploy to Netlify" />
// </a>
// `;

export default function Page() {
    return (
        <div className="flex flex-col gap-8">
            {/* Hero section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-2xl -z-10"></div>
                <div className="p-6 sm:p-8">
                    <h1 className="mb-4">📊 Reporting & Visualisation des Données</h1>
                    <div className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full max-w-md mb-6"></div>
                    <Markdown content={explainer} className="text-neutral-300" />
                </div>
            </section>

            {/* Dashboard section */}
            <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-2xl shadow-xl border border-neutral-700">
                <InteractiveDashboard />
            </section>

            {/* Report generator section */}
            <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-2xl shadow-xl border border-neutral-700">
                <ReportGenerator />
            </section>

            {/* Export tools section */}
            <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-2xl shadow-xl border border-neutral-700">
                <DataExportTools />
            </section>

            {/* Details section */}
            <section className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 sm:p-8 rounded-2xl border border-primary/20">
                <div className="prose prose-invert max-w-none">
                    <h2 className="text-white mb-4">🔍 Le Reporting</h2>
                    <p className="text-neutral-200 mb-4">Le reporting consiste à structurer et synthétiser les informations clés dans des rapports périodiques ou personnalisés. Il permet de&nbsp;:</p>
                    <ul className="text-neutral-200 space-y-1 mb-6">
                        <li>Suivre l&apos;évolution d&apos;indicateurs de développement</li>
                        <li>Mesurer les performances sectorielles</li>
                        <li>Identifier rapidement les écarts ou tendances</li>
                        <li>Faciliter la prise de décision basée sur les données</li>
                    </ul>
                    
                    <h2 className="text-white mb-4">📈 La Visualisation des Données</h2>
                    <p className="text-neutral-200 mb-4">La visualisation met l&apos;accent sur la représentation graphique des informations. Elle permet de&nbsp;:</p>
                    <ul className="text-neutral-200 space-y-1 mb-6">
                        <li>Rendre visibles des phénomènes complexes</li>
                        <li>Détecter des patterns et corrélations</li>
                        <li>Communiquer efficacement les résultats</li>
                        <li>Rendre les données accessibles à tous les publics</li>
                    </ul>
                    
                    <h2 className="text-white mb-4">🎯 Applications à Madagascar</h2>
                    <p className="text-neutral-200 mb-2">Ces outils sont essentiels pour :</p>
                    <ul className="text-neutral-200 space-y-1">
                        <li>Le suivi des Objectifs de Développement Durable (ODD)</li>
                        <li>L&apos;évaluation des politiques publiques</li>
                        <li>La transparence des budgets et dépenses</li>
                        <li>L&apos;engagement citoyen dans la gouvernance</li>
                    </ul>
                </div>
            </section>

            {/* Platform info section */}
            <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 sm:p-8 rounded-2xl shadow-xl border border-neutral-700">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                        <span className="text-xl">🎯</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Plateforme de Reporting</h3>
                </div>
                <p className="text-neutral-300 mb-6">
                    Cette plateforme de reporting offre des outils complets pour analyser, visualiser et partager les données 
                    de développement de Madagascar. Générez des rapports personnalisés, exportez vos données dans différents formats 
                    et créez des visualisations percutantes.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-900/30 p-5 rounded-xl border border-blue-700/50 hover:border-blue-500 transition-colors">
                        <h4 className="font-semibold text-blue-300 mb-2 flex items-center gap-2">
                            <span>📊</span> Tableaux de Bord
                        </h4>
                        <p className="text-sm text-blue-200">Visualisations interactives et mises à jour en temps réel</p>
                    </div>
                    <div className="bg-green-900/30 p-5 rounded-xl border border-green-700/50 hover:border-green-500 transition-colors">
                        <h4 className="font-semibold text-green-300 mb-2 flex items-center gap-2">
                            <span>📄</span> Rapports Automatisés
                        </h4>
                        <p className="text-sm text-green-200">Génération périodique automatique des rapports</p>
                    </div>
                    <div className="bg-purple-900/30 p-5 rounded-xl border border-purple-700/50 hover:border-purple-500 transition-colors">
                        <h4 className="font-semibold text-purple-300 mb-2 flex items-center gap-2">
                            <span>📥</span> Export Multi-formats
                        </h4>
                        <p className="text-sm text-purple-200">PDF, Excel, CSV, JSON pour tous vos besoins</p>
                    </div>
                </div>
            </section>
        </div>
    );
}