const Employee = require('./Employees');

class Intern extends Employee{
    constructor(name, id, email) {
        super(name, id, email)
    }

    getSchool(school) {
        this.school = school
    }
}

module.exports = Intern;