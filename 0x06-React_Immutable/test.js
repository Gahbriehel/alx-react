// const Immutable = require("immutable")

// const map = Immutable.Map({a:1, b:2, c:3})

// console.log(map.toString())


const Immutable = require("immutable")

const menuArray = [['item1', 'fries'], ["item2", 'chicken'], ['secondItem', 'burger', ]]


const menuMap = Immutable.Map(menuArray)
console.log(menuMap.toString())


