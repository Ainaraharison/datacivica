import { Markdown } from 'components/markdown';

const explainer = `
Le suivi participatif est une approche inclusive qui vise à impliquer activement les citoyen·ne·s, les communautés locales, les organisations de la société civile et d’autres parties prenantes dans le suivi, l’évaluation et la prise de décision autour de projets, politiques publiques ou actions de développement.

Plutôt que de confier exclusivement aux institutions le suivi des données et des indicateurs, cette méthode donne aux acteurs concernés les moyens de co-produire de l’information, d’exprimer leurs priorités, et de contribuer à une gouvernance plus transparente et démocratique.

🔍 Objectifs du suivi participatif :

Renforcer la transparence et la redevabilité des institutions.

Valoriser les savoirs locaux et les expériences vécues.

Améliorer la qualité des données collectées grâce à une observation de terrain.

Encourager l’appropriation collective des résultats et des solutions.

🌱 Pourquoi est-ce important ?
Dans les domaines du développement, de la gestion des ressources naturelles, de l’éducation ou de la santé, le suivi participatif permet de mieux adapter les actions aux besoins réels des populations. Il favorise également une dynamique de co-responsabilité et de confiance mutuelle entre décideurs et communautés
`;

export default function EdgeFunctionExplainer() {
    return <Markdown content={explainer} />;
}
