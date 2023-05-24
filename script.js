const PLAYER_SELECTOR = "div[data-a-target='video-player']";
const CONTROLS_SELECTOR = "div[data-a-target='player-controls']";
const PAUSE_BTN_SELECTOR = "button[data-a-target='player-play-pause-button']";

function addPauseEventListener(player, controls, pauseButton) {
  const pauseVideo = () => pauseButton.click();

  player.addEventListener("click", (event) => {
    controls.contains(event.target) || pauseVideo();
  });
}

function observePlayerAndButton() {
  const player = document.querySelector(PLAYER_SELECTOR);
  const controls = document.querySelector(CONTROLS_SELECTOR);
  const pauseButton = document.querySelector(PAUSE_BTN_SELECTOR);

  if (player && controls && pauseButton) {
    observer.disconnect();
    addPauseEventListener(player, controls, pauseButton);
  }
}

const observer = new MutationObserver(observePlayerAndButton);
observer.observe(document.body, { childList: true, subtree: true });
