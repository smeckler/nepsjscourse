// Creating the object with the already established properties
var user = {
  name: "Antônio", // Owner of the user name
  pathPicture: "image-antonio.png", // Path which keeps the profile photo
  bio:
    "I'm a programming enthusiast, without a specific niche, I like everything 😄😄😄", // Profile bio
  numberSolvedExercises: 325, // Number of exercises solved
  shoutName: function () {
    console.log(`My name is ${this.name}`);
  },
};

user.shoutName();
