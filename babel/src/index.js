import path from 'path';
import { exists } from './utils'; // 通过webpack打包之后才能用

console.log(path.resolve('.'));
console.log(exists(path.resolve('.')));

(async function () {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	console.log('delay 1s');
})();
