import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

function getPageFiles() {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const entyPoint = 'src/pages';
    const files = fs.readdirSync(path.join(__dirname, entyPoint), { recursive: true });
    
    const inputFiles = {};
            
    files.forEach(file => {
        if (file.endsWith('.js')) {
            inputFiles[file.replace('.js', '')] = path.join(entyPoint, file)
        }
    })
    
    return inputFiles;
}

getPageFiles();