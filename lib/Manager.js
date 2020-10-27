const Employee = require('./Employees');

class Manager extends Employee{
    constructor(name, id, email) {
        super(name, id, email)
    }

    getOfficeNumber(number) {
        this.officeNumber = number

        if (this.officeNumber === Number) {
            this.officeNumber.toString();
        }
    }
}

module.exports = Manager;