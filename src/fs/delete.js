import { readdir, unlink } from 'fs';

import { callbackError } from '../utils/callbackError.js';
import { getPath } from '../utils/getPath.js';

const remove = async () => {
	// Write your code here
	const folderName = 'files';
	const fileName = 'fileToRemove.txt';

	const pathToFolder = getPath(import.meta, [folderName]);
	const pathToFile = getPath(import.meta, [folderName, fileName]);

	await readdir(pathToFolder, async (err, files) => {
		if (err) {
			callbackError(err);
		}
		if (!files.includes('fileToRemove.txt')) {
			callbackError('FS operation failed');
		}

		await unlink(pathToFile, callbackError);
	});
};

await remove();