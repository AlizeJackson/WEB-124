// Alize Jackson WEB 124 September 13th, 2026

let info = [
    'Turning Red, Coming-of-Age, 10, miku@email.com, 1',
    'Cinderella, Drama, 8, teto@email.com, 2',
    'Friday the 13th, Horror, 5, neru@email.com, 3',
    'Happy Feet, Adventure, , kaito@email.com, 4',
    'Spirited Away, , 7, , 5'
];

function Movie(title, genre, rating, reviewEmail, id = "") {
    this.title = title;
    this.genre = genre;
    this.rating = rating;
    this.reviewEmail = reviewEmail;
    this.id = id; 
}

//Stuck on step: Use your array and convert each string into a Movie object.
//(Hint: you will need string methods such as split, map and trim to split the array, loop through the array and trim the extra space.) Store all valid Movieobjects in a new array.

let reviews = info.map(function(review) {
    let values = review.split(', ').map(value => value.trim());
    
    return new Movie(
        values[0],
        values[1],
        values[2],
        values[3],
        values[4],
    );
});

Movie.prototype.getSummary = function () {
  return `${this.title} is a ${this.genre} movie with a rating of ${this.rating}.`;
};

Movie.prototype.isHighlyRated = function () {
    if (this.rating >= 8) {
        return "This is rated highly!";
    } else {
        return "This is rated poorly."
    }
};


//Could not figure out how to get the email to work
Movie.prototype.getReviewEmail = function () {
  return this.reviewEmail
};

Movie.prototype.getID = function () {
  return this.id;
};

reviews.forEach(function(film){
    console.log(`Title: ${film.title}`);
    console.log(`Genre: ${film.genre}`);
    console.log(`Rating: ${film.rating}`);
    console.log(`Reviewer's Email: ${film.getReviewEmail()}`);
    console.log(`Summary: ${film.getSummary()}`);
    console.log(`ID: ${film.getID()}`);
});

let highrateMovie = reviews.filter(function(rates) {
    return rates.rating >= 8;
});

console.log(highrateMovie);

try {
    if (reviews.includes("")); {
        throw new Error("You're missing a value here!");
    }
} catch (error) {
    console.log(error.message);
}

console.log("Turning Red is my favorite movie currently. I loved the music and the story.");
//This messages prints what I wrote and the code determines that by the quotation marks and the fact it "logs" and keep tracks of the information placed within it.


