import { writeFile } from 'fs/promises';
import { join } from 'path';

const srcPath = join(process.cwd(), 'src');

const directories = [
    {
        path: 'components/ui',
        description: `/**
 * UI Components
 * 
 * Ce dossier contient les composants UI réutilisables de base comme :
 * - Buttons
 * - Inputs
 * - Cards
 * - Modals
 * - etc.
 * 
 * Ces composants doivent être :
 * - Génériques et réutilisables
 * - Indépendants du state global
 * - Stylisés via Tailwind
 */`
    },
    {
        path: 'components/common',
        description: `/**
 * Common Components
 * 
 * Composants partagés entre plusieurs features comme :
 * - Header
 * - Footer
 * - Navigation
 * - Sidebar
 * - etc.
 * 
 * Ces composants peuvent :
 * - Utiliser les composants UI
 * - Avoir un état local
 * - Être spécifiques à l'application
 */`
    },
    {
        path: 'components/features',
        description: `/**
 * Feature Components
 * 
 * Composants spécifiques aux fonctionnalités comme :
 * - UserDashboard
 * - ProductList
 * - ShoppingCart
 * - etc.
 * 
 * Ces composants peuvent :
 * - Utiliser les composants UI et common
 * - Interagir avec le state global
 * - Implémenter la logique métier
 */`
    },
    {
        path: 'layouts',
        description: `/**
 * Layouts
 * 
 * Structures de mise en page comme :
 * - MainLayout
 * - DashboardLayout
 * - AuthLayout
 * - etc.
 * 
 * Les layouts définissent :
 * - La structure générale des pages
 * - Le placement des composants communs
 * - Les grilles et conteneurs principaux
 */`
    },
    {
        path: 'styles/css',
        description: `/**
 * CSS Styles
 * 
 * Styles CSS globaux et utilitaires :
 * - Variables CSS
 * - Classes utilitaires
 * - Styles de base
 * - Thèmes
 * 
 * Utilise :
 * - Tailwind CSS
 * - PostCSS
 */`
    },
    {
        path: 'styles/fonts',
        description: `/**
 * Fonts
 * 
 * Déclarations et configurations des polices :
 * - Imports de polices
 * - Font faces
 * - Variables de polices
 */`
    },
    {
        path: 'styles/images',
        description: `/**
 * Style Images
 * 
 * Images liées aux styles :
 * - Backgrounds
 * - Patterns
 * - Textures
 * - etc.
 */`
    },
    {
        path: 'styles/icons',
        description: `/**
 * Style Icons
 * 
 * Icônes et symboles :
 * - UI icons
 * - Logo variations
 * - Social icons
 * - etc.
 */`
    },
    {
        path: 'utils',
        description: `/**
 * Utilities
 * 
 * Fonctions et helpers utilitaires :
 * - Formatters
 * - Validators
 * - Helpers
 * - Types guards
 * - etc.
 * 
 * Ces utilitaires doivent être :
 * - Purs (sans effets de bord)
 * - Bien typés
 * - Testables
 */`
    },
    {
        path: 'types',
        description: `/**
 * Types
 * 
 * Types TypeScript globaux :
 * - Interfaces
 * - Types
 * - Enums
 * - etc.
 * 
 * Organisation :
 * - Par domaine
 * - Par feature
 * - Types partagés
 */`
    },
    {
        path: 'services',
        description: `/**
 * Services
 * 
 * Services et intégrations :
 * - API calls
 * - WebSocket
 * - Local Storage
 * - etc.
 * 
 * Principes :
 * - Interface claire
 * - Gestion des erreurs
 * - Typage strict
 */`
    },
    {
        path: 'store',
        description: `/**
 * Store
 * 
 * Gestion de l'état global :
 * - State management
 * - Actions
 * - Reducers
 * - Selectors
 * 
 * Organisation :
 * - Par feature
 * - État partagé
 * - Actions/Mutations
 */`
    },
    {
        path: 'assets/images',
        description: `/**
 * Images Assets
 * 
 * Images du projet :
 * - Photos
 * - Illustrations
 * - Graphics
 * - etc.
 * 
 * Organisation :
 * - Par feature
 * - Par type
 * - Optimisées pour le web
 */`
    },
    {
        path: 'assets/fonts',
        description: `/**
 * Font Assets
 * 
 * Fichiers de polices :
 * - .woff2
 * - .woff
 * - .ttf
 * - etc.
 * 
 * Organisation :
 * - Par famille
 * - Par poids
 */`
    },
    {
        path: 'assets/icons',
        description: `/**
 * Icon Assets
 * 
 * Fichiers d'icônes :
 * - SVG
 * - Sprite sheets
 * - etc.
 * 
 * Organisation :
 * - Par catégorie
 * - Par taille
 * - Optimisés
 */`
    },
    {
        path: 'assets/css',
        description: `/**
 * CSS Assets
 * 
 * Ressources CSS externes :
 * - Vendor CSS
 * - Third-party styles
 * - CSS modules
 * 
 * Note : Préférer Tailwind
 * quand possible
 */`
    }
];

async function createIndexFiles() {
    for (const dir of directories) {
        const indexPath = join(srcPath, dir.path, 'index.ts');
        try {
            await writeFile(indexPath, `${dir.description}\n\n// Export your components/functions here\n`);
            console.log(`Created index file: ${indexPath}`);
        } catch (error) {
            console.error(`Error creating index file ${indexPath}:`, error);
        }
    }

    // Create root index.ts
    const rootIndexPath = join(srcPath, 'index.ts');
    const rootIndexContent = `/**
 * Root Exports
 * 
 * Point d'entrée principal pour les exports publics.
 * Exporter ici uniquement ce qui doit être accessible
 * depuis l'extérieur du projet.
 * 
 * Organisation :
 * - Exports nommés par catégorie
 * - Ré-exports sélectifs des modules
 * - Types publics
 */

// Export all public modules here
`;
    try {
        await writeFile(rootIndexPath, rootIndexContent);
        console.log(`Created root index file: ${rootIndexPath}`);
    } catch (error) {
        console.error(`Error creating root index file:`, error);
    }
}

createIndexFiles().catch(console.error);
