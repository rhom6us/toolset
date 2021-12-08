import { RigConfig } from '@rushstack/rig-package';
import fs from 'fs';
import gentlyCopy from 'gently-copy';
import path from 'path';

const rigConfig = RigConfig.loadForProjectFolder({
    projectFolderPath: process.env.INIT_CWD
});

if (rigConfig.rigFound) {

    // e.g. "/path/to/project3/node_modules/@rhom6us/heft-webpack-rig/profile/library"
    const profileDir = rigConfig.getResolvedProfileFolder();

    // e.g. "/path/to/project3/node_modules/@rhom6us/heft-webpack-rig/profile/library/output"

    const outputSrc = path.join(profileDir, 'output');
    const outputItems = fs.readdirSync(outputSrc).map(dir => path.join(outputSrc, dir));
    console.log({ outputItems, target: process.env.INIT_CWD });

    gentlyCopy(['.npmignore', ...outputItems], process.env.INIT_CWD, { overwrite: false });

}