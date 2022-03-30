const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern.js');

// Creats an Intern Role to be filled
test('makes an intern role', () => {
    const intern = new Intern('Intern');
    expect(intern.getRole().toBe('Intern'));
});

// Creates an Intern oject to fill Intern role
test('makes an intern object', () => {
    const intern = new Intern('Sarah', 3, 'Sarahhh@someemail', 'Texas A&M');

    expect(intern.name).toBe('Sarah');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

module.exports = Intern;