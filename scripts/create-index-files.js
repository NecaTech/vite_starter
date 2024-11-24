import { writeFile } from 'fs/promises';
import { join } from 'path';

const srcPath = join(process.cwd(), 'src');

const directories = [
    'components/ui',
    'components/common',
    'components/features',
    'layouts',
    'styles/css',
    'styles/fonts',
    'styles/images',
    'styles/icons',
    'utils',
    'types',
    'services',
    'store',
    'assets/images',
    'assets/fonts',
    'assets/icons',
    'assets/css'
];

const indexContent = `// Export your components/functions here
`;

async function createIndexFiles() {
    for (const dir of directories) {
        const indexPath = join(srcPath, dir, 'index.ts');
        try {
            await writeFile(indexPath, indexContent);
            console.log(`Created index file: ${indexPath}`);
        } catch (error) {
            console.error(`Error creating index file ${indexPath}:`, error);
        }
    }

    // Create root index.ts
    const rootIndexPath = join(srcPath, 'index.ts');
    const rootIndexContent = `// Export all public modules here
`;
    try {
        await writeFile(rootIndexPath, rootIndexContent);
        console.log(`Created root index file: ${rootIndexPath}`);
    } catch (error) {
        console.error(`Error creating root index file:`, error);
    }
}

createIndexFiles().catch(console.error);
