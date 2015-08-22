var Particle = require("./Particle.js")

var randV = function(s) {
	return [  (Math.random()-0.5)*s, (Math.random()-0.5)*s  ]
}

var ParticleEmitter = function(p, s, count) {
	this.pos = p
	this.speed = s
	this.alive = true
	this.particles = Array.from(Array(count).keys()).map( i => (new Particle(this.pos, randV(this.speed), i)) )
	// this.particles = Array.from(Array(count).keys()).map( i => ({pos: this.pos, s}) )
}

ParticleEmitter.prototype.update = function(t, ctx, image) {
// ParticleEmitter.prototype.update = function(g, dt, planets) {
	//emit, "cull"/reposition, move, draw
	// console.log(planets)
	if (this.alive) {
		// this.particles.forEach(i => i.gravity(dt, planets, g.d))
    // this.particles.forEach(i => i.draw(g.ctx, dt, 8, g.art["greenParticle"]))
		// for (var i = 0; i < this.particles.length; i++) {
		// 	this.particles[i].update(t, this.pos, randV(this.speed), this.particles.length)
		// 	this.particles[i].draw(ctx, t, 8, image)
		// }
	}
}

module.exports = ParticleEmitter
