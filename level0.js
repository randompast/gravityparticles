var drawImg = require('./drawImg.js')
var EmitterRing = require("./EmitterRing.js")

var planets = [
  {x: 0, y: 0, s:300, m: 500, r:100, artprop : "earth"}
  , {x: -400, y: 0, s:60, m: 100, r:100, artprop : "earth"}
  ]

var level = {
  rings: 5
  ,emitters: new EmitterRing(300, 30, 10)
  ,winmsg: "You Win!"
}


var renderPlaying = function(g, dt) {
    planets.forEach(i => drawImg(g.ctx, [i.x, i.y], i.s, g.art[i.artprop]) )
    level.emitters.forEach( i => i.update(g.ctx, dt, planets, g.art["greenParticle"]) )

    g.player.update(g.canvas, g.ctx, dt, planets) //gravity and planet collision
    g.player.collisionRing(level.emitters) //emitter source collisions
}

module.exports = renderPlaying
