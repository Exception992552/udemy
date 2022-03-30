// let numberOfFilms;

// function start(){
//      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
//     }
// }
// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false
// };


// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt("Один из последних просмотренных фильмов?"),
//               b = prompt("На сколько оцените его?");
//         if (a != null && b != null && a != '' && b != '' && a.length < 50){
//             personalMovieDB.movies[a] = b;
//         } else {
//             i--;
//         }
      
//     }
// }
// rememberMyFilms();


// function detectPersonalLevel(){
//     if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDB.count > 30) {
//         console.log('Вы киноман');
//     } else if (personalMovieDB.count < 10){
//         console.log('Просмотрено довольно мало фильмов');
//     } else {
//         console.log('Произошла ошибка');
//     }
// }
// detectPersonalLevel();



// function showMyDB(){
//     if (!personalMovieDB.private) {
//        return console.dir(personalMovieDB);
//     }
     
//    }
//    showMyDB();

   
//    function writeYourGenres() {
//        for (let i = 1; i <= 3; i++) {
//            let qust = prompt(`Ваш любимый жанр под номером ${i}`);
//            personalMovieDB.genres[i-1] = qust;
//        }
//    }

//    writeYourGenres();


let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function (){
       this.count = +prompt('Сколько фильмов вы уже посмотрели?');
            while (this.count == '' || this.count == null || isNaN(this.count)) {
                this.count = +prompt('Сколько фильмов вы уже посмотрели?');
             }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?"),
                  b = prompt("На сколько оцените его?");
          if (a != null && b != null && a != '' && b != '' && a.length < 50){
            this.movies[a] = b;
        } else {
            i--;
        }
      
    }

},

detectPersonalLevel: function (){
        if (this.count >= 10 && this.count <= 30) {
            console.log('Вы классический зритель');
        } else if (this.count > 30) {
            console.log('Вы киноман');
        } else if (this.count < 10){
            console.log('Просмотрено довольно мало фильмов');
        } else {
            console.log('Произошла ошибка');
        }
    },

    showMyDB: function (hidden){
    if (!hidden) {
       console.dir(personalMovieDB);
    }
     
   },
 // >>>>>>>>>>>>  method writeYourGenres with for <<<<<<<<<<<
//    writeYourGenres: function () {
//            for (let i = 1; i <= 3; i++) {
//                let qust = prompt(`Ваш любимый жанр под номером ${i}`);
//                if (qust == '' && qust == null) {
//                 i--;
//                } else {
//                 this.genres[i-1] = qust;
//                }
               
//            }
//           return this.genres.forEach(function(value, index) {
//                 console.log(`Любимый жанр #${index + 1} - это ${value}`);
//            });
//        },
 // >>>>>>>>>>>> end method writeYourGenres with for <<<<<<<<<<<
 
 writeYourGenres: function () {
               for (let i = 1; i < 2; i++) {
                   this.genres = prompt("Введите ваши любимые жанры через запятую");
                   if (this.genres == '' && this.genres == null) {
                    i--;
                   } else {
                   this.genres = this.genres.split(", ");
                   
                   }
                   
               }
              return this.genres.forEach(function(value, index) {
                    console.log(`Любимый жанр #${index + 1} - это ${value}`);
               });
           },



    toggleVisibleMyDB: function() {
        if (this.private) {
            this.private = false;
        } else {
            this.private = true;

        }
        
    }
  

};



