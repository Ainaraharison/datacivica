import { Markdown } from 'components/markdown';
import { EducationChart } from 'components/charts/education-chart';
import { EconomicChart } from 'components/charts/economic-chart';
import { HealthChart } from 'components/charts/health-chart';
import { EnvironmentChart } from 'components/charts/environment-chart';

export const metadata = {
    title: 'Indicateurs Clés de Développement'
};

const explainer = `
Les indicateurs clés de développement sont des outils essentiels permettant de mesurer le niveau de progrès d'un pays, d'une région ou d'une communauté dans des domaines aussi variés que l'éducation, la santé, l'économie, l'environnement ou la gouvernance. Ils offrent une lecture chiffrée et structurée de la réalité sociale et permettent d'évaluer l'efficacité des politiques publiques en lien avec les objectifs de développement durable.

Ces indicateurs ne sont pas de simples statistiques : ils constituent de véritables instruments d'aide à la décision, de planification stratégique, de suivi des engagements, et de mobilisation collective autour des grands enjeux du développement.
`;

const summaryText = `
## Vue d'ensemble - Madagascar

Les graphiques ci-dessous présentent l'évolution des principaux indicateurs de développement de Madagascar sur la période 2015-2023. Ces données permettent d'identifier les tendances, de mesurer les progrès réalisés et d'orienter les actions futures.

### Points clés à retenir :

- **Éducation** : Progression du taux de scolarisation (68% → 78%) et d'alphabétisation (72% → 78%)
- **Économie** : PIB passant de 10,7 à 15,3 milliards USD, avec un recul en 2020 (COVID-19)
- **Santé** : Espérance de vie atteignant 67,6 ans, réduction de la mortalité infantile
- **Environnement** : Prédominance hydroélectrique (52%), accès à l'électricité progressant vers 39%
`;

export default function Page() {
    return (
        <div className="flex flex-col gap-8">
            {/* Hero section with gradient */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-2xl -z-10"></div>
                <div className="p-6 sm:p-8">
                    <h1 className="mb-4">📊 Indicateurs Clés de Développement</h1>
                    <div className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full max-w-md mb-6"></div>
                    <Markdown content={explainer} className="text-neutral-300" />
                </div>
            </section>
            
            {/* Charts section with improved styling */}
            <section className="space-y-8">
                <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-2xl shadow-xl border border-neutral-700">
                    <EducationChart />
                </div>
                <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-2xl shadow-xl border border-neutral-700">
                    <EconomicChart />
                </div>
                <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-2xl shadow-xl border border-neutral-700">
                    <HealthChart />
                </div>
                <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-2xl shadow-xl border border-neutral-700">
                    <EnvironmentChart />
                </div>
            </section>

            {/* Summary section */}
            <section className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 sm:p-8 rounded-2xl border border-primary/20">
                <Markdown content={summaryText} className="text-neutral-200" />
            </section>

            {/* Data sources section with modern card */}
            <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 sm:p-8 rounded-2xl shadow-xl border border-neutral-700">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                        <span className="text-xl">ℹ️</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">À propos des données</h3>
                </div>
                <p className="text-neutral-300 mb-4">
                    Les données présentées sont des indicateurs illustratifs destinés à démontrer les capacités 
                    de visualisation du site. Pour des données officielles et actualisées, veuillez consulter :
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                    <div className="bg-neutral-800 p-4 rounded-lg border border-neutral-700 hover:border-primary transition-colors">
                        <div className="text-primary font-bold mb-2">📊 INSTAT Madagascar</div>
                        <p className="text-sm text-neutral-400">Institut National de la Statistique</p>
                    </div>
                    <div className="bg-neutral-800 p-4 rounded-lg border border-neutral-700 hover:border-primary transition-colors">
                        <div className="text-primary font-bold mb-2">🌍 Banque Mondiale</div>
                        <p className="text-sm text-neutral-400">Données Madagascar</p>
                    </div>
                    <div className="bg-neutral-800 p-4 rounded-lg border border-neutral-700 hover:border-primary transition-colors">
                        <div className="text-primary font-bold mb-2">📈 PNUD Madagascar</div>
                        <p className="text-sm text-neutral-400">Rapports de développement humain</p>
                    </div>
                    <div className="bg-neutral-800 p-4 rounded-lg border border-neutral-700 hover:border-primary transition-colors">
                        <div className="text-primary font-bold mb-2">🏛️ Ministères sectoriels</div>
                        <p className="text-sm text-neutral-400">Santé, Éducation, Énergie</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
