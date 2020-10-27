const Employee = require('../lib/Employees');

test('creates an employee object', () => {
    const employee = new Employee('Jonny', 1234, 'jonnylightheart@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.anything());
    expect(employee.email).toEqual(expect.any(String));
});

test('changes employee name', () => {
    const employee = new Employee('Jonny');

    employee.getName('Jonathan');

    expect(employee.name).toEqual(expect.stringContaining('Jonathan'));
});

test('changes employee id', () => {
    const employee = new Employee('Jonny', 1234);

    employee.getId('12ABD7');

    expect(employee.id).toEqual(expect.stringContaining('12ABD7'));
});

test('changes employee email', () => {
    const employee = new Employee('Jonny', 1234, 'jonnylightheart@gmail.com');

    employee.getEmail('lightheartjonathan@gmail.com');

    expect(employee.email).toEqual(expect.stringContaining('lightheartjonathan@gmail.com'));
});

test('return role as employee', () => {
    const employee = new Employee('Jonny', 1234, 'jonnylightheart@gmail.com')

    employee.getRole('Employee');

    expect(employee.role).toEqual(expect.stringContaining('Employee'));
})
