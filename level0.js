var EmitterRing = require("./EmitterRing.js")

var planets = [
  {x: 0, y: 0, s:300, m: 500, r:100, artprop : "earth"}
  , {x: -400, y: 0, s:60, m: 100, r:100, artprop : "earth"}
  ]

var level = {
  rings: 5
  ,emitters: new EmitterRing(280, 40, 50)
  ,emitters2: new EmitterRing(500, 40, 20)
  ,winmsg: "You Win!"
}


// console.log(level.emitters.length)
var starsDraw = require("./starsDraw.js")
var drawImg = require('./drawImg.js')

var renderPlaying = function(g, dt) {
  g.stars.forEach(i => starsDraw(g.ctx, i))

  g.ctx.save()
    g.ctx.translate(-g.player.pos[0] + g.canvas.width/2, -g.player.pos[1] + g.canvas.height/2)

    planets.forEach(i => drawImg(g.ctx, [i.x, i.y], i.s, g.art[i.artprop]) )
    level.emitters.forEach( i => i.update(g.ctx, dt, planets, g.art["greenParticle"]) )
    level.emitters2.forEach( i => i.update(g.ctx, dt, planets, g.art["greenParticle"]) )

    g.player.draw(g.ctx, g.canvas)
    g.player.update(planets, dt, g.ctx)
    // g.player.collisionRing(level.emitters)

    // if (g.player.collisionCircle(planets[0], g.d)) {
    //   level.emitters.forEach(i => i.alive = false)
    //   level.rings = 0
    //   level.winmsg = "You Landed! \\o/"
    // }

    // g.ctx.fillStyle = "white"
    // g.ctx.font = "64px serif"
    // g.ctx.fillText(Math.round(1000/Math.round(dt*g.timestep))+"fps",100,100);
  g.ctx.restore()
}

module.exports = renderPlaying
