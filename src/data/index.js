import aretes from './aretes.json';
import collares from './collares.json';
import pulseras from './pulseras.json';
import anillos from './anillos.json';
import sets from './sets.json';
import brazalates from './brazalates.json';
import earcuff from './earcuff.json';

export const categories = [
  { name: 'Aretes', cover: '/img/coleccion/aretes/1.webp', data: aretes },
  { name: 'Collares', cover: '/img/coleccion/collares%20-%20cadenas/1.webp', data: collares },
  { name: 'Pulseras', cover: '/img/coleccion/pulseras/1.webp', data: pulseras },
  { name: 'Anillos', cover: '/img/coleccion/anillos/1.webp', data: anillos },
  { name: 'Brazaletes', cover: '/img/coleccion/brazalates/1.webp', data: brazalates },
  { name: 'Earcuff', cover: '/img/coleccion/earcuff/1.webp', data: earcuff },
  { name: 'Sets', cover: '/img/coleccion/sets/1.webp', data: sets },
];

export const getCategoryByName = (name) => categories.find(c => c.name === name) || null;
export const getCategoryBySlug = (slug) => categories.find(c => c.name.toLowerCase().replace(/\s+/g, '-') === slug) || null;
export const slugify = (str) => str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
