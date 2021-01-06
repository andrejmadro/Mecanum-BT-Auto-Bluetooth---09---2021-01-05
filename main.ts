bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . # . .
        # . . . #
        . # # # .
        `)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . # . .
        . # # # .
        # . . . #
        `)
    ServoLite.stop()
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            # # # # #
            # . . . #
            `)
        wuKong.mecanumRun(wuKong.RunList.Front, 100)
        strip.setBrightness(150)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
        strip.setBrightness(30)
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.show()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_UP) {
        basic.showLeds(`
            . # # # #
            # . . . .
            . # # # .
            . . . . #
            # # # # .
            `)
        wuKong.mecanumRun(wuKong.RunList.stop, 100)
        strip.setBrightness(10)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.show()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        basic.showLeds(`
            # # # . .
            # . . # .
            # # # # .
            # . . # .
            # # # . .
            `)
        wuKong.mecanumRun(wuKong.RunList.rear, 100)
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        strip.setBrightness(15)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        strip.setBrightness(250)
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
        strip.show()
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_UP) {
        basic.showLeds(`
            . # # # #
            # . . . .
            . # # # .
            . . . . #
            # # # # .
            `)
        wuKong.mecanumRun(wuKong.RunList.stop, 100)
        strip.setBrightness(10)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.show()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
        basic.showLeds(`
            . # # # .
            # . . . .
            # . . . .
            # . . . .
            . # # # .
            `)
        wuKong.mecanumRun(wuKong.RunList.right, 100)
        strip.setBrightness(150)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
        strip.show()
        strip.setBrightness(30)
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        strip.setBrightness(250)
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
        strip.show()
        basic.pause(100)
        strip.setBrightness(1)
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        strip.show()
        basic.pause(100)
        strip.setBrightness(250)
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
        strip.show()
        basic.pause(100)
        strip.setBrightness(1)
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        strip.show()
        basic.pause(100)
        strip.setBrightness(250)
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
        strip.show()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_UP) {
        basic.showLeds(`
            . # # # #
            # . . . .
            . # # # .
            . . . . #
            # # # # .
            `)
        wuKong.mecanumRun(wuKong.RunList.stop, 100)
        strip.setBrightness(10)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.show()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_DOWN) {
        basic.showLeds(`
            # # # . .
            # . . # .
            # . . # .
            # . . # .
            # # # . .
            `)
        wuKong.mecanumRun(wuKong.RunList.left, 100)
        strip.setBrightness(150)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
        strip.show()
        strip.setBrightness(30)
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        strip.setBrightness(250)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Yellow))
        strip.show()
        basic.pause(100)
        strip.setBrightness(1)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        strip.show()
        basic.pause(100)
        strip.setBrightness(250)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Yellow))
        strip.show()
        basic.pause(100)
        strip.setBrightness(1)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        strip.show()
        basic.pause(100)
        strip.setBrightness(250)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Yellow))
        strip.show()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_UP) {
        basic.showLeds(`
            . # # # #
            # . . . .
            . # # # .
            . . . . #
            # # # # .
            `)
        wuKong.mecanumRun(wuKong.RunList.stop, 100)
        strip.setBrightness(10)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.show()
    }
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # . # . .
            . . # . .
            . . # . .
            `)
        wuKong.mecanumDrift(wuKong.TurnList.Right)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_UP) {
        basic.showLeds(`
            . # # # #
            # . . . .
            . # # # .
            . . . . #
            # # # # .
            `)
        wuKong.mecanumRun(wuKong.RunList.stop, 100)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
        basic.showLeds(`
            . # # . .
            # . . # .
            . . # . .
            . # . . .
            # # # # .
            `)
        wuKong.mecanumDrift(wuKong.TurnList.Left)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_UP) {
        basic.showLeds(`
            . # # # #
            # . . . .
            . # # # .
            . . . . #
            # # # # .
            `)
        wuKong.mecanumRun(wuKong.RunList.stop, 100)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_DOWN) {
        basic.showLeds(`
            . # # # #
            . . . . #
            . . . # .
            . # . . #
            . . # # .
            `)
        wuKong.mecanumSpin(wuKong.TurnList.Left, 100)
        strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_UP) {
        basic.showLeds(`
            . # # # #
            # . . . .
            . # # # .
            . . . . #
            # # # # .
            `)
        wuKong.mecanumRun(wuKong.RunList.stop, 100)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_DOWN) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # .
            . . # . .
            . . # . .
            `)
        wuKong.mecanumSpin(wuKong.TurnList.Right, 100)
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_UP) {
        basic.showLeds(`
            . # # # #
            # . . . .
            . # # # .
            . . . . #
            # # # # .
            `)
        wuKong.mecanumRun(wuKong.RunList.stop, 100)
    }
})
let strip: neopixel.Strip = null
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    . . . # #
    . . . # #
    `)
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
basic.forever(function () {
    wuKong.mecanumWheel(
    wuKong.ServoList.S1,
    wuKong.ServoList.S2,
    wuKong.ServoList.S3,
    wuKong.ServoList.S4
    )
})
