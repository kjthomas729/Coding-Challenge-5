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
  
