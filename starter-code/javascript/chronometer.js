class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }
  startClick() {
    this.intervalId = setInterval(() =>{
      this.currentTime++;
    printTime()
  }, 10)
}
  getMinutes() {
    return parseInt(this.currentTime / 60)
  }
  getSeconds() {
    return parseInt(this.currentTime % 60) //% divide, entre 60 y da el resto
  }
  twoDigitsNumber(value) {
    return value === 0 ? '00' :  value < 10 ? `0${value}` : `${value}`
   
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    clearTimeout(this.currentTime)
  }
  // splitClick() {}
}
