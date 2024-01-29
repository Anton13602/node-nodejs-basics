import { createReadStream } from 'fs';
import { stdout } from 'node:process';

import { getPath } from '../utils/getPath.js';

const read = async () => {
	// Write your code here
	const pathToFile = getPath(import.meta, ['files', 'fileToRead.txt']);
	const readStream = createReadStream(pathToFile);

	// readStream.pipe(stdout);

	readStream.on('data', (chunk) => {
		stdout.write(chunk.toString());
	});
};

await read();
