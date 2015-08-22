var gravity = require('./gravitation.js')
var collision = require('./collisionPlanet.js')

module.exports = function(pos, particle, dt, planets) {
  if (particle.age > 0) {
    var age = particle.age - 0.1
    var grav = gravity(particle.pos, particle.vel, dt, planets)
    var collide = planets.map( i => collision(grav.pos, i) ).some(i => i)
    if (!collide) {
      return {pos : grav.pos, vel : grav.vel, age : age}
    } else {
      return {pos : pos, vel : [4*(Math.random()-0.5),4*(Math.random()-0.5)], age : 50}
      // return {pos : pos, vel : [0,0], age : 50}
    }
  } else {
    // return {pos : pos, vel : [0,0], age : 50}
    return {pos : pos, vel : [4*(Math.random()-0.5),4*(Math.random()-0.5)], age : 50}
  }
}
