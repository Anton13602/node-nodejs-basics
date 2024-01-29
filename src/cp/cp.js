import { fork } from 'node:child_process';
import { getPath } from '../utils/getPath.js';

const spawnChildProcess = async (args) => {
	// Write your code here
	const path = getPath(import.meta, ['files', 'script.js']);
	fork(path, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['--someArgument1']);
