input.onButtonPressed(Button.A, function () {
    basic.showNumber(Steps)
    basic.pause(3000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    Steps += 1
})
let Steps = 0
let Set = 0
