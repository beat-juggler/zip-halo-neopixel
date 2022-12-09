input.onButtonPressed(Button.A, function () {
    colour = neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255))
    strip.setBrightness(50)
    speed = 200
})
input.onButtonPressed(Button.AB, function () {
    colour = neopixel.rgb(0, 100, 255)
    strip.setBrightness(255)
    speed = 0
})
input.onButtonPressed(Button.B, function () {
    colour = neopixel.rgb(100, 255, 0)
    strip.setBrightness(100)
    speed = 100
})
let speed = 0
let colour = 0
let strip: neopixel.Strip = null
let position = 1
strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
colour = neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255))
speed = 200
strip.setBrightness(50)
strip.clear()
basic.forever(function () {
    strip.setPixelColor(position, colour)
    if (position < 24) {
        position += 1
        strip.show()
        basic.pause(speed)
        strip.clear()
    } else if (position >= 24) {
        position = 0
    }
})
