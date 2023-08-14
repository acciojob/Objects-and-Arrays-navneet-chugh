const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
// Reference to the 'players' array
const team = players;

// Copy of the 'players' array
const team1 = [...players];

// Copy of the 'person' object
const cap1 = { ...person };


window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
