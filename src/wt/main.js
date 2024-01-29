import { Worker } from 'node:worker_threads';
import { cpus } from 'os';

import { getPath } from '../utils/getPath.js';

const performCalculations = async () => {
	const result = [];
	const cpu = cpus();

	const pathToWorker = getPath(import.meta, ['worker.js']);

	const promises = cpu.map((value, i) => {
		return new Promise((resolve, reject) => {
			const worker = new Worker(pathToWorker, {
				workerData: 10 + i,
			});

			worker.on('message', (value) => {
				resolve(value);
			});
			worker.on('error', () => {
				reject();
			});
		});
	});

	const res = await Promise.allSettled(promises)
	res.forEach(({ status, value }) => {
		result.push({
			'status': status === 'fulfilled' ? 'resolved' : 'error',
			'data': status === 'fulfilled' ? value: null,
		})
	})

	console.log(result);
};

await performCalculations();