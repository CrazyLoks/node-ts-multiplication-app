import fs from 'fs';
import { yarg } from './config/plugins/yargs.plugin';

const { b:base, s:showTable, l:limit } = yarg;
let outputMessage = '';
const headerMessage = `
=================================
        Tabla del ${ base }
=================================\n
`;

for( let i = 1; i <= limit; i++ ) {
    outputMessage += `${ base } x ${ i } = ${ base * i }\n`;
}

if ( showTable ) console.log(outputMessage);
outputMessage = headerMessage + outputMessage;

const outputPath = `outputs`;

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${ outputPath }/tabla-${ base }.txt`, outputMessage);
console.log('File created!');
