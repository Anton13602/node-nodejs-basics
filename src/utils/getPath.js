import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

export const getPath = (meta, paths) => {
	const { url } = meta;

	const __filename = fileURLToPath(url);
	const __dirname = dirname(__filename);

	return join(__dirname, ...paths);
};