basic.showString("HELLO")
basic.forever(function () {
    // shows a happy face
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    // shows a sad face
    music.playTone(262, music.beat(BeatFraction.Whole))music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    music.playTone(294, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        # . . . #
        . # . # .
        # . # . #
        . # . # .
        # . . . #
        `)
    music.playTone(349, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    
})
