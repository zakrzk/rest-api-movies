// Data Access Object
// Fetching data from http://www.omdbapi.com/

import fetch from 'node-fetch';

const url = 'http://www.omdbapi.com/';
const apiKey = process.env.API_KEY;

// Given the year and the title, this function returns the IMDB ID
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