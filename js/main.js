// Initialize Firebase
var config = {
  apiKey: "AIzaSyD4adMwW1o3wivtCucxMcSFK1SJBQHt80g",
  authDomain: "try1-soussia.firebaseapp.com",
  databaseURL: "https://try1-soussia.firebaseio.com",
  projectId: "try1-soussia",
  storageBucket: "try1-soussia.appspot.com",
  messagingSenderId: "409856000463"
};
firebase.initializeApp(config);
var database = firebase.database();
var ref = database.ref("game");

var score = 0;
var time = 10;
var play = true;
function save() {
  var data = {
    score: score,
    time: time
  };
  ref.push(data);
  alert("yeaaaaaah");
  score = 0;
  time = 10;
  document.getElementById("score").innerHTML = "score : " + score;
  document.getElementById("time").innerHTML = time;
  play = true;
}

setInterval(function() {
  if (time > 0) {
    time--;
    document.getElementById("time").innerHTML = time;
  } else {
    play = false;
  }
}, 1000);

document.addEventListener("keyup", function() {
  if (play) {
    score++;
  }
  document.getElementById("score").innerHTML = "score : " + score;
});
