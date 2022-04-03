class Employee {
    constructor(name = '', id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    // Functions to get each piece of info for the Employee
    getName() {
        return this.name;
    };
    
    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return 'Employee';
    };
};

module.exports = Employee;