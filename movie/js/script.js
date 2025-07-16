const numberOfFilms = +prompt('Сколько фильов вы уже посмотрели?', "")

// console.log(numberOfFilms)

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// console.log(personalMovieDB)

const a = prompt('Один из просмотренных фильмов?', ""),
      b = prompt('На сколько оцените его?', ""),
      c = prompt('Один из просмотренных фильмов?', ""),
      d = prompt('На сколько оцените его?', "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB)