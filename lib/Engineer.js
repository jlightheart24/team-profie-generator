const Employee = require('./Employees');

class Engineer extends Employee{
    constructor(name, id, email) {
        super(name, id, email)
    }

    getGithub(github) {
        this.github = github
    }
}

module.exports = Engineer;