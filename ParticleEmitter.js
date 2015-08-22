var particleUpdate = require('./particleUpdate.js')

var randV = function(s) {
	return [  (Math.random()-0.5)*s, (Math.random()-0.5)*s  ]
}

var ParticleEmitter = function(p, s, count) {
	this.pos = p
	this.speed = s
	this.alive = true
	// this.particles = Array.from(Array(count).keys()).map( i => (new Particle(this.pos, randV(this.speed), i)) )
	this.particles = Array.from(Array(count).keys()).map( i => ({pos: this.pos, vel: randV(this.speed), age: i}) )
}

ParticleEmitter.prototype.update = function(ctx, dt, planets, image) {
	var size = 8
	if (planets.length > 0 && this.alive) {
		this.particles = this.particles.map( i => particleUpdate(this.pos, i, dt, planets) )
		this.particles.forEach( i => ctx.drawImage(  image, i.pos[0] - size/2, i.pos[1] - size/2, size, size  ) )
		// console.log(planets.length) //sometimes undefined!?
	}
}

module.exports = ParticleEmitter
