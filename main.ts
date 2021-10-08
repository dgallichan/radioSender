radio.setGroup(99)
basic.forever(function () {
    radio.sendValue("acc", input.acceleration(Dimension.Strength))
    basic.pause(500)
})
