module.exports = [
    //controls, name, source
        [  ['up', 'w'], "up", require("./movement/up.js")  ],
        [  ['down', 's'], "down", require("./movement/down.js")  ],
        [  ['left', 'a'], "left", require("./movement/left.js")  ],
        [  ['right', 'd'], "right", require("./movement/right.js")  ],
        // [  ['q'], "strafeleft", require("./movement/strafeleft.js")  ],
        // [  ['e'], "straferight", require("./movement/straferight.js")  ],
    ]
