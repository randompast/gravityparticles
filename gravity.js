module.exports = function(p, dt, planet, d) { //d multithreading issues
    d.rx = (p[0] - planet.x)
    d.ry = (p[1] - planet.y)
    d.r = Math.sqrt( d.rx*d.rx + d.ry*d.ry )
    d.a = -planet.m * 10/(d.r*d.r)
    d.ax = d.a*d.rx/d.r
    d.ay = d.a*d.ry/d.r
    return [d.ax, d.ay]
}
