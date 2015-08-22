module.exports = function(canvas, ctx, spaceFlorida, winstate) {
  ctx.drawImage(spaceFlorida, 0, 0, canvas.width, canvas.height)
  ctx.save()
      ctx.translate(canvas.width/2, canvas.height/2)
      ctx.fillStyle = "white"
      ctx.font = "128px serif"
      ctx.fillText(winstate, -300, 0)
  ctx.restore()
}
