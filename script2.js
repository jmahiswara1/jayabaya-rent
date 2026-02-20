const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (fs.statSync(dirPath).isDirectory()) {
            if (!['node_modules', '.next', '.git'].includes(f)) {
                walkDir(dirPath, callback);
            }
        } else if (/\.(ts|tsx)$/.test(f)) {
            callback(dirPath);
        }
    });
}

let modified = 0;
walkDir('.', (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');
    let orig = content;

    content = content.replace(/"\/catalog"/g, '"/katalog"');
    content = content.replace(/`\/catalog/g, '`/katalog');
    content = content.replace(/'\/catalog'/g, "'/katalog'");

    content = content.replace(/"\/compare"/g, '"/perbandingan"');
    content = content.replace(/`\/compare/g, '`/perbandingan');
    content = content.replace(/'\/compare'/g, "'/perbandingan'");

    content = content.replace(/"\/contact"/g, '"/kontak"');
    content = content.replace(/`\/contact/g, '`/kontak');
    content = content.replace(/'\/contact'/g, "'/kontak'");

    content = content.replace(/"\/area"/g, '"/area-layanan"');
    content = content.replace(/`\/area/g, '`/area-layanan');
    content = content.replace(/'\/area'/g, "'/area-layanan'");

    content = content.replace(/"\/syarat"/g, '"/syarat-ketentuan"');
    content = content.replace(/`\/syarat/g, '`/syarat-ketentuan');
    content = content.replace(/'\/syarat'/g, "'/syarat-ketentuan'");

    if (content !== orig) {
        fs.writeFileSync(filePath, content);
        modified++;
    }
});
console.log('Modified', modified, 'files');
