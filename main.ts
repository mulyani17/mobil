radio.onReceivedString(function (receivedString) {
    if (receivedString == "Open") {
        basic.showIcon(IconNames.Happy)
    } else if (receivedString == "Close") {
        basic.showIcon(IconNames.Asleep)
    } else if (receivedString == "LEDL") {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # . .
            . # # . .
            . . # . .
            `)
    } else if (receivedString == "LEDR") {
        basic.showLeds(`
            . . # . .
            . . # # .
            . . # # #
            . . # # .
            . . # . .
            `)
    } else if (receivedString == "F") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 101)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 101)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (receivedString == "B") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 101)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 101)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (receivedString == "L") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 101)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 101)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (receivedString == "R") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 101)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 101)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else {
        motor.motorStopAll()
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
})
basic.showIcon(IconNames.Heart)
radio.setGroup(1)
