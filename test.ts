basic.forever(function () {
    OD01.printString("1print1", false)
    OD01.printString("2print2", true)
    OD01.printNumber(33, false)
    OD01.printNumber(44, false)
    basic.pause(1000)
    OD01.clear()
    OD01.showString("5string5", 0, 0, 1)
    OD01.showString("6string6", 0, 1, 0)
    OD01.showNumber(77, 0, 2, 1)
    OD01.showNumber(88, 0, 3, 0)
    OD01.horizontalLine(0, 36, 67, 1)
    OD01.verticalLine(97, 0, 54, 1)
    OD01.rectangle(0, 50, 30, 62, 1)
    OD01.pixel(15, 56, 1)
    basic.pause(500)
    OD01.invert(true)
    basic.pause(500)
    OD01.invert(false)
    OD01.horizontalLine(0, 36, 67, 0)
    OD01.verticalLine(97, 0, 54, 0)
    OD01.rectangle(0, 50, 30, 62, 0)
    OD01.pixel(15, 56, 0)
    OD01.showString("           ", 0, 0, 1)
    OD01.showString("           ", 0, 1, 1)
    OD01.showString("           ", 0, 2, 1)
    OD01.showString("           ", 0, 3, 1)
    basic.pause(1000)
})

