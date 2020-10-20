input.onButtonPressed(Button.A, function () {
    willekeurig = randint(1, lijst.length - 1)
    sendnumber = lijst.removeAt(willekeurig)
    basic.showNumber(sendnumber)
    radio.sendNumber(sendnumber)
})
let sendnumber = 0
let willekeurig = 0
let lijst: number[] = []
radio.setGroup(0)
let max = 75
lijst = []
for (let index = 0; index <= max; index++) {
    lijst.push(index)
}
basic.showString("Max")
basic.showNumber(max)
