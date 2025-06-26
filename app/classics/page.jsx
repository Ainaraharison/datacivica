import { FeedbackForm } from 'components/feedback-form';
import { Markdown } from 'components/markdown';

export const metadata = {
    title: 'remarques'
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

Cette rubrique s’adresse à toute personne souhaitant approfondir sa compréhension, aiguiser son esprit critique ou enrichir son regard sur des sujets complexes. C’est un espace d’examen lucide, de dialogue intellectuel et de responsabilité intellectuelle face à l’information, à la connaissance et à l’action.
`;

export default async function Page() {
    return (
        <>
            <h1 className="mb-8">Analyse critique</h1>
            <Markdown content={explainer} className="mb-12" />
            <div className="flex justify-center">
                <FeedbackForm />
            </div>
        </>
    );
}
