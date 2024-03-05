let Blinken = 0
let helligkeit2 = 0
input.onButtonPressed(Button.A, function () {
    if (Blinken) {
        Blinken = 0
    } else {
        Blinken = 1
    }
})
basic.forever(function () {
    while (Blinken) {
        pins.digitalWritePin(DigitalPin.P3, 0)
        pins.digitalWritePin(DigitalPin.P4, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P3, 1)
        pins.digitalWritePin(DigitalPin.P4, 0)
        basic.pause(200)
    }
})
basic.forever(function () {
    // Lese die Lichtstärke
    helligkeit2 = input.lightLevel()
    if (helligkeit2 < 50) {
        // Wenn es dunkel ist, schalte die Lampe an P1 aus und die anderen Lampen an P3 und P4 ein
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P3, 1)
        pins.digitalWritePin(DigitalPin.P4, 1)
    } else if (helligkeit2 > 50) {
        // Wenn es hell ist, schalte die Lampe an P1 ein und die anderen Lampen an P3 und P4 aus
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P3, 0)
        pins.digitalWritePin(DigitalPin.P4, 0)
    }
    basic.pause(1000)
})
