import { readdir, stat } from 'fs/promises';

import { callbackError } from '../utils/callbackError.js';
import { getPath } from '../utils/getPath.js';

const list = async () => {
	// Write your code here
	const folderName = 'files';
	const pathToFolder = getPath(import.meta, [folderName]);

	await stat(pathToFolder).then(
		async () => {
			const list = await readdir(pathToFolder);
			console.log(list);
		},
		() => {
			callbackError('FS operation failed');
		},
	);
};

await list();