module.exports = function(ctx, i) {
  ctx.strokeStyle = "white"
  ctx.beginPath()
  ctx.arc(i[0], i[1], 1, 0, 2*Math.PI)
  ctx.stroke()
}
