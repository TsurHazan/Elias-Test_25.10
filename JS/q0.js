import {Person} from "./Person.js";
import {Student} from "./Student.js"
let a =new Person("tsur","Hazan",22);
let b =new Student ("yair","israel",12 ,6);

console.log(a.printName());
console.log(b.printName());

console.log(a.printAge());
console.log(b.printAge());

