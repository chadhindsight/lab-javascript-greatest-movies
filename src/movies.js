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
    }); // get the array of first 20 titles
    return firstTwentyTitles; 
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
const ratesAverage= (films) =>{
    if(films.length ===0) return 0
    
    return films.reduce((a,b)=>{
        if(films.length ===0) {return 0}

        return a.rate + b.rate * films.length.toFixed(2)

   })

}
// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
