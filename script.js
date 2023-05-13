const PLAYER_SELECTOR = "div[data-a-target='video-player']";
const PAUSE_BTN_SELECTOR = "button[data-a-target='player-play-pause-button']";

function addPauseEventListener(player, pauseButton) {
  const pauseVideo = () => pauseButton.click();
  player.addEventListener("click", pauseVideo);
}

function observePlayerAndButton() {
  const player = document.querySelector(PLAYER_SELECTOR);
  const pauseButton = document.querySelector(PAUSE_BTN_SELECTOR);

  if (player && pauseButton) {
    observer.disconnect();
    addPauseEventListener(player, pauseButton);
  }
}

const observer = new MutationObserver(observePlayerAndButton);
observer.observe(document.body, { childList: true, subtree: true });
