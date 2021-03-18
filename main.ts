let projectile: Sprite = null
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . 5 5 f f f 5 5 . . . . . 
    . . . . 5 5 f f f 5 5 . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . 7 7 . . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    `, SpriteKind.Player)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 5 5 5 f . . . . . . . . . . 
        . 5 f 5 5 f 5 5 f 5 5 f 5 5 . . 
        . 5 5 5 5 f 5 5 f 5 5 f 5 5 . . 
        . 5 5 5 5 f 5 5 f 5 5 f 5 5 5 f 
        . 5 5 5 5 f 5 5 f 5 5 f 5 5 5 f 
        . 5 5 5 5 f 5 5 f 5 5 f 5 5 . . 
        . 5 5 5 5 f 5 5 f 5 5 f 5 5 . . 
        . . . . 5 f 5 5 f 5 5 f 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, randint(-25, 25), randint(25, -25))
    mySprite.lifespan = 3000
    if (mySprite.vx < 0) {
        projectile.image.flipX()
    }
}) 