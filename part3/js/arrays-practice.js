// STEP 1
window.console.log("Step 1:");
var x = ['Your Name', 'A Silent Voice', 'Shutter Island', 'The Dark Knight', 'Shawshank Redemption'];
window.console.log('Second Movie:', x[1]);

// STEP 2
window.console.log("\nStep 2:");
var movies = new Array(5);
movies[0] = 'Your Name';
movies[1] = 'A Silent Voice';
movies[2] = 'Shutter Island';
movies[3] = 'The Dark Knight';
movies[4] = 'Shawshank Redemption';
window.console.log('First Movie:', movies[0]);

// STEP 3
window.console.log("\nStep 3:");
movies.splice(2, 0, 'Interstellar');
window.console.log('New Array Length:', movies.length);

// STEP 4
window.console.log("\nStep 4:");
var movies = ['Your Name', 'A Silent Voice', 'Shutter Island', 'The Dark Knight', 'Shawshank Redemption'];
delete movies[0];
window.console.log(movies);

// STEP 5
window.console.log("\nStep 5:");
var movies = ['Your Name', 'A Silent Voice', 'Shutter Island', 'The Dark Knight', 'Shawshank Redemption', 'Interstellar', 'The Prestige'];
for (var i = 0; i < movies.length; i++) {
    window.console.log((i + 1) + '. ' + movies[i]);
}

// STEP 6
window.console.log("\nStep 6:");
for (var index in movies) {
    window.console.log((parseInt(index) + 1) + '. ' + movies[index]);
}

// STEP 7
window.console.log("\nStep 7:");
movies.sort();
for (var index in movies) {
    window.console.log((parseInt(index) + 1) + '. ' + movies[index]);
}

// STEP 8
window.console.log("\nStep 8:");
var leastFavMovies = ['Tenet', 'Batman Vs Superman', 'Withering With You'];
window.console.log("Movies I like:\n");
for (var i = 0; i < movies.length; i++) {
    window.console.log(movies[i]);
}
window.console.log("\nMovies I regret watching:\n");
for (var i = 0; i < leastFavMovies.length; i++) {
    window.console.log(leastFavMovies[i]);
}

// STEP 9
window.console.log("\nStep 9:");
var allMovies = movies.concat(leastFavMovies);
allMovies.sort().reverse();
for (var i = 0; i < allMovies.length; i++) {
    window.console.log((i + 1) + '. ' + allMovies[i]);
}

// STEP 10
window.console.log("\nStep 10:");
window.console.log('Last Element of the array:', allMovies[allMovies.length - 1]);