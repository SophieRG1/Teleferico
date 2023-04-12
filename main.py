Ultrasonico_1 = 0
ultrasonico_2 = 0

def on_forever():
    global Ultrasonico_1, ultrasonico_2
    Ultrasonico_1 = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.CENTIMETERS)
    ultrasonico_2 = sonar.ping(DigitalPin.P8, DigitalPin.P12, PingUnit.CENTIMETERS)
    if Ultrasonico_1 > 200 or Ultrasonico_1 < 3:
        Ultrasonico_1 = 200
    if ultrasonico_2 > 200 or ultrasonico_2 < 3:
        ultrasonico_2 = 200
    if input.button_is_pressed(Button.A):
        robotbit.motor_run(robotbit.Motors.M1A, 150)
    if input.button_is_pressed(Button.B):
        robotbit.motor_run(robotbit.Motors.M1A, -150)
    if Ultrasonico_1 <= 5:
        robotbit.motor_stop_all()
    if ultrasonico_2 <= 5:
        robotbit.motor_stop_all()
basic.forever(on_forever)
