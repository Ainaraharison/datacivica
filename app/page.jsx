import Link from 'next/link';
import { Card } from 'components/card';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
// import { RandomQuote } from 'components/random-quote';
import { getNetlifyContext } from 'utils';

const contextExplainer = `
**Bienvenue sur DataCivica Madagascar** 🇲🇬

Nous sommes heureux de vous accueillir sur cet espace dédié à l'exploration, à l'analyse et au partage de connaissances autour du développement de Madagascar, des données publiques et de la participation citoyenne.

Ce site a pour vocation de rendre l'information accessible, compréhensible et utile, à travers des contenus rigoureux et engagés :

- **Analyses critiques** des politiques de développement
- **Visualisations de données** sur les indicateurs clés de Madagascar  
- **Suivi participatif** des projets publics et communautaires
- **Ressources méthodologiques** pour l'engagement citoyen

Que vous soyez citoyen·ne malgache, chercheur·e, décideur·e, étudiant·e ou acteur de terrain, ce site vous propose des ressources pour mieux comprendre les enjeux de développement du pays, suivre les transformations en cours dans les 22 régions, et contribuer activement aux dynamiques de changement.

🧭 **Notre ambition** : créer un espace vivant de réflexion, de veille et de dialogue, pour faire des données un levier de compréhension et d'action collective au service du développement de Madagascar.

*Tongasoa eto amin'ny sehatra iombonana ho an'ny fivoaran'i Madagasikara!*`;

// const preDynamicContentExplainer = `
// The card content below is fetched by the client-side from \`/quotes/random\` (see file \`app/quotes/random/route.js\`) with a different quote shown on each page load:
// `;

// const postDynamicContentExplainer = `
// On Netlify, Next.js Route Handlers are automatically deployed as [Serverless Functions](https://docs.netlify.com/functions/overview/).
// Alternatively, you can add Serverless Functions to any site regardless of framework, with acccess to the [full context data](https://docs.netlify.com/functions/api/).

// And as always with dynamic content, beware of layout shifts & flicker! (here, we aren't...)
// `;

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            {/* Hero Section with gradient background */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-2xl -z-10"></div>
                <div className="p-8 sm:p-12">
                    <ContextAlert className="mb-6" />
                    <div className="flex flex-col items-center text-center gap-6">
                        <div className="inline-block">
                            <h1 className="mb-4 text-5xl sm:text-6xl lg:text-7xl font-extrabold">
                                DataCivica Madagascar
                            </h1>
                            <div className="h-1.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-full mt-4"></div>
                        </div>
                        <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl">
                            Plateforme de données ouvertes, d&apos;analyses critiques et de suivi participatif 
                            pour le développement durable de Madagascar 🇲🇬
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center mt-4">
                            <Link href="/revalidation" className="btn btn-lg">
                                📊 Indicateurs Clés
                            </Link>
                            <Link href="/edge" className="btn btn-lg">
                                🤝 Suivi Participatif
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main content with card styling */}
            <section className="flex flex-col gap-6">
                <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 rounded-2xl shadow-2xl border border-neutral-700">
                    <Markdown content={contextExplainer} />
                </div>
                
                {/* Feature cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                    <Link href="/classics" className="group">
                        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-xl shadow-lg border border-neutral-700 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 h-full">
                            <div className="text-4xl mb-4">🔍</div>
                            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">Analyses Critiques</h3>
                            <p className="text-neutral-400 text-sm">Évaluations approfondies des politiques et projets</p>
                        </div>
                    </Link>
                    
                    <Link href="/revalidation" className="group">
                        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-xl shadow-lg border border-neutral-700 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 h-full">
                            <div className="text-4xl mb-4">📈</div>
                            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">Indicateurs de Développement</h3>
                            <p className="text-neutral-400 text-sm">Visualisations des données clés pour les 22 régions</p>
                        </div>
                    </Link>
                    
                    <Link href="/image-cdn" className="group">
                        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-xl shadow-lg border border-neutral-700 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 h-full">
                            <div className="text-4xl mb-4">⚙️</div>
                            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">Process Monitoring</h3>
                            <p className="text-neutral-400 text-sm">Surveillance en temps réel des processus</p>
                        </div>
                    </Link>
                    
                    <Link href="/blobs" className="group">
                        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-xl shadow-lg border border-neutral-700 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 h-full">
                            <div className="text-4xl mb-4">📊</div>
                            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">Reporting & Viz</h3>
                            <p className="text-neutral-400 text-sm">Outils de génération de rapports et exports</p>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );
}

// function RuntimeContextCard() {
//     const title = `Netlify Context: running in ${ctx} mode.`;
//     if (ctx === 'dev') {
//         return (
//             <Card title={title}>
//                 <p>Next.js will rebuild any page you navigate to, including static pages.</p>
//             </Card>
//         );
//     } else {
//         return (
//             <Card title={title}>
//                 <p>This page was statically-generated at build time.</p>
//             </Card>
//         );
//     }
// }
