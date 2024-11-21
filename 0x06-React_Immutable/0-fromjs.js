const Immutable = require('immutable')

function getImmutableObject(object) {
    return Immutable.fromJS(object)
}

module.exports = getImmutableObject

// const example = {
//     fear: true,
//     smell: -1033575916.9145899,
//     wall: false,
//     thing: -914767132
// }

// console.log(getImmutableObject(example))