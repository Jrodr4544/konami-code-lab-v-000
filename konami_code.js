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
    (keysPressed[0] === codes[0]) ? null : keysPressed.
    (event.key === codes[0]) ? keysPressed.push(event.key) : null;
  })
}
