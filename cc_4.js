//1. Employee class. Propeties: name and salary. Method: annual salary with console
class Employee {
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
        console.log(`Employee ${this.name}, has a montly salary of ${this.salary}`);//console info
    }
    calcAnnualSalary(){
        return this.salary * 12; //method for calculating yearly
    }
}