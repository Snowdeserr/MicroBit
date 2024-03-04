let lampeAn = false
let helligkeit2 = 0
function abwechselndeLEDs () {
    while (lampeAn) {
        // Anpassen der Pause nach Bedarf
        basic.pause(500)
        // Wenn es dunkel ist, schalte die Lampe an P3 aus
        pins.digitalWritePin(DigitalPin.P3, 1)
        // Wenn es dunkel ist, schalte die Lampe an P4 aus
        pins.digitalWritePin(DigitalPin.P4, 0)
        // Anpassen der Pause nach Bedarf
        basic.pause(500)
        // Wenn es dunkel ist, schalte die Lampe an P4 aus
        pins.digitalWritePin(DigitalPin.P4, 1)
        // Wenn es dunkel ist, schalte die Lampe an P3 aus
        pins.digitalWritePin(DigitalPin.P3, 0)
    }
}
input.onButtonPressed(Button.A, function () {
    if (lampeAn) {
        lampeAn = false
        // Wenn die Taste A gedrückt wird und lampeAn auf false gesetzt wird, schalte die Lampen aus
        pins.digitalWritePin(DigitalPin.P3, 0)
        pins.digitalWritePin(DigitalPin.P4, 0)
    } else {
        lampeAn = true
        // Wenn die Taste A gedrückt wird und lampeAn auf true gesetzt wird, starte die Funktion abwechselndeLEDs
        abwechselndeLEDs()
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
