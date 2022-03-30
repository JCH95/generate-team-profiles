const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('makes an employee role', () => {
    const employee = new Employee('Employee');
    expect(employee.getRole()).toBe('Employee');
});

test('makes an employee object', () => {
    const employee = new Employee('Josh', 1, "joosh8@somemail.com");

    expect(employee.name).toBe('Josh');
    expect(employee.id).toBe(expect.any(Number));
    expect(employee.email).toBe(expect.any(String));
});

