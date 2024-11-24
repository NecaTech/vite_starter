import { mkdir } from 'fs/promises';
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

async function createDirectories() {
    for (const dir of directories) {
        const fullPath = join(srcPath, dir);
        try {
            await mkdir(fullPath, { recursive: true });
            console.log(`Created directory: ${fullPath}`);
        } catch (error) {
            if (error.code !== 'EEXIST') {
                console.error(`Error creating directory ${fullPath}:`, error);
            }
        }
    }
}

createDirectories().catch(console.error);
