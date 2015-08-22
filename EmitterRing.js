var ParticleEmitter	= require("./ParticleEmitter.js")

// var ParticleEmitter = function(p, s, r, count)
var EmitterRing = function(r, n, count) {
    var emitters = []
    for(var i = 0; i < n; i++) {
    	var x = r * Math.cos( 2*Math.PI*i/n )
    	var y = r * Math.sin( 2*Math.PI*i/n )
    	emitters[i] = new ParticleEmitter(  [x, y], 2, count)
    }
    return emitters
}

module.exports = EmitterRing
