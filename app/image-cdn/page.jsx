import { Markdown } from 'components/markdown';
import { ProcessStatusMonitor } from 'components/monitoring/process-status';
import { SystemMetricsChart } from 'components/monitoring/system-metrics';
import { PerformanceKPI } from 'components/monitoring/performance-kpi';
import { ActivityLog } from 'components/monitoring/activity-log';

export const metadata = {
    title: 'Process Monitoring - Surveillance en Temps Réel'
};

const explainer = `
La surveillance des processus (ou Process Monitoring) est une approche qui consiste à observer, analyser et suivre en continu le déroulement d’un processus afin d’en garantir le bon fonctionnement. Elle s’applique à divers domaines tels que l’industrie, les services, l’administration, la recherche scientifique ou encore la gestion de projets.

L’objectif principal du process monitoring est de détecter rapidement les écarts, les anomalies ou les ralentissements, afin de prendre des décisions correctives avant que des problèmes majeurs ne surviennent. Il s’agit donc d’un outil essentiel de gestion en temps réel et d’amélioration continue.

Grâce à la collecte régulière de données, à l’utilisation d’indicateurs de performance (KPI), et à la mise en place de tableaux de bord, le process monitoring permet de :

Suivre chaque étape d’un processus de manière dynamique ;

Vérifier que les résultats respectent les objectifs fixés ;

Identifier les points critiques ou les inefficacités ;

Réagir rapidement en cas de dysfonctionnement ou d’écart ;

Optimiser les ressources, les délais et la qualité globale.

Dans un environnement de plus en plus complexe et interconnecté, le process monitoring constitue un levier stratégique pour assurer la maîtrise des opérations, améliorer la transparence des activités, et soutenir la prise de décision fondée sur les données.
`;

const benefitsText = `
## Fonctionnalités du Tableau de Bord

Ce système de monitoring offre plusieurs fonctionnalités clés :

### 📈 Visualisation en Temps Réel
- Graphiques interactifs mis à jour automatiquement
- Suivi des métriques système (CPU, mémoire, I/O disque)
- Évolution temporelle des performances

### ⚡ Gestion des Processus
- État de chaque processus en temps réel
- Barres de progression dynamiques
- Indicateurs de ressources consommées

### 🎯 Indicateurs Clés (KPI)
- Taux de réussite des opérations
- Durée moyenne d'exécution
- Disponibilité du système
- Nombre de processus actifs

### 📋 Journal d'Activité
- Historique complet des événements
- Classification par type (info, succès, avertissement)
- Traçabilité par processus
`;

export default function Page() {
    return (
        <div className="flex flex-col gap-8">
            {/* Hero section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-2xl -z-10"></div>
                <div className="p-6 sm:p-8">
                    <h1 className="mb-4">⚙️ Process Monitoring</h1>
                    <div className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full max-w-md mb-6"></div>
                    <Markdown content={explainer} className="text-neutral-300" />
                </div>
            </section>

            {/* KPI Section with enhanced styling */}
            <section>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                        <span className="text-xl">📈</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white">Indicateurs de Performance</h2>
                </div>
                <PerformanceKPI />
            </section>

            {/* Monitoring grid with cards */}
            <section className="grid lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-2xl shadow-xl border border-neutral-700">
                    <ProcessStatusMonitor />
                </div>
                <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-2xl shadow-xl border border-neutral-700">
                    <SystemMetricsChart />
                </div>
            </section>

            {/* Activity Log section */}
            <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-2xl shadow-xl border border-neutral-700">
                <ActivityLog />
            </section>

            {/* Benefits section */}
            <section className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 sm:p-8 rounded-2xl border border-primary/20">
                <div className="prose prose-invert max-w-none">
                    <h2 className="text-white mb-4">Fonctionnalités du Tableau de Bord</h2>
                    <p className="text-neutral-200 mb-6">Ce système de monitoring offre plusieurs fonctionnalités clés :</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-primary mb-2">📈 Visualisation en Temps Réel</h3>
                            <ul className="text-neutral-300 space-y-1">
                                <li>Graphiques interactifs mis à jour automatiquement</li>
                                <li>Suivi des métriques système (CPU, mémoire, I/O disque)</li>
                                <li>Évolution temporelle des performances</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-primary mb-2">⚡ Gestion des Processus</h3>
                            <ul className="text-neutral-300 space-y-1">
                                <li>État de chaque processus en temps réel</li>
                                <li>Barres de progression dynamiques</li>
                                <li>Indicateurs de ressources consommées</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-primary mb-2">🎯 Indicateurs Clés (KPI)</h3>
                            <ul className="text-neutral-300 space-y-1">
                                <li>Taux de réussite des opérations</li>
                                <li>Durée moyenne d'exécution</li>
                                <li>Disponibilité du système</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-primary mb-2">📋 Journal d'Activité</h3>
                            <ul className="text-neutral-300 space-y-1">
                                <li>Historique complet des événements</li>
                                <li>Classification par type</li>
                                <li>Traçabilité par processus</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Info section with modern cards */}
            <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 sm:p-8 rounded-2xl shadow-xl border border-neutral-700">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                        <span className="text-xl">💡</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">À propos de ce tableau de bord</h3>
                </div>
                <p className="text-neutral-300 mb-6">
                    Ce tableau de bord de monitoring présente une simulation en temps réel de la surveillance des processus.
                    Les données affichées sont générées dynamiquement pour démontrer les capacités de visualisation et de suivi.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-900/30 p-5 rounded-xl border border-blue-700/50 hover:border-blue-500 transition-colors">
                        <h4 className="font-semibold text-blue-300 mb-2 flex items-center gap-2">
                            <span>📊</span> Métriques Temps Réel
                        </h4>
                        <p className="text-sm text-blue-200">Suivi continu des ressources système et de la performance</p>
                    </div>
                    <div className="bg-green-900/30 p-5 rounded-xl border border-green-700/50 hover:border-green-500 transition-colors">
                        <h4 className="font-semibold text-green-300 mb-2 flex items-center gap-2">
                            <span>🎯</span> KPI Dynamiques
                        </h4>
                        <p className="text-sm text-green-200">Indicateurs clés mis à jour automatiquement</p>
                    </div>
                    <div className="bg-purple-900/30 p-5 rounded-xl border border-purple-700/50 hover:border-purple-500 transition-colors">
                        <h4 className="font-semibold text-purple-300 mb-2 flex items-center gap-2">
                            <span>📝</span> Journal d'Activité
                        </h4>
                        <p className="text-sm text-purple-200">Traçabilité complète des opérations</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
