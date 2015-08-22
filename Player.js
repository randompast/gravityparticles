var ParticleEmitter = require("./ParticleEmitter.js")
var gravityAcc = require('./gravitationalAcceleration.js')

var image = new Image()
    image.src = "art/flare.png" //http://opengameart.org/content/flare-effect-blender

var Player = function(p, v) {
    this.pos = p
    this.v = v
    this.score = 0
    this.angle = Math.PI
    this.trailer = new ParticleEmitter(  this.pos, 0, 500  )
}

Player.prototype.update = function(planets, dt, ctx){
    // var a = planets.map(i => gravity(this.pos, dt, i, d))
    //   .reduce( (a, b) => [ a[0]+b[0],  a[1]+b[1] ] )
    // this.v = [  this.v[0] + dt*a[0], this.v[1] + dt*a[1]  ]
    // this.pos = [this.pos[0]+this.v[0]*dt, this.pos[1]+this.v[1]*dt]
    this.gravity(dt, planets)

    this.angle = Math.atan(this.v[0], this.v[1])
    this.trailer.pos = this.pos
    this.trailer.update(dt, ctx, image)
}

Player.prototype.draw = function(ctx, canvas) {
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

Player.prototype.collision = function(p, s) {
    return p[0] - s < this.pos[0] && this.pos[0] < p[0] + s && p[1] - s < this.pos[1] && this.pos[1] < p[1] + s
}

Player.prototype.collisionCircle = function(p, d) {
    d.rx = (this.pos[0] - p.x)
    d.ry = (this.pos[1] - p.y)
    d.r = Math.sqrt( d.rx*d.rx + d.ry*d.ry )
    if (d.r < p.r) {
        return true
    }
}

Player.prototype.gravity = function(dt, planets, d) {
	var a = planets.map(i => gravityAcc(this.pos, dt, i, d))
		.reduce( (a, b) => [ a[0] + b[0],  a[1] + b[1] ] )
	this.v = [  this.v[0] + a[0] * dt, this.v[1] + a[1] * dt  ]
	this.pos = [  this.pos[0] + this.v[0]*dt, this.pos[1] + this.v[1]*dt  ]
}

module.exports = Player
