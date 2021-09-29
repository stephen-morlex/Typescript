let id: number = 5
let developer: string = 'Stephen'
let isActive: boolean = true

let arr: any[] = [1, 'string', false]

let person = developer
console.log('ID:', id)
console.log('Developer name:', person)


// Union
let union: string | number
union: 'Hey union'

// Enum
enum Direction{
    up= 'up',
    Down='Down',
    Right='Right',
    Left='Left'
}

console.log(Direction.Left)


// Object

type User = {
    id: number
    name:string
}
const user: User = {
    id:4,
    name:'Morlex'
}
console.log(user)

// Type assertation

let uid: any
let UserId = <string>uid

UserId = '200'
console.log(UserId)


// Funnction
function addNum(x:number, y:number): any {
    return x*y
}
console.log(addNum(5, 3))


// Interfaces

interface Person  {
    id: number
    name:string
}
const man: Person = {
    id:4,
    name:'Morlex'
}
console.log(man)

// Classes

class animal{
    id: number
    name: string
    
    constructor(id:number,name:string){
        this.id = id
        this.name =name
    }
}
const dog = new animal(1, 'Spike')
console.log(dog)

// Generic

function getArray<Type>(items:Type[]):Type[] {
    return Array().concat(items)
}
let numArray = getArray<number>([1, 2, 3, 4, 5, 6]);
let strArray = getArray<string>(['step','joe','doe']);

numArray.splice(3)
console.log(numArray)


// VirtualPoint

class VirtualPoint {
  x: number;
  y: number;
 
  constructor(x: number=9, y: number=3) {
    this.x = x;
    this.y = y;
  }
}
 
const newVPoint = new VirtualPoint();
console.log(newVPoint); // logs "13, 56"
