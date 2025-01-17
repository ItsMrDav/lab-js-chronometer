class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    setInterval(() => {
      this.currentTime += 1;
      console.log(this);
      if (typeof printTimeCallback === `function` ) {
      printTimeCallback()}
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;

  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return this.currentTime.slice(0, 1);
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
