import superheroes from 'superheroes';
import sillyname from 'sillyname';

const superheroName = superheroes.random();
const sillyName = sillyname();

console.log(`I am a ${superheroName}!..`);
console.log(`My silly name is ${sillyName}`);
