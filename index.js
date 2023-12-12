const _ = require('lodash')

const ali = [1,[2,[3],[4]]]
const b = _.flattenDeep(ali)
console.log(b)