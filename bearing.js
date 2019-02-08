module.exports = bearing

function bearing (a, b) {
  var RAD = Math.PI / 180
  var DEG = 180 / Math.PI

  var φ1 = a.latitude * RAD
  var φ2 = b.latitude * RAD
  var λ1 = a.longitude * RAD
  var λ2 = b.longitude * RAD
  var Δλ = λ2 - λ1

  var y = Math.sin(Δλ) * Math.cos(φ2)
  var x = Math.cos(φ1) * Math.sin(φ2) -
    Math.sin(φ1) *
    Math.cos(φ2) *
    Math.cos(Δλ)

  var θ = Math.atan2(y, x)

  return ((θ * DEG) + 360) % 360
}
