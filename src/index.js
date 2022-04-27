const Planet = require('./planet')
const planetOperations = require('./planetOperations')

let planets = [
    new Planet('Mercurio',0.39),
    new Planet('Venus',0.72),
    new Planet('Terra',1),
    new Planet('Marte',1.52),
    new Planet('Jupiter',5.2),
    new Planet('Saturno',9.53),
    new Planet('Urano',17.1),
    new Planet('Netuno',30),
]

planets.forEach(planet => {
    distanceFromSun = planetOperations.convertAUtoKM(planet.auToSun).toFixed(2)
    console.log(`${planet.name} - ${planet.auToSun}AU - ${distanceFromSun}KM`)
})
