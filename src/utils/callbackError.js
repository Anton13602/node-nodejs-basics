export const callbackError = (err) => {
	if (err) {
		throw new Error(err);
	}
}