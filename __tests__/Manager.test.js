const Manager = require('../lib/Manager');

test('returns manager office number', () => {
    const manager = new Manager('Jonny', 1234, 'jonnylightheart@gmail.com');

    manager.getOfficeNumber("1234");

    expect(manager.officeNumber).toEqual(expect.stringContaining('1234'));
});