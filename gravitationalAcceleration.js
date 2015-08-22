module.exports = function(p, dt, planet) { //d multithreading issues
    var rx = (p[0] - planet.x)
    var ry = (p[1] - planet.y)
    var r = Math.sqrt( rx*rx + ry*ry )
    var a = -planet.m * 10/(r*r)
    var ax = a*rx/r
    var ay = a*ry/r
    return [ax, ay]
}
