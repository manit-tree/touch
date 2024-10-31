#!/usr/bin/env node

import fs from 'fs';

if (process.argv.length > 2) {
    let files = process.argv.slice(2);

    for (let file of files) {
        fs.writeFileSync(file, '');
    }
}
