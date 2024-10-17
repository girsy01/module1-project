class MyAudio {
  constructor() {
    this.gameStarted = false;
    this.musicOn = true;
    this.audioOn = true;
    this.musicButtonElement = document.getElementById("music-btn");
    this.soundEffectsButtonElement = document.getElementById("soundEffects-btn");
    this.soundBackgroundMusic = new Audio("sounds/background.mp3");
    this.soundBackgroundMusic.loop = true;
    this.soundBackgroundMusic.volume = 0.5;
    this.soundLife = new Audio("sounds/life.mp3");
    this.soundCoin = new Audio("sounds/coin.mp3");
    this.soundCoin.playbackRate = 2; // 1.5x faster
    this.soundLevel = new Audio("sounds/level.wav");
    this.soundCollision = new Audio("sounds/collision.wav");
    this.soundGameover = new Audio("sounds/gameover.wav");
    this.soundGameover.playbackRate = 1.2; // 1.5x faster
  }

  handleMusic() {
    this.musicOn = !this.musicOn;
    this.musicButtonElement.classList.toggle("active");
    if (this.gameStarted) {
      if (this.musicOn) {
        this.soundBackgroundMusic.play();
      } else {
        this.soundBackgroundMusic.pause();
        this.soundBackgroundMusic.currentTime = 0;
      }
    }
  }

  handleSounds() {
    this.audioOn = !this.audioOn;
    this.soundEffectsButtonElement.classList.toggle("active");
  }
}
