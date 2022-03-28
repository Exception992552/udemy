const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
/* Плюс позволяет конвертировать строку в число */

/* объект personalMovieDB */
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

//>>>>>>for<<<<<<

// for (let i = 0; i < 2; i++) {
//     const a = prompt("Один из последних просмотренных фильмов?"),
//     b = prompt("На сколько оцените его?");
//     if (a != null && b != null && a != '' && b != '' && a.length < 50){
//         personalMovieDB.movies[a] = b;
//     } else {
//         i--;
//     }
  
// }

//>>>>>do while<<<<<<

// do {
//     let i = 0;
//     const a = prompt("Один из последних просмотренных фильмов?"),
//     b = prompt("На сколько оцените его?");
//     i++;
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//     } else {
//         i--;
//     }
// } while (i <= 2);

let i = 0;
while(i < 2) {
    const a = prompt("Один из последних просмотренных фильмов?"),
    b = prompt("На сколько оцените его?");
    i++;
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
}


if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else if (personalMovieDB.count < 10){
    console.log('Просмотрено довольно мало фильмов');
} else {
    console.log('Произошла ошибка');
}


