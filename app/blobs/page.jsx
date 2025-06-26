// import { ShapeEditor } from './editor';
import { ContextAlert } from '../../components/context-alert';
import { Markdown } from '../../components/markdown';
import { getNetlifyContext, uploadDisabled } from '../../utils';

export const metadata = {
    title: 'Blobs'
};

const explainer = `
📊 Reporting & Visualisation des Données
Le reporting et la visualisation des données désignent l’ensemble des méthodes et outils permettant de transformer des données brutes en informations claires, compréhensibles et exploitables.

Concrètement, il s’agit de collecter, analyser et présenter des données sous forme de tableaux de bord, graphiques interactifs, cartes ou rapports automatisés afin de faciliter la prise de décision.

🔍 Le reporting consiste à structurer et synthétiser les informations clés dans des rapports périodiques ou personnalisés. Il permet de suivre l’évolution d’indicateurs, de mesurer les performances et d’identifier rapidement les écarts ou tendances.

📈 La visualisation des données, quant à elle, met l’accent sur la représentation graphique de ces informations : elle aide à rendre visibles des phénomènes complexes, à détecter des patterns et à communiquer efficacement les résultats à différents types d’utilisateurs, même sans expertise technique;
`;

// const uploadDisabledText = `
// User uploads are disabled in this site. To run your own and try it out: 
// <a href="https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/next-platform-starter">
// <img src="https://www.netlify.com/img/deploy/button.svg" style="display: inline;" alt="Deploy to Netlify" />
// </a>
// `;

export default function Page() {
    return (
        <>
            {/* <ContextAlert
                addedChecksFunction={() => {
                    return uploadDisabled ? uploadDisabledText : null;
                }}
                className="mb-6"
            /> */}
            <h1 className="mb-8">Reporting & VIsualisation des Données</h1>
            {!!getNetlifyContext() && (
                <>
                    <Markdown content={explainer} className="mb-12" />
                    {/* <ShapeEditor /> */}
                </>
            )}
        </>
    );
}