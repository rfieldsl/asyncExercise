// CALLBACKS
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer/parent function to complete some kind of action

// Example 1
const div1 = document.querySelector(`#first`);
const p1 = document.createElement(`p`);
p1.innerText = `Hello`;
div1.append(p1);

/*
function getUserInfo(email){
  setTimeout(() => {
    return email;
  }, 2000);
  // return email;
}

const user1 = getUserInfo(`me@gmail.com`);
p1.innerText = user1;
*/

function getUserInfo(email, callback){
  setTimeout(() => {
    callback(email);
  }, 2000);
}

getUserInfo(`me@gmail.com`, e => {
  p1.innerText = e;
});

// Example 2
const second = document.querySelector(`#second`);
const p2 = document.createElement(`p`);
p2.innerText = `Example 2`;
second.append(p2);

function getRandomMovie(movie, callback){
  setTimeout(() => {
    callback(movie);
  }, 3000);
}

getRandomMovie(`Matilda`, m => {
  p2.innerText = m;
});
