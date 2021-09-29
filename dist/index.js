"use strict";
let id = 5;
let developer = 'Stephen';
let isActive = true;
let arr = [1, 'string', false];
let person = developer;
console.log('ID:', id);
console.log('Developer name:', person);
// Union
let union;
union: 'Hey union';
// Enum
var Direction;
(function (Direction) {
    Direction["up"] = "up";
    Direction["Down"] = "Down";
    Direction["Right"] = "Right";
    Direction["Left"] = "Left";
})(Direction || (Direction = {}));
console.log(Direction.Left);
const user = {
    id: 4,
    name: 'Morlex'
};
console.log(user);
// Type assertation
let uid;
let UserId = uid;
UserId = '200';
console.log(UserId);
// Funnction
function addNum(x, y) {
    return x * y;
}
console.log(addNum(5, 3));
const man = {
    id: 4,
    name: 'Morlex'
};
console.log(man);
// Classes
class animal {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const dog = new animal(1, 'Spike');
console.log(dog);
// Generic
function getArray(items) {
    return Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5, 6]);
let strArray = getArray(['step', 'joe', 'doe']);
numArray.splice(3);
console.log(numArray);
// VirtualPoint
class VirtualPoint {
    constructor(x = 9, y = 3) {
        this.x = x;
        this.y = y;
    }
}
const newVPoint = new VirtualPoint();
console.log(newVPoint); // logs "13, 56"
