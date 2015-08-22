module.exports = function(canvas) {
  // console.log("Making stars") //width*height/10000, sparse enough
  return Array.from(Array(Math.floor(canvas.width*canvas.height/10000))
    .keys()).map( i => [Math.random()*canvas.width, Math.random()*canvas.height] )
}
