module.exports = distance

function distance (a, b) {
  var R = 6378137
  var RAD = Math.PI / 180

  var φ1 = a[0] * RAD
  var φ2 = b[0] * RAD
  var λ1 = a[1] * RAD
  var λ2 = b[1] * RAD
  var Δφ = φ2 - φ1
  var Δλ = λ2 - λ1

  var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2)

  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}
