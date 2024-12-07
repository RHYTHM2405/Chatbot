class Cab {
    constructor(id, x, y, inUse) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.inUse = inUse;
    }
}

function calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function findNearbyCabs(cabs, empX, empY, maxDistance) {
    const nearbyCabs = cabs.filter(cab => cab.inUse && calculateDistance(empX, empY, cab.x, cab.y) <= maxDistance);
    nearbyCabs.sort((a, b) => calculateDistance(empX, empY, a.x, a.y) - calculateDistance(empX, empY, b.x, b.y));
    return nearbyCabs;
}

const cabs = [
    new Cab(1, 1.0, 2.0, true),
    new Cab(2, 3.0, 4.0, false),
    new Cab(3, 5.0, 6.0, true),
    new Cab(4, 7.0, 8.0, true),
    new Cab(5, 2.0, 3.0, false)
];

const employeeX = 3.0;
const employeeY = 3.0;
const maxSearchDistance = 5.0;

const nearbyCabs = findNearbyCabs(cabs, employeeX, employeeY, maxSearchDistance);

console.log("Nearby cabs currently in use:");
nearbyCabs.forEach(cab => {
    console.log(`Cab ID: ${cab.id} - Location: (${cab.x}, ${cab.y})`);
});
