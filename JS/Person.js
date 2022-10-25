export class Person{
    constructor(firstName,lastName,age)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
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