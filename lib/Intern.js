const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = '', id, email, school) {
        super(name, id, email);
        this.school = school;
    };

    // Functions to get each piece of info for the Intern
    getSchool() {
        return this.school;
    };

    getRole() {
        return 'Intern';
    };
};

module.exports = Intern;