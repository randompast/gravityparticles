module.exports = function(keyboardJS, keysDown) {
    return function (controls) {
        controls.forEach( function(i) {
            keyboardJS.bind( i[0], function(e) {
                keysDown[ i[1] ] = true //Change to bool array? or to a count?
            }, function() {
                delete keysDown[ i[1] ] //maybe --1?
            })
        })
    }
}
