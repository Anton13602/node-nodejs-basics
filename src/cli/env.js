import { env } from 'node:process';

const parseEnv = () => {
	// Write your code here
	let result = '';

	Object.entries(env).forEach((val) => {
		const [key, value] = val;
		if (key.includes('RSS_')) {
			result.length && (result += '; ');
			result += `${key}=${value}`;
		}
	});
	console.log(result);
};

parseEnv();
