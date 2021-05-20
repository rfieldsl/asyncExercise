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

// Example 3
const third = document.querySelector(`#third`);
const p3 = document.createElement(`p`);
third.append(p3);
const p4 = document.createElement(`p`);
third.append(p4);

function getShowInfo(showTitle, callback){
  setTimeout(() => {
    callback(showTitle);
  }, 4000);
}

function getReleaseDate(title, callback){
  setTimeout(() => {
    callback(`Jan 15, 2021`);
  }, 1000);
}

getShowInfo(`WandaVision`, t => {
  p3.innerText = t;
  getReleaseDate(t, d => {
    p4.innerText = d;
  });
});

// Example 4
const fourth = document.querySelector(`#fourth`);
const p5 = document.createElement(`p`);
fourth.append(p5);

function response(data, onSuccess, onFailure){
  setTimeout(() => {
    // Using the received variable to determine whether we received the data we are pretending we requested
    let received = false;
    if (received){
      onSuccess(`Received data: ${data}`);
    } else {
      onFailure(`Failed. Did not receive data.`);
    }
  }, 2000);
}
response(`Password123`, s => {
  p5.innerText = s;
}, f => {
  p5.innerText = f;
});
