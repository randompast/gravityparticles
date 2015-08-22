var gravity = require('./gravitationalAcceleration.js')

var Particle = function(p, v, life) {
	this.pos = p
	this.vel = v
	this.life = life
}
Particle.prototype.update = function(dt, p, v, life, plaents, d) {
	this.gravity(dt, planets, d)
	this.life -= 0.1
	if (this.life < 0) {
		this.life = life
		this.pos = p
		this.vel = v
	}
}

Particle.prototype.gravity = function(dt, planets, d) {
	var a = planets.map(i => gravity(this.pos, dt, i, d))
		.reduce( (a, b) => [ a[0] + b[0],  a[1] + b[1] ] )
	this.vel = [  this.vel[0] + a[0] * dt, this.vel[1] + a[1] * dt  ]
	this.pos = [  this.pos[0] + this.vel[0]*dt, this.pos[1] + this.vel[1]*dt  ]
}

Particle.prototype.draw = function(ctx, t, size, image) {
	ctx.drawImage(  image, this.pos[0] - size/2, this.pos[1] - size/2, size, size  )
}
module.exports = Particle
