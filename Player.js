var ParticleEmitter = require("./ParticleEmitter.js")
var gravitation = require('./gravitation.js')
var collisionPlanet = require('./collisionPlanet.js')

var image = new Image()
    image.src = "art/flare.png" //http://opengameart.org/content/flare-effect-blender

var Player = function(p, v) {
    this.pos = p
    this.v = v
    this.score = 0
    this.angle = Math.PI
    this.trailer = new ParticleEmitter(  this.pos, 500  )
}

Player.prototype.update = function(canvas, ctx, dt, planets){
    var grav = gravitation(this.pos, this.v, dt, planets)
    this.pos = grav.pos
    this.v = grav.vel

    var collide = planets.map(i => collisionPlanet(this.pos, i) ).some(i => i)
    collide ? console.log(collide) : 0
    // this.angle = Math.atan(this.v[0], this.v[1])
    this.trailer.pos = this.pos
    this.trailer.update(ctx, dt, planets, image)
    this.draw(canvas, ctx)
}

Player.prototype.draw = function(canvas, ctx) {
    var size = 64
    ctx.save()
      ctx.translate(this.pos[0], this.pos[1])
      ctx.drawImage(  image, 0 - size/2, 0 - size/2, size, size  )

      //horizontal velocity
      ctx.strokeStyle = "green"
      ctx.beginPath()
      ctx.moveTo(0,0)
      ctx.lineTo(this.v[0]*25,0)
      ctx.stroke()

      //vertical velocity
      ctx.strokeStyle = "red"
      ctx.beginPath()
      ctx.moveTo(0,0)
      ctx.lineTo(0,this.v[1]*25)
      ctx.stroke()
    ctx.restore()
}

Player.prototype.collisionRing = function(ring) {
    for(var i = 0; i < ring.length; i++ ){
        if( this.collision(ring[i].pos, 50) ) {
            ring[i].alive = false
        }
    }
}

Player.prototype.collision = function(p, s) { //emitter
    return p[0] - s < this.pos[0] && this.pos[0] < p[0] + s && p[1] - s < this.pos[1] && this.pos[1] < p[1] + s
}

module.exports = Player
