let Ultrasonico_1 = 0
let ultrasonico_2 = 0
basic.forever(function () {
    Ultrasonico_1 = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    ultrasonico_2 = sonar.ping(
    DigitalPin.P8,
    DigitalPin.P12,
    PingUnit.Centimeters
    )
    if (Ultrasonico_1 > 200 || Ultrasonico_1 < 3) {
        Ultrasonico_1 = 200
    }
    if (ultrasonico_2 > 200 || ultrasonico_2 < 3) {
        ultrasonico_2 = 200
    }
    if (input.buttonIsPressed(Button.A)) {
        robotbit.MotorRun(robotbit.Motors.M1A, 150)
    }
    if (input.buttonIsPressed(Button.B)) {
        robotbit.MotorRun(robotbit.Motors.M1A, -150)
    }
    if (Ultrasonico_1 <= 5) {
        robotbit.MotorStopAll()
    }
    if (ultrasonico_2 <= 5) {
        robotbit.MotorStopAll()
    }
})
