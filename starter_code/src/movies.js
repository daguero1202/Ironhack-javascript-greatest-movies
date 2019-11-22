/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(anArray){

   let copy = [...anArray];

   copy.sort((a ,b) =>{
    if(a.year < b.year){
        return -1;
    }
    else if(b.year < a.year){
        return 1;
    }
    else{
        if(a.title < b.title){
            return -1;
        }
        else if(b.title > a.title){
            return 1;
        }
        else{
            return 0;
        }
    }
   })
   return copy;

}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies([anArray]){

}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(anArray){
    let copy = [...anArray];

    copy.sort((a,b) =>{
        if(a.title < b.title){
            return -1;
        }
        else if(b.title < a.title){
            return 1;
        }
        else{
            return 0;
        }
        
    })



    let firstNum = copy.slice(0, 20);

    return copy;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
