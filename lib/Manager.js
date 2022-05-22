const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '', id, email, office) {
        super(name, id, email);
        this.office = this.office;
    };

    // Functions to get each piece of info for the Manager
    getOffice() {
        return this.office;
    };

    getRole() {
        return 'Manager';
    };
};

module.exports = Manager;