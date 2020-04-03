/* eslint no-restricted-globals: 'off' */
// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    let newMovies = [...arr]

    return newMovies.sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title)
        }
        else {
            //  If sort returns -1 a stays in the same place, if positive a and b swap, if 0 a stays in the same place
            return a.year - b.year
        }
    })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
const howManyMovies = (movies) => {
    let filteredMovies = movies.filter(obj => {
        if (obj.director === "Steven Spielberg" && obj.genre.includes('Drama')) {
            return obj
        }
    })
    return filteredMovies.length
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    // map, filter, reduce -> make a copy of the array
    // sort -> mutates the original array
    let copyOfTheArray = [...arr];

    copyOfTheArray.sort(function (a, b) {
        return a.title.localeCompare(b.title);
    }); // sort the entire 250 movies
    let firstTwenty = copyOfTheArray.slice(0, 20); // get the first 20 movies
    let firstTwentyTitles = firstTwenty.map(movie => {
        return movie.title;
    }); // Return the array of first 20 titles
    return firstTwentyTitles;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    let sum = 0;
    if (!arr.length) {
        return 0;
    }
    for (i = 0; i < arr.length; i++) {
        if (arr[i].rate){
            sum += arr[i].rate
        }    
    }
    let average = sum / arr.length;
    return parseFloat(average.toFixed(2));
}

// Iteration 5: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (arr) => {
    // return ratesAverage(arr.filter(curr => curr.genre.indexOf("Drama") >= 0)) || 0;}
    let dramaArr = arr.filter((eachMovie) => {
        return eachMovie.genre.indexOf("Drama") >= 0
    })

    return ratesAverage(dramaArr)
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function timeConverter(duration) {
    // '2h 5m' '2h' '36m'
    let minutes = 0;
   
    let array = duration.split("h");
    if (array.length === 1) {
        minutes += parseInt(array[0]);
    } else if (array[1] === "") {
        minutes += array[0] * 60;
    } else {
        minutes += array[0] * 60 + parseInt(array[1]);
    }
    return minutes;
}

function turnHoursToMinutes(movies) {
    return movies.map(function (movie) {
        let copyOfMovie = { ...movie };
        copyOfMovie.duration = timeConverter(movie.duration);
        return copyOfMovie;
    });
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
