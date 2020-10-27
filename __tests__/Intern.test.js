const Intern = require('../lib/Intern');

test('returns iterns school', () => {
    const intern = new Intern('Jonny', 1234, 'jonnylightheart@gmail.com');

    intern.getSchool('UofU');

    expect(intern.school).toEqual(expect.stringContaining('UofU'));
});