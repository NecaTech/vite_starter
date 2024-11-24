import { mkdir } from 'fs/promises';
import { join } from 'path';

const dirs = [
  'dist/assets/js/maps',
  'dist/assets/css',
  'dist/assets/images',
  'dist/assets/fonts',
  'dist/assets/favicon',
  'dist/assets/icons'
];

async function createDirs() {
  for (const dir of dirs) {
    try {
      await mkdir(dir, { recursive: true });
      console.log(`Created directory: ${dir}`);
    } catch (error) {
      if (error.code !== 'EEXIST') {
        console.error(`Error creating directory ${dir}:`, error);
      }
    }
  }
}

createDirs();
