module.exports = function(pos, planet) {
  var rx = (pos[0] - planet.x)
  var ry = (pos[1] - planet.y)
  var r = Math.sqrt( rx*rx + ry*ry )
  return r < planet.s/2
}
