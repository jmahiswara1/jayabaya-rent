const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            if (f !== 'node_modules' && f !== '.next' && f !== '.git' && f !== 'public') {
                walkDir(dirPath, callback);
            }
        } else {
            if (/\.(ts|tsx|js|jsx|json|md|mjs)$/.test(f)) {
                callback(dirPath);
            }
        }
    });
}

let modifiedFiles = 0;

walkDir('.', (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content
        .replace(/Jayabaya Trans/g, 'Jayabaya Trans')
        .replace(/jayabaya trans/g, 'jayabaya trans')
        .replace(/JayabayaTrans/g, 'JayabayaTrans')
        .replace(/jayabayatrans/g, 'jayabayatrans')
        .replace(/jayabaya-trans/g, 'jayabaya-trans');

    if (newContent !== content) {
        fs.writeFileSync(filePath, newContent);
        modifiedFiles++;
    }
});

console.log(`Successfully renamed in ${modifiedFiles} files.`);
