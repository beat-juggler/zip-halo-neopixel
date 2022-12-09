def on_button_pressed_a():
    global colour
    colour = randint(0, 255)
input.on_button_pressed(Button.A, on_button_pressed_a)

position = 1
strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
colour = randint(0, 255)
strip.set_brightness(100)
strip.clear()

def on_forever():
    global position
    strip.set_pixel_color(position, colour)
    if position < 24:
        position += 1
        strip.show()
        basic.pause(200)
        strip.clear()
    elif position >= 24:
        position = 0
basic.forever(on_forever)
