// Scott Fennell U86364709
//1. Employee class. Propeties: name and salary. Method: annual salary with console
class Employee {
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
        console.log(`Employee ${this.name}, has a monthly salary of $${this.salary}.`);//console info
    }
    calcAnnualSalary(){
        return this.salary * 12; //method for calculating yearly
    }
}

//2.) Manager Subclass. Add department property. Override calcAnnualSalary. Bonus. Console.
class Manager extends Employee{
    constructor(name, salary, department){
        super(name, salary);
        this.department = department;
    }
    calcAnnualSalary(){
        let bonus = this.salary * 0.15;
        let Salary_Bonus = super.calcAnnualSalary() + bonus;
        console.log(`Manager ${this.name}, works in the ${this.department} has a bonus of $${bonus} and total annual salary including bonus of $${Salary_Bonus}.`);
        return Salary_Bonus;
    }
}

//3.) Instantiate Manager Objects. Create two managers. Calculate and log data.
const manager_BR = new Manager("Bob Ross", 6600.00, "Digital Marketing"); //test data 1
const manager_DL = new Manager("Debbie Little", 7205.00, "Finance"); //test data 2

console.log("Managers Annual Salary:");
console.log(manager_BR.calcAnnualSalary());
console.log(manager_DL.calcAnnualSalary());