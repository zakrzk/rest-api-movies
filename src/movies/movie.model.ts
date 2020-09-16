export class Movie {

  id: string;
  title: string;
  year: number;
  director: string;
  runtime: string;
  country: string;
  comments: string[];

  constructor(movieObj) {
    this.id = movieObj.id;
    this.title = movieObj.title;
    this.year = movieObj.year;
    this.director = movieObj.director;
    this.runtime = movieObj.runtime;
    this.country = movieObj.country;
    this.comments = movieObj.comments;
  }

}