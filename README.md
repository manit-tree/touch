# Touch 

Touch CLI for Windows (use for create blank files).

### Installation

```bash
npm install -g manit-tree/touch
```

### Usage

1. create single file
   
```bash
touch index.html
```

2. create multiple files

```bash
touch index.html style.css app.js
```

### index.js

```js
#!/usr/bin/env node

import fs from 'fs';

if (process.argv.length > 2) {
    let files = process.argv.slice(2);

    for (let file of files) {
        fs.writeFileSync(file, '');
    }
}
```

### package.json

```json
{
  "name": "@8columns/touch",
  "description": "Touch CLI for Windows",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "dev": "node index.js"
  },
  "author": "Mr.Manit Treeprapankit",
  "license": "MIT",
  "bin": {
    "touch":"index.js"
  },
  "dependencies": {
  }
}
```
