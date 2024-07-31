// Node uses CommonJS library under the hood, every file in node is a module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4_names')
const sayHi = require('./5_utils')
const data = require('./6_alternative_flavor')

require('./7_mind_grenade')
console.log(data);
sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)