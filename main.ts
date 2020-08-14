sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    music.baDing.play()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(-2)
    music.powerDown.play()
    otherSprite.destroy()
})
let pokebola: Sprite = null
let mySprite: Sprite = null
game.splash("VALERIA LA MOLACHA")
music.setVolume(15)
music.jumpUp.play()
tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.castle.tileDarkGrass3], TileScale.Sixteen))
info.startCountdown(60)
info.setScore(0)
let Valeria = sprites.create(img`
    . . . f f f f f f f . . . . . . 
    . . e 4 4 4 4 4 4 f e . . . . . 
    . e e 4 4 4 4 4 4 4 e e . . . . 
    . e 4 f f 4 4 f f 4 4 e e . . . 
    e e 4 f f 4 4 f f 4 4 4 e . . . 
    e e 4 4 3 4 4 4 4 3 4 4 e e . . 
    e . . 4 4 3 3 3 3 4 4 . . e . . 
    . . . . f f f f f f . . . . . . 
    . . . f f 5 5 5 5 f f . . f . . 
    f f f f 5 5 5 5 5 f f f f f . . 
    . . . f 5 5 5 5 5 f . . . . . . 
    . . . f 5 f f f 5 f f . . . . . 
    . . . f f f f f f f f . . . . . 
    . . . . f . . . . f . . . . . . 
    . . . . f . . . f f . . . . . . 
    . . f f f . . . f f f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Valeria)
scene.cameraFollowSprite(Valeria)
game.onUpdateInterval(2000, function () {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . f . . 
        . . . . . . . f f . . . . . . . . f 5 f . 
        . . . . . . f c f . . . . . . . f 5 4 4 f 
        . . . . . . f 5 f . . . . f f f 5 4 4 4 f 
        . . . . . f 5 4 f . . f f c c f 4 4 4 f . 
        . . . . . f 5 5 5 f f 5 5 c f 4 4 4 f . . 
        . . . . f 5 5 5 5 5 5 5 5 f f 4 4 f . . . 
        . . . f 5 5 5 5 5 5 5 5 5 f c f 4 4 f . . 
        . . f 1 5 5 5 5 5 5 5 5 5 f c c f 4 f . . 
        . . f f 5 5 5 5 5 5 5 5 5 4 f f 4 f . . . 
        . . f 5 5 5 5 1 f 5 5 5 4 4 f f f . . . . 
        . . . f 5 5 5 f f 2 2 5 4 c c f . . . . . 
        . . . . f 4 5 5 5 2 4 4 4 4 4 f . . . . . 
        . . . f 5 4 4 4 4 4 4 f 4 4 c f . . . . . 
        . . . f f f 5 5 5 5 f 4 4 4 4 f . . . . . 
        . . . . f 4 f 5 5 5 5 f 4 4 4 f . . . . . 
        . . . . f f f f f 4 4 4 4 4 f . . . . . . 
        . . . . . . . . . f f f 4 f f . . . . . . 
        . . . . . . . . . . f 5 5 4 f . . . . . . 
        . . . . . . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    mySprite.setPosition(randint(0, 250), randint(0, 250))
})
game.onUpdateInterval(200, function () {
    pokebola = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 f f 2 2 2 2 2 . . . 
        . . 2 2 2 f 1 1 f 2 2 2 2 . . . 
        . . f f f f 1 1 f f f f f . . . 
        . . f 1 1 f 1 1 f 1 1 1 f . . . 
        . . f 1 1 1 f f 1 1 1 1 f . . . 
        . . . f 1 1 1 1 1 1 1 f . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    pokebola.setPosition(randint(0, 250), randint(0, 250))
})
