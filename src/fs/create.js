import { readdir, writeFile } from 'fs';

import { callbackError } from '../utils/callbackError.js';
import { getPath } from '../utils/getPath.js';

const create = async () => {
	const folderName = 'files';
	const fileName = 'fresh.txt';
	const data = 'I am fresh and young';
	const pathToFile = getPath(import.meta, [folderName, fileName]);
	const pathToFolder = getPath(import.meta, [folderName]);

	await readdir(pathToFolder, (err, files) => {
		if (err) {
			callbackError(err);
		}

		if (files.includes(fileName)) {
			callbackError('FS operation failed');
		}
	});

	await writeFile(pathToFile, data, callbackError);
};

await create();
