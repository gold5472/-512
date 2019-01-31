// Wait till the browser is ready to render the game (avoids glitches with tiles)
window.requestAnimationFrame(function () {
  new GameManager(6, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});
