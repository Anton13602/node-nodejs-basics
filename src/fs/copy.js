import { readdir, mkdir, copyFile } from 'fs';
import { join } from 'path';

import { callbackError } from '../utils/callbackError.js';
import { getPath } from '../utils/getPath.js';

const copy = async () => {
	// Write your code here
	const folderName = 'files';
	const copyFolderName = `${folderName}_copy`;

	const pathToFolder = getPath(import.meta, [folderName]);
	const pathToCopyFolder = getPath(import.meta, [copyFolderName]);

	await mkdir(pathToCopyFolder, (err) => {
		if (err) {
			callbackError('FS operation failed');
		}
	});

	await readdir(pathToFolder, (err, files) => {
		if (err) {
			callbackError('FS operation failed');
		}
		files.forEach(async (file) => {
			const src = join(pathToFolder, file);
			const dest = join(pathToCopyFolder, file);
			await copyFile(src, dest, callbackError);
		});
	});
};

await copy();
