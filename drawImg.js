module.exports = function(ctx, i, size, img){
    ctx.drawImage(  img, i[0]-size/2, i[1]-size/2, size, size  )
    // ctx.strokeStyle = "red"
    // ctx.beginPath()
    // ctx.arc(  i[0], i[1], 100,   0, 2*Math.PI  )
    // ctx.stroke()
}
