import { Transform } from 'stream';
import { stdin, stdout } from 'node:process';

const transform = async () => {
	// Write your code here
	const reverseString = new Transform({
		transform(chunk, encoding, callback) {
			callback(null, chunk.toString().split('').reverse().join(''));
		},
	});

	stdin.on('data', (chunk) => {
		reverseString.on('data', (chunkReverse) => {
			stdout.write(chunkReverse.toString());
		});

		reverseString.write(chunk);
	});
};

await transform();
