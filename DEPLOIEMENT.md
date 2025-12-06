# 🚀 Guide de Déploiement - DataCivica Madagascar

## Option 1 : Déploiement via Netlify (Recommandé et Gratuit)

### Prérequis
- Compte GitHub (gratuit)
- Compte Netlify (gratuit)

### Étape 1 : Préparer et pousser votre code sur GitHub

```powershell
# 1. Ajouter tous les fichiers modifiés
git add .

# 2. Créer un commit avec vos changements
git commit -m "Design amélioré et prêt pour déploiement"

# 3. Pousser vers GitHub
git push origin main
```

Si vous n'avez pas encore de dépôt distant GitHub :

```powershell
# 1. Créer un nouveau dépôt sur GitHub.com (via l'interface web)
#    Nom suggéré : datacivica-madagascar

# 2. Ajouter le dépôt distant
git remote add origin https://github.com/VOTRE-USERNAME/datacivica-madagascar.git

# 3. Pousser votre code
git branch -M main
git push -u origin main
```

### Étape 2 : Déployer sur Netlify

#### Méthode A : Via l'interface Netlify (Plus Simple)

1. **Créer un compte Netlify**
   - Allez sur https://app.netlify.com/signup
   - Inscrivez-vous avec votre compte GitHub

2. **Importer votre projet**
   - Cliquez sur "Add new site" → "Import an existing project"
   - Sélectionnez "GitHub"
   - Autorisez Netlify à accéder à vos dépôts
   - Choisissez votre dépôt `datacivica-madagascar`

3. **Configurer le déploiement**
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Base directory:** (laisser vide)
   
   Netlify détecte automatiquement Next.js et configure ces paramètres.

4. **Variables d'environnement (optionnel)**
   - Dans "Site settings" → "Environment variables"
   - Ajouter si nécessaire :
     ```
     NODE_VERSION=18
     ```

5. **Déployer**
   - Cliquez sur "Deploy site"
   - Attendez 2-3 minutes que le build se termine
   - Votre site sera disponible sur une URL type : `https://random-name-123.netlify.app`

6. **Personnaliser le domaine**
   - Dans "Site settings" → "Domain management"
   - Cliquez sur "Options" → "Edit site name"
   - Changez en : `datacivica-madagascar` (ou autre nom disponible)
   - Votre site sera sur : `https://datacivica-madagascar.netlify.app`

#### Méthode B : Via Netlify CLI

```powershell
# 1. Installer Netlify CLI globalement
npm install -g netlify-cli

# 2. Se connecter à Netlify
netlify login

# 3. Initialiser le projet Netlify
netlify init

# 4. Déployer
netlify deploy --prod
```

### Étape 3 : Déploiement automatique (CI/CD)

Une fois configuré sur Netlify, chaque push vers GitHub déclenchera automatiquement :
- ✅ Build automatique
- ✅ Tests de qualité
- ✅ Déploiement instantané
- ✅ Preview pour les pull requests

## Option 2 : Vercel (Alternative Gratuite)

Vercel est créé par l'équipe Next.js et offre d'excellentes performances.

### Déploiement sur Vercel

1. **Créer un compte**
   - Allez sur https://vercel.com/signup
   - Inscrivez-vous avec GitHub

2. **Importer le projet**
   - Cliquez sur "Add New..." → "Project"
   - Sélectionnez votre dépôt GitHub
   - Vercel détecte automatiquement Next.js

3. **Configuration**
   - Framework Preset : `Next.js`
   - Build Command : `npm run build` (automatique)
   - Output Directory : `.next` (automatique)

4. **Déployer**
   - Cliquez sur "Deploy"
   - Votre site sera sur : `https://datacivica-madagascar.vercel.app`

## Option 3 : GitHub Pages (Gratuit mais limité)

⚠️ **Note** : GitHub Pages ne supporte pas les fonctionnalités serveur de Next.js. 
Vous devrez exporter en mode statique uniquement.

## Comparaison des Options Gratuites

| Fonctionnalité | Netlify | Vercel | GitHub Pages |
|----------------|---------|--------|--------------|
| **Bande passante/mois** | 100 GB | 100 GB | Illimité |
| **Build minutes/mois** | 300 min | Illimité | Illimité |
| **Domaine personnalisé** | ✅ Oui | ✅ Oui | ✅ Oui |
| **SSL/HTTPS** | ✅ Auto | ✅ Auto | ✅ Auto |
| **Déploiement automatique** | ✅ Oui | ✅ Oui | ✅ Oui |
| **Edge Functions** | ✅ Oui | ✅ Oui | ❌ Non |
| **Server-side rendering** | ✅ Oui | ✅ Oui | ❌ Non |
| **Performance** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Recommandation** | **Excellent** | **Excellent** | Limité |

## 🎯 Recommandation

**Pour DataCivica, je recommande Netlify** car :
- ✅ Votre projet est déjà configuré avec `netlify.toml`
- ✅ Support complet de Next.js 15
- ✅ Edge Functions configurées
- ✅ Interface simple et intuitive
- ✅ Déploiement en 5 minutes

## Vérifications Avant Déploiement

Assurez-vous que tout fonctionne localement :

```powershell
# 1. Tester le build de production
npm run build

# 2. Tester le site en production localement
npm start

# 3. Vérifier qu'il n'y a pas d'erreurs
npm run lint
```

## Support et Documentation

- **Netlify Docs** : https://docs.netlify.com/frameworks/next-js/overview/
- **Vercel Docs** : https://vercel.com/docs/frameworks/nextjs
- **Next.js Deployment** : https://nextjs.org/docs/deployment

## Domaine Personnalisé (Optionnel)

Après le déploiement, vous pouvez acheter un domaine (ex: datacivica.mg) :

1. Acheter un nom de domaine (~10-15 USD/an)
2. Dans Netlify/Vercel : "Domain settings" → "Add custom domain"
3. Configurer les DNS selon les instructions
4. SSL automatique en quelques minutes

---

**Besoin d'aide ?** Suivez les étapes ci-dessus et votre site sera en ligne en moins de 10 minutes ! 🚀
