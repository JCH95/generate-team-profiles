const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

// Creates an Engineer Role to be filled
test('makes an engineer role', () => {
    const engineer = new Engineer('Engineer');
    expect(engineer.getRole()).toBe('Engineer');
});

// Creates an Engineer object to fill Engineer role
test('makes an engineer object', () => {
    const engineer = new Engineer('John', 2, "johnny123@somemail.com", 'johnGitHub');

    expect(engineer.name).toBe('John');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

module.exports = Engineer;