import { revalidateTag } from 'next/cache';
// import { Card } from 'components/card';
import { Markdown } from 'components/markdown';
import { SubmitButton } from 'components/submit-button';

export const metadata = {
    title: 'On-Demand Revalidation'
};

const tagName = 'randomWiki';
const randomWikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/random/summary';
const maxExtractLength = 200;
const revalidateTTL = 60;

const explainer = `
Les indicateurs clés de développement sont des outils essentiels permettant de mesurer le niveau de progrès d’un pays, d’une région ou d’une communauté dans des domaines aussi variés que l’éducation, la santé, l’économie, l’environnement ou la gouvernance. Ils offrent une lecture chiffrée et structurée de la réalité sociale et permettent d’évaluer l’efficacité des politiques publiques en lien avec les objectifs de développement durable.

Ces indicateurs ne sont pas de simples statistiques : ils constituent de véritables instruments d’aide à la décision, de planification stratégique, de suivi des engagements, et de mobilisation collective autour des grands enjeux du développement.

`;

export default async function Page() {
    async function revalidateWiki() {
        'use server';
        revalidateTag(tagName);
    }

    return (
        <>
            <h1 className="mb-8">Indicateur clés</h1>
            <Markdown content={explainer} className="mb-6" />
            {/* <form className="mb-8" action={revalidateWiki}>
                <SubmitButton text="Click to Revalidate" />
            </form> */}
            <RandomWikiArticle />
        </>
    );
}

async function RandomWikiArticle() {
    const randomWiki = await fetch(randomWikiUrl, {
        next: { revalidate: revalidateTTL, tags: [tagName] }
    });

    const content = await randomWiki.json();
    let extract = content.extract;
    if (extract.length > maxExtractLength) {
        extract = extract.slice(0, extract.slice(0, maxExtractLength).lastIndexOf(' ')) + ' [...]';
    }

    // return (
    //     // <Card className="max-w-2xl">
    //     //     <h3 className="text-2xl text-neutral-900">{content.title}</h3>
    //     //     <div className="text-lg font-bold">{content.description}</div>
    //     //     <p className="italic">{extract}</p>
    //     //     <a target="_blank" rel="noopener noreferrer" href={content.content_urls.desktop.page}>
    //     //         From Wikipedia
    //     //     </a>
    //     // </Card>
    // );
}
