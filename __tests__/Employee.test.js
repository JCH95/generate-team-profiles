const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

// Creates an Employee Role to be filled
test('makes an employee role', () => {
    const employee = new Employee('Employee');
    expect(employee.getRole()).toBe('Employee');
});

// Creates an Employee object to fill Employee role
test('makes an employee object', () => {
    const employee = new Employee('Josh', 1, "joosh8@somemail.com");

    expect(employee.name).toBe('Josh');
    expect(employee.name.length).toBeGreaterThan(0);
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

module.exports = Employee;