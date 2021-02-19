
function screenConfig() {
  let game_body = document.querySelector(".game-body");

  if (window.innerWidth < 500) {
    game_body.style.height = `${window.innerHeight - 50}px`;
    game_body.style.marginTop = 50 + 'px';
  } else {
    game_body.style.height = `${window.innerHeight - 80}px`;
    game_body.style.marginTop = 80 + 'px';
  }

  window.onresize = function() {
    if (window.innerWidth < 500) {
      game_body.style.height = `${window.innerHeight - 50}px`;
      game_body.style.marginTop = 50 + 'px';
    } else {
      game_body.style.height = `${window.innerHeight - 80}px`;
      game_body.style.marginTop = 80 + 'px';
    }
  }
}

export default screenConfig;
