module.exports = bearing

function bearing (a, b) {
  var RAD = Math.PI / 180
  var DEG = 180 / Math.PI

  var φ1 = a[0] * RAD
  var φ2 = b[0] * RAD
  var λ1 = a[1] * RAD
  var λ2 = b[1] * RAD
  var Δλ = λ2 - λ1

  var y = Math.sin(Δλ) * Math.cos(φ2)
  var x = Math.cos(φ1) * Math.sin(φ2) -
    Math.sin(φ1) *
    Math.cos(φ2) *
    Math.cos(Δλ)

  var θ = Math.atan2(y, x)

  return ((θ * DEG) + 360) % 360
}
