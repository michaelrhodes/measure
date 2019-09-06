var R = 6378137
var RAD = Math.PI / 180
var DEG = 180 / Math.PI
var atan2 = Math.atan2
var sqrt = Math.sqrt
var sin = Math.sin
var cos = Math.cos

module.exports = measure

function measure (a, b) {
  var φ1 = a[0] * RAD
  var φ2 = b[0] * RAD
  var λ1 = a[1] * RAD
  var λ2 = b[1] * RAD
  var Δφ = φ2 - φ1
  var Δλ = λ2 - λ1

  // Bearing
  var y = sin(Δλ) * cos(φ2)
  var x = cos(φ1) * sin(φ2) -
    sin(φ1) * cos(φ2) *
    cos(Δλ)
  var θ = atan2(y, x)

  // Distance
  var a = sin(Δφ / 2) * sin(Δφ / 2) +
    cos(φ1) * cos(φ2) *
    sin(Δλ / 2) * sin(Δλ / 2)
  var c = 2 * atan2(sqrt(a), sqrt(1 - a))
  var d = R * c

  return {
    bearing: ((θ * DEG) + 360) % 360,
    distance: d
  }
}
