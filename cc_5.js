// Employee Class
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
        console.log(`Employee Name: ${this.name}, Monthly Salary: ${this.salary}`);
    }

    // Method to calculate annual salary
    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

// Test instantiation
const emp = new Employee("John Doe", 5000);
console.log(`Annual Salary: ${emp.calculateAnnualSalary()}`);
