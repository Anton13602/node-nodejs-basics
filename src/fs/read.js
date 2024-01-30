import { readdir, readFile } from 'fs';

import { callbackError } from '../utils/callbackError.js';
import { getPath } from '../utils/getPath.js';

const read = async () => {
	// Write your code here
	const folderName = 'files';
	const fileName = 'fileToRead.txt';
	const pathToFolder = getPath(import.meta, [folderName]);
	const pathToFile = getPath(import.meta, [folderName, fileName]);

	await readdir(pathToFolder, async (err, files) => {
		if (err) {
			callbackError(err);
		}
		if (!files.some((file) => file === 'fileToRead.txt')) {
			callbackError('FS operation failed');
		}

		await readFile(pathToFile, 'utf-8', (err, data) => {
			if (err) {
				callbackError(err);
			}
			console.log(data);
		});
	});
};

await read();