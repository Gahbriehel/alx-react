const Immutable = require('immutable')

export default function getImmutableObject(object) {
    const map = Immutable.fromJS(object)
    // console.log(map)
    return map
}

// const example = {
//     fear: true,
//     smell: -1033575916.9145899,
//     wall: false,
//     thing: -914767132
// }

// console.log(getImmutableObject(example))