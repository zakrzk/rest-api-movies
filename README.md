### Movies API

Simple REST API interacting with [omdbapi](http://www.omdbapi.com).

Deployed to AWS at `---`

#### Getting your API key

Rename `.env.template` to `.env` and provide your API key. 

You can get it for free at [omdbapi](http://www.omdbapi.com).

`Note:` *Since it's a portfolio project, I put my `.env` in the repo.*

#### How to run it

```
git clone git@github.com:zakrzk/rest-api-movies.git
cd rest-api-movies
docker-compose build
docker-compose up
```

Example queries via curl:

**POST:**

```
curl --location --request POST 'localhost:3005/movies' \
--header 'Content-Type: application/json' \
--data-raw '{"title":"Pulp Fiction","year": 1994}'
```

**GET:**

`curl --location --request GET 'localhost:3005/movies'`


####  Endpoints 

##### POST /movies

Pass an object with a movie title and the release year in the request body:

```javascript
{
    "title": "The Hateful Eight",
    "year": 2015
}
```

In a response, you'll find some more info about the movie:

```javascript
{
    "id": "tt3460252",
    "title": "The Hateful Eight",
    "year": "2015",
    "director": "Quentin Tarantino",
    "runtime": "168 min",
    "country": "USA",
    "comments": []
}
```

##### GET /movies

Returns all movies present in the database:

```javascript
[
           {
               "comments": [],
               "_id": "5f5b94dbcde89461c999f7af",
               "id": "tt3460252",
               "title": "The Hateful Eight",
               "year": 2015,
               "director": "Quentin Tarantino",
               "runtime": "168 min",
               "country": "USA",
               "__v": 0
           },
           {
               "comments": [],
               "_id": "5f5ba7928db14d0020bdbd5b",
               "id": "tt0110912",
               "title": "Pulp Fiction",
               "year": 1994,
               "director": "Quentin Tarantino",
               "runtime": "154 min",
               "country": "USA",
               "__v": 0
           }
       ]
```


##### POST /comments

Pass an object with a movie id and the comment in the request body:

```javascript
{
    "movieId": "tt3460252",
    "movieComment": "Great soundtrack! 8/10"
}
```

Result:

**201 CREATED:**
```json
{
    "movieId": "tt3460252",
    "movieComment": "Great soundtrack! 8/10"
}
```

##### GET /comments

Returns an object containing only movies with comments (only *title* and *comments* properties:

```javascript
[
    {
        "comments": [
            "Great soundtrack! 8/10",
            "I didnt get the plot"
        ],
        "title": "The Hateful Eight"
    },
    {
        "comments": [
            "what was in the suitcase??"
        ],
        "title": "Pulp Fiction"
    }
]
```

