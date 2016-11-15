import fetch from 'node-fetch'

// fetch('https://api.github.com/users/github')
//     .then(function(res) {
//         return res.json();
//     }).then(function(json) {
//         console.log(json);
//     });

const getMovieAsync = async function() {
    let response = await fetch('http://www.omdbapi.com/?t=The Matrix');
    let response2 = await fetch('http://www.omdbapi.com/?t=Sully');
    let movie = await response.json();
    let movie2 = await response2.json();
    return { movie1: movie, movie2: movie2};
}

module.exports = {
  getMovieAsync: getMovieAsync
}