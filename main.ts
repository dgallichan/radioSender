radio.setGroup(99)
basic.forever(function () {
    radio.sendValue("acc", input.acceleration(Dimension.Strength))
    led.toggle(2, 2)
    basic.pause(100)
})
