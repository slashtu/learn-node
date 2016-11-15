import "babel-core/register";
import"babel-polyfill";

import async from './async.js'

async.getMovieAsync().then(movies => console.log(movies));

console.log('gg')
