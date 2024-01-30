import { createWriteStream } from 'fs';
import { stdin } from 'node:process';

import { getPath } from '../utils/getPath.js';

const write = async () => {
	// Write your code here
	const pathToFile = getPath(import.meta, ['files', 'fileToWrite.txt']);
	const writeStream = createWriteStream(pathToFile);

	stdin.on('data', (chunk) => {
		writeStream.write(chunk);
	});
};

await write();
