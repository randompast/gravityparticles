// document.body.style.backgroundImage = "url(art/webtreats.jpg)" //https://www.flickr.com/photos/webtreatsetc/4081217544
document.body.style.background = "black"
//https://jsfiddle.net/5vnj2sx2/1/
//beefy index.js $PORT -- -t babelify
require("es6-shim")

var keyboardJS = require("keyboardjs")

var fit = require('canvas-fit')
  var canvas = document.body.appendChild(document.createElement('canvas'))
  window.addEventListener('resize', fit(canvas), false)
  var ctx = canvas.getContext('2d')

var ParticleEmitter = require("./ParticleEmitter.js")
var EmitterRing = require("./EmitterRing.js")
var Player = require("./Player.js")

var img = require("./img.js")
  var art = {"earth": img(0)
    ,"greenParticle" : img(1)
    ,"spaceFlorida" : img(2)}
  var drawImg = require('./drawImg.js')

var audio = new Audio('art/gravity.mp3')
    audio.loop = true
    audio.play()

var player = new Player([300,0], [0,4])

    keyboardJS.bind('left', function(e) {
        player.v[0] -= 0.1
    });
    keyboardJS.bind('right', function(e) {
        player.v[0] += 0.1
    });
    keyboardJS.bind('up', function(e) {
        player.v[1] -= 0.1
    });
    keyboardJS.bind('down', function(e) {
        player.v[1] += 0.1
    });

// var timestep = 30
var planets = [
  {x: 0, y: 0, s:300, m: 500, r:100, artprop : "earth"}
  , {x: -400, y: 0, s:60, m: 100, r:100, artprop : "greenParticle"}
  ]

var level = {
  rings: 5
  ,emitters: new EmitterRing(300, 5)
  ,winmsg: "You Win!"
}

var rings = 5
var emitters = new EmitterRing(300, 5, 10)

var winstate = "You Win!"

var titlescreen = require("./title.js")
var endscreen = require("./endscreen.js")

var stars = require("./stars.js")(canvas)
var starsDraw = require("./starsDraw.js")


var game = {
  "canvas": canvas
  , "ctx" : ctx
  , "art" : art
  , "player" : player
  , "planets" : planets
  , "stars" : require("./stars.js")(canvas)
  , "d" : {} //dummy
  , "timestep" : 30
  , "time" : Date.now()
  , "start" : true
  }

game.stars.forEach(i => starsDraw(ctx, i))
titlescreen(canvas, ctx)

keyboardJS.bind('space', function(e) {
  if(game.start) {
    game.time = Date.now()
    render()
    game.start = !true
  }
});

var renderLevel0 = require("./level0.js")

var render = function() {
  ctx.clearRect(0,0,canvas.width,canvas.height)
  var dt = Math.min((Date.now() - game.time)/game.timestep, 60)
  game.time = Date.now()

  var length = emitters.filter(i => i.alive === true).length

  if (length > 0 && rings > 0) {
    renderLevel0(game, dt)
  } else if (length === 0 && rings > 0) {
    rings -= 1
    emitters = new EmitterRing(300, 10)
  } else {
    endscreen(canvas, ctx, art.spaceFlorida, winstate)
  }

  game.ctx.fillStyle = "white"
  game.ctx.font = "64px serif"
  game.ctx.fillText(Math.round(1000/Math.round(dt*game.timestep))+"fps",game.canvas.width-150 ,game.canvas.height-20);
  requestAnimationFrame(render)
}
