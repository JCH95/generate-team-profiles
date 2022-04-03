const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '', id, email, github) {
        super(name, id, email);
        this.github = github;
    };

    // Functions to get each piece of info for the Engineer
    getGithub() {
        return this.github;
    };

    getRole() {
        return 'Engineer';
    };
};

module.exports = Engineer;