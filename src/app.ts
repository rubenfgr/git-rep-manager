import fs from 'fs';

import colors from 'colors';
import { showMainMenu } from './models/main';
import { designBy } from './helpers/designby';

colors.enable();

console.log('Checking if repository database exist...');

console.log(`${__dirname}/../db/.git`);

const repoExist = fs.existsSync(`${__dirname}/../db`);

console.log('Existe repositorio: ' + repoExist);

import('./models/main').then(() => showMainMenu());
