import { argv } from 'node:process';

const parseArgs = () => {
	// Write your code here
	let result = '';

	for (let i = 2; i < argv.length; i += 2) {
		const propertyName = argv[i]?.replace('--', '') || '';
		const value = argv[i + 1] || '';

		result.length && (result += ', ');
		result += `${propertyName} is ${value}`;
	}

	console.log(result);
};

parseArgs();
