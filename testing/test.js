// Creating the Book Class
class Book {
    // Every book has a name, author and year of release, so we get these arguments
    constructor(name, author, year) {
      // Saving the variables to be used in the whole context of the class
      this.name = name; 
      this.author = author;
      this.year = year;
    }
  
    age() {
      var date = new Date(); // Getting the current date
      // Subtracting the current year from the class book and returning the result
      return date.getFullYear() - this.year; 
    }
  }

// Initializing the Book class with the proper parameters being passed
let bookOne = new Book("The universe in a nutshell", "Stephen Hawking", 2001);

console.log(bookOne.age());
// Output: 19

let description = `The "${bookOne.name}" book was written by ${bookOne.author} and released in ${bookOne.year}.`;

console.log(description) // Printing the description made of the book.
// Output: The "The universe in a nutshell" book was written by Stephen Hawking and released in 2001.
