class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
      console.log(`Employee Name: ${this.name}, Monthly Salary: ${this.salary}`);
    }
  
    calculateAnnualSalary() {
      return this.salary * 12;
    }
  }
  
  class Manager extends Employee {
    constructor(name, salary, department) {
      super(name, salary);
      this.department = department;
    }
  
    calculateAnnualSalary() {
      const annualSalary = super.calculateAnnualSalary();
      const bonus = annualSalary * 0.15;
      const totalSalary = annualSalary + bonus;
      console.log(`Bonus: ${bonus}, Total Annual Salary: ${totalSalary}`);
      return totalSalary;
    }
  }
  
  // Example instantiation
  const manager = new Manager('Alice Smith', 5000, 'Engineering');
  console.log(`Annual Salary with Bonus: ${manager.calculateAnnualSalary()}`);
  // Test Data
const manager1 = new Manager('Bob Ross', 6600, 'Digital Marketing');
const manager2 = new Manager('Debbie Little', 7205, 'Finance');

console.log(`Bob Ross's Annual Salary with Bonus: ${manager1.calculateAnnualSalary()}`);
console.log(`Debbie Little's Annual Salary with Bonus: ${manager2.calculateAnnualSalary()}`);

