import { readdir, rename as renameFS } from 'fs';

import { callbackError } from '../utils/callbackError.js';
import { getPath } from '../utils/getPath.js';

const rename = async () => {
	// Write your code here
	const folderName = 'files';
	const fileName = 'wrongFilename.txt';
	const renameFileName = 'properFilename.md';

	const pathToFolder = getPath(import.meta, [folderName]);
	const pathToFile = getPath(import.meta, [folderName, fileName]);
	const pathToRenameFileName = getPath(import.meta, [folderName, renameFileName]);

	await readdir(pathToFolder, async (err, files) => {
		if (err) {
			callbackError(err);
		}
		if (!files.includes('wrongFilename.txt') || files.includes('properFilename.md')) {
			callbackError('FS operation failed');
		}

		await renameFS(pathToFile, pathToRenameFileName, callbackError);
	});
};

await rename();