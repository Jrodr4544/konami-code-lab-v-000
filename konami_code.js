const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  var event = document.body;
  var keysPressed = [];
  event.addEventListener('keydown', function(event) {
    keysPressed.push(event.key)
    (keysPressed[0] === codes[0]) ? compare(keysPressed) : keysPressed.shift();
  
  })
}

function compare(array) {
  var result;
  for (var i = 0; i < codes.length; i++) {
    array[i] === codes[i]
  }
}
