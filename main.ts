radio.setGroup(99)
basic.showLeds(`
    # # # . .
    . # . . .
    . # . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    radio.sendValue("acc", input.acceleration(Dimension.Strength))
    led.toggle(4, 4)
    basic.pause(5)
})
