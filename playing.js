module.exports = function(canvas, ctx, dt, d, stars, player, emitters, playerplanets, art) {
  stars.forEach(i => starsDraw(ctx, i))

  ctx.save()
    ctx.translate(-player.pos[0] + canvas.width/2, -player.pos[1] + canvas.height/2)

    playerplanets.forEach(i => drawImg(ctx, [i.x, i.y], i.s, art.earth) )
    emitters.forEach(i => i.update(dt, ctx, art.greenParticle))
    player.draw(ctx, canvas)

    player.update(playerplanets, dt, d, ctx)
    player.collisionRing(emitters)
    if (player.collisionCircle(playerplanets[0], d)) {
      emitters.forEach(i => i.alive = false)
      rings = 0
      winstate = "You Landed! \\o/"
    }
    ctx.fillStyle = "white"
    ctx.font = "64px serif"
    ctx.fillText(Math.round(1000/Math.round(dt*timestep)),100,100);
  ctx.restore()
}
