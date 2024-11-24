# 🚀 Vite Starter Kit

Un kit de démarrage moderne pour le développement web, intégrant les meilleures pratiques et technologies actuelles.

## ✨ Caractéristiques

- ⚡️ **Vite** - Build tool ultra-rapide
- ⚛️ **React 18** - Bibliothèque UI avec les dernières fonctionnalités
- 📘 **TypeScript** - Typage statique pour un code plus robuste
- 🎨 **Tailwind CSS** - Framework CSS utility-first
- 🎭 **Framer Motion** - Animations fluides et interactives
- 💫 **GSAP** - Animations complexes et performantes
- 📱 **Responsive Design** - Interface adaptative
- 🌍 **i18n Ready** - Préparé pour l'internationalisation
- 🔧 **Configuration optimisée** - ESLint, TypeScript, Vite, Tailwind

## 🛠️ Structure du Projet

```
src/
├── components/
│   ├── common/       # Composants partagés (Header, Footer, etc.)
│   ├── features/     # Composants spécifiques aux fonctionnalités
│   └── ui/           # Composants UI réutilisables
├── layouts/          # Layouts de l'application
├── styles/          # Styles globaux et configurations
└── utils/           # Utilitaires et helpers
```

## 📦 Installation et Configuration

### Prérequis

- Node.js 18+ et npm installés sur votre machine
- Git pour le clonage du projet

### Étapes d'installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/NecaTech/vite_starter.git mon-projet
   ```

2. Accédez au répertoire :
   ```bash
   cd mon-projet
   ```

3. Installez les dépendances :
   ```bash
   npm install
   ```

4. Initialisez la structure des dossiers :
   ```bash
   npm run init:src
   npm run init:index
   ```

5. Démarrez le serveur de développement :
   ```bash
   npm run dev
   ```
   L'application sera disponible à l'adresse : `http://localhost:3000`

### Versions des Dépendances

Principales dépendances :
- React v18.3.1
- TypeScript v5.6.2
- Vite v5.4.10
- Tailwind CSS v3.4.15
- GSAP v3.12.5
- Framer Motion v11.11.17

### Scripts npm Disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Crée une version de production
- `npm run preview` - Prévisualise la version de production
- `npm run lint` - Vérifie le code avec ESLint
- `npm run format` - Formate le code avec Prettier
- `npm run type-check` - Vérifie les types TypeScript
- `npm run clean` - Nettoie le dossier de build
- `npm run init:src` - Initialise la structure des dossiers source
- `npm run init:index` - Crée les fichiers index

### Résolution des Problèmes Courants

1. **Erreur de port occupé** :
   - Le port 3000 est déjà utilisé ? Modifiez le port dans `vite.config.ts`
   
2. **Erreurs TypeScript** :
   - Exécutez `npm run type-check` pour voir les erreurs détaillées
   - Vérifiez que toutes les dépendances sont correctement installées

3. **Problèmes de build** :
   - Nettoyez le cache : `npm run clean`
   - Supprimez node_modules : `rm -rf node_modules`
   - Réinstallez les dépendances : `npm install`

4. **Erreurs de linting** :
   - Formatez le code : `npm run format`
   - Corrigez les erreurs ESLint : `npm run lint`

## 🚀 Scripts Disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Crée une version de production
- `npm run preview` - Prévisualise la version de production
- `npm run lint` - Vérifie le code avec ESLint
- `npm run type-check` - Vérifie les types TypeScript

## 🎨 Personnalisation

### Tailwind CSS

Le fichier `tailwind.config.js` permet de personnaliser :
- Thème (couleurs, polices, espacements)
- Variants
- Plugins
- Extensions

### Vite

La configuration de Vite (`vite.config.ts`) inclut :
- Alias de chemins
- Plugins optimisés
- Configuration de build
- Options de serveur de développement

## 🎯 Fonctionnalités Principales

### Tutoriel Interactif
- Guide étape par étape
- Animations fluides
- Exemples de code
- Navigation intuitive
- Mode auto-play

### Composants UI
- Design système cohérent
- Composants réutilisables
- Styles Tailwind
- Types TypeScript
- Documentation intégrée

## 📱 Responsive Design

L'interface s'adapte automatiquement aux différentes tailles d'écran :
- Mobile First
- Points de rupture Tailwind
- Composants adaptatifs
- Navigation responsive

## 🔧 Bonnes Pratiques

- Code TypeScript strict
- Composants fonctionnels React
- Hooks personnalisés
- Gestion d'état optimisée
- Performances optimisées

## 📚 Documentation

La documentation est intégrée au projet via le tutoriel interactif. Pour y accéder :
1. Lancez l'application
2. Suivez le guide interactif
3. Explorez les exemples de code

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche (`git checkout -b feature/amelioration`)
3. Commit vos changements (`git commit -am 'feat: nouvelle fonctionnalité'`)
4. Push (`git push origin feature/amelioration`)
5. Ouvrir une Pull Request

## 📄 Licence

MIT

---

Créé avec ♥️ par [NecaTech](https://github.com/NecaTech)
