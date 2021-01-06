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
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_UP) {
        basic.showLeds(`
            . # # # #
            # . . . .
            . # # # .
            . . . . #
            # # # # .
            `)
        wuKong.mecanumRun(wuKong.RunList.stop, 100)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        basic.showLeds(`
            # # # . .
            # . . # .
            # # # # .
            # . . # .
            # # # . .
            `)
        wuKong.mecanumRun(wuKong.RunList.rear, 100)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_UP) {
        basic.showLeds(`
            . # # # #
            # . . . .
            . # # # .
            . . . . #
            # # # # .
            `)
        wuKong.mecanumRun(wuKong.RunList.stop, 100)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
        basic.showLeds(`
            . # # # .
            # . . . .
            # . . . .
            # . . . .
            . # # # .
            `)
        wuKong.mecanumRun(wuKong.RunList.right, 100)
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_UP) {
        basic.showLeds(`
            . # # # #
            # . . . .
            . # # # .
            . . . . #
            # # # # .
            `)
        wuKong.mecanumRun(wuKong.RunList.stop, 100)
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_DOWN) {
        basic.showLeds(`
            # # # . .
            # . . # .
            # . . # .
            # . . # .
            # # # . .
            `)
        wuKong.mecanumRun(wuKong.RunList.left, 100)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_UP) {
        basic.showLeds(`
            . # # # #
            # . . . .
            . # # # .
            . . . . #
            # # # # .
            `)
        wuKong.mecanumRun(wuKong.RunList.stop, 100)
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
    # . . . #
    . . . . #
    . . . . #
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
