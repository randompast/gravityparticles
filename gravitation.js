var gravityAcc = require('./gravitationalAcceleration.js')

module.exports = function(p, v, dt, planets) {
	var a = planets.map(i => gravityAcc(p, dt, i))
		.reduce( (a, b) => [ a[0] + b[0],  a[1] + b[1] ] )
	var vel = [  v[0] + a[0] * dt, v[1] + a[1] * dt  ]
	var pos = [  p[0] + vel[0]*dt, p[1] + vel[1]*dt  ]
  return {pos: pos, vel: vel}
}
