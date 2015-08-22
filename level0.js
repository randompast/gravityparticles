var EmitterRing = require("./EmitterRing.js")

var planets = [
  {x: 0, y: 0, s:300, m: 500, r:100, artprop : "earth"}
  , {x: -400, y: 0, s:60, m: 100, r:100, artprop : "earth"}
  ]

var level = {
  rings: 5
  ,emitters: new EmitterRing(300, 10, 100)
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
    // level.emitters.forEach(i => i.update(dt, g.ctx, g.art.greenParticle, planets, g.d))
    // level.emitters.forEach(i => i.update(g, dt, planets))
    // level.emitters.forEach(e =>
    //   e.alive === true ? e.particles.forEach(i => i.update(dt, e.pos, [0,0], e.particles.length, plaents, g.d)) : false)
    level.emitters.forEach(i =>
      i.alive === true ? i.particles.forEach(i => i.gravity(dt, planets, g.d)) : false)
    level.emitters.forEach(i => i.alive === true ?
      i.particles.forEach(i => i.draw(g.ctx, dt, 8, g.art["greenParticle"])) : false)

    g.player.draw(g.ctx, g.canvas)
    g.player.update(planets, dt, g.d, g.ctx)
    g.player.collisionRing(level.emitters)

    // if (g.player.collisionCircle(planets[0], g.d)) {
    //   level.emitters.forEach(i => i.alive = false)
    //   level.rings = 0
    //   level.winmsg = "You Landed! \\o/"
    // }

    g.ctx.fillStyle = "white"
    g.ctx.font = "64px serif"
    g.ctx.fillText(Math.round(1000/Math.round(dt*g.timestep))+"fps",100,100);
  g.ctx.restore()
}

module.exports = renderPlaying
