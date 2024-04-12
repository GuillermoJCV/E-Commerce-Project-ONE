async function saveInfo(key, value) {
	if(typeof key !== 'string' || typeof value !== 'string') throw new TypeError("key and value must be strings");
	window.localStorage.setItem(key, value);
}

function getInfo(key) {
	if(typeof key !== 'string') throw new TypeError("key must be string");
	const value = window.localStorage.getItem(key);

	if(!value) throw new ReferenceError("The key you are trying to access doesn't exist");
	else return value;
}

export {
	saveInfo, getInfo
}