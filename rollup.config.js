import babel from "@rollup/plugin-babel";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function getFiles(entryPoint) {
    const files = fs.readdirSync(path.join(__dirname, entryPoint), { recursive: true });
    
    const inputFiles = {};
            
    files.forEach(file => {
        if (file.endsWith('.jsx')) {
            inputFiles[file.replace('.jsx', '')] = path.join(entryPoint, file)
        }
    })
    
    return inputFiles;
}


export default {
    input: getFiles('src/pages'),
    output: {
        dir: "dist-build/components",
        format: "esm",
        preserveModules: true,
        preserveModulesRoot: 'src/pages'
    },
    plugins: [
        babel({
            presets: ['@babel/preset-react'],
            babelHelpers: "bundled",
            extensions: ['.jsx'],
            exclude: 'node_modules/**'
        }),
    ],
    external: ['react', 'react-dom']
}