let chronometer = new Chronometer();
let btnLeft = document.getElementById('btnLeft');
let btnRight = document.getElementById('btnRight');
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');


function printTime() {
    printSeconds()
    printMinutes()
}

function printMinutes() {
    let minString = chronometer.getMinutes()
    let min = chronometer.twoDigitsNumber(minString)
    minDec.innerHTML = min[0]
    minUni.innerHTML = min[1]
}

function printSeconds() {
    let secString = chronometer.getSeconds()
    let sec = chronometer.twoDigitsNumber(secString)
    secDec.innerHTML = sec[0]
    secUni.innerHTML = sec[1]
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
    btnLeft.className = 'btn stop'
    btnLeft.innerHTML = 'STOP'

    setSplitBtn()
    chronometer.startClick()



}

function setSplitBtn() {
    btnRight.className = 'btn split'
    btnRight.innerHTML = 'SPLIT'
}

function setStartBtn() {
    btnLeft.className = 'btn start'
    btnLeft.innerHTML = 'START'
    chronometer.stopClick()


    setResetBtn()

}

function setResetBtn() {
    btnRight.className = 'btn reset'
    btnRight.innerHTML = 'RESET'
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    btnLeft.className === 'btn start' ? setStopBtn() : setStartBtn();
    //  printTime().setInterval(printTime(), 1000)

    // btnLeft.className === ('btn stop') ? setSplitBtn() : setResetBtn()
    // btnRight.className ===('btn stop') ? 
    // btnLeft.className === ('btn start') ? setResetBtn() : false
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    // btnRight.className === ('btn reset') ? setSplitBtn() : false
});