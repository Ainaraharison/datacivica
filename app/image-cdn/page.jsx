import Image from 'next/image';
import { ImageWithSizeOverlay } from './image-with-size-overlay';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
import { getNetlifyContext } from 'utils';

export const metadata = {
    title: '⚙️ Process Monitoring'
};

const sampleImage = '/images/corgi.jpg';

const ctx = getNetlifyContext();
const forceWebP = ctx === 'dev';
const sampleImageSrcSet = [640, 1280, 2048]
    .map((size) => {
        return `/.netlify/images?url=${sampleImage}&w=${size}${forceWebP ? '&fm=webp' : ''} ${size}w`;
    })
    .join(', ');

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

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                <ContextAlert
                    // addedChecksFunction={(ctx) => {
                    //     return ctx === 'dev' ? devModeWarning : null;
                    // }}
                    className="mb-6"
                />
                <h1>⚙️ Process Monitoring</h1>
            </section>
            <section>
                {/* <h2 className="mb-6">Using next/image component</h2> */}
                <Markdown content={explainer} className="mb-8" />
            </section>
            <section>
                {/* <h2 className="mb-6">Original vs. optimized image: can you tell the difference?</h2> */}
                {/* <Markdown content={originalVsCdnSnippet} className="mb-8" /> */}           
            </section>
        </div>
    );
}
