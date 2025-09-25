users = [
  {name: "ben", age : 10},
  {name: "jessie", age : 32},
  {name: "OG", age : 90},
  {name: "clock", age : 12},
]

const filtered = users.filter(user => (user.age > 17 && user.age < 61))
const mapped = users.map(user => (`${user.name}` + " is " + `${user.age}`))
const sorted = users.sort((a,b) => (a.age > b.age ? 1 : -1))
const reduced = users.reduce((total, user)=> (total += user.age), 0)

console.table(reduced)