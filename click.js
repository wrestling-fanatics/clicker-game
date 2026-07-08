let points = 0
let pointsPerClick = 1
let pointsPerSecond = 0

let auto_cost = 50
let crazy_cost  = 100
let best_cost = 500
let insane_cost = 250
let super_cost = 75
let god_cost = 1000
let world_cost = 2500
let universe_cost = 10000
let broken_cost = 10000000
let dont_cost = 1

function updatePoints() {
  document.getElementById("count").textContent = points
  // document.getElementById("super_cost").textContent = 
}

function click() {
  points += pointsPerClick
  updatePoints()
}

document.getElementById("button").addEventListener("click", click)

document.getElementById("auto").addEventListener("click", function () {
  if (points >= auto_cost) {
    points -= auto_cost
    updatePoints()
    pointsPerSecond += 1
  }
})

document.getElementById("crazy").addEventListener("click", function () {
  if (points >= crazy_cost) {
    points -= crazy_cost
    updatePoints()
    pointsPerSecond += 10
  }
})

document.getElementById("best").addEventListener("click", function () {
  if (points >= best_cost) {
    points -= best_cost
    updatePoints()
    pointsPerSecond += 50
  }
})

document.getElementById("world").addEventListener("click", function () {
  if (points >= world_cost) {
    points -= world_cost
    updatePoints()
    pointsPerSecond += 200
  }
})

document.getElementById("insane").addEventListener("click", function () {
  if (points >= insane_cost) {
    points -= insane_cost
    updatePoints()
    pointsPerClick += 20
  }
})
document.getElementById("super").addEventListener("click", function () {
  if (points >= super_cost) {
    points -= super_cost
    updatePoints()
    pointsPerClick += 5
  }
})
document.getElementById("god").addEventListener("click", function () {
  if (points >= god_cost) {
    points -= god_cost
    updatePoints()
    pointsPerClick += 100
  }
})

document.getElementById("universe").addEventListener("click", function () {
  if (points >= universe_cost) {
    points -= universe_cost
    updatePoints()
    pointsPerClick += 500
  }
})

document.getElementById("broken").addEventListener("click", function () {
  if (points >= broken_cost) {
    points -= broken_cost
    updatePoints()
    pointsPerClick += 10000
  }
})

document.getElementById("dont").addEventListener("click", function () {
  if (points >= dont_cost) {
    points -= dont_cost
    updatePoints()
    pointsPerClick += 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  }
})

document.addEventListener("keydown", function (ev) {
  if (event.key === 'Space' || event.key === 'Enter')
    click()

})

function everysecond() {
  points+=pointsPerSecond
  updatePoints()
  setTimeout(everysecond, 1000)
}
everysecond()