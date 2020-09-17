/**
 * Data Access Object
 * Fetching data from http://www.omdbapi.com/
 */

import fetch from 'node-fetch';

const url = 'http://www.omdbapi.com/';
const apiKey = process.env.API_KEY;

// Given the year and the title, findMovie() returns the IMDB ID
export async function findMovie(title: string, year: number) {
  return await
    fetch(`${url}?apiKey=${apiKey}&s=${title}&y=${year}`)
      .then(res => res.text())
      .then(body => JSON.parse(body))
      .then(parsed => parsed['Search'][0]['imdbID'])
      .catch(err => {
        return false;
      });

}

/**
 * Returns an object containing more details about the movie
 * based on the passed-in IMDB ID
 */

export async function fetchMovieData(id: string) {
  return await fetch(`${url}?apiKey=${apiKey}&i=${id}`)
    .then(res => res.text())
    .then(body => JSON.parse(body))
    .catch(err => console.warn(err));

}