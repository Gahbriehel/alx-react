const Immutable = require('immutable')

function getImmutableObject(object) {
    const map = Immutable.Map(object)
    console.log(map)
}

const example = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
}

console.log(getImmutableObject(example))