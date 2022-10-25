import { Person } from "./Person.js";

export class Student extends Person{
    constructor(firstName,lastName,age,grade)
    {
      super(firstName,lastName,age);
        this.grade=grade;
    }
    printName()
    {
      console.log(this.firstName);
    }
    printAge()
    {
      console.log(this.age);
    }
}

 
