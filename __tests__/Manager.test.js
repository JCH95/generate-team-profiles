const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager.js');

// Creats a Manager Role to be filled
test('makes a manager role', () => {
    const manager = new Manager('Manager');
    expect(manager.getRole().toBe('Manager'));
});

// Creates a Manager oject to fill Manager role
test('makes a manager object', () => {
    const intern = new Intern('David', 4, 'dav1d!@someemail', '1033');

    expect(manager.name).toBe('David');
    expect(manager.name.length).toBeGreaterThan(0);
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

module.exports = Manager;