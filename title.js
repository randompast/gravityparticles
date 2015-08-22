module.exports = function(canvas, ctx){
  ctx.save()
      ctx.translate(canvas.width/2, canvas.height/2)
      ctx.fillStyle = "white"
      ctx.font = "128px serif"
      ctx.fillText("Orbit Hopper",-400,0)
      ctx.font = "64px serif"
      ctx.fillText("HTML5 game from scratch",-400,100)
      ctx.font = "32px serif"
      ctx.fillText("Intended to teach the Hohmann 2 burn transfer",-400,150)
      ctx.font = "16px serif"
      ctx.fillText("Did not quite get there....",-400,175)
  ctx.restore()
}
