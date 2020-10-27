const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Jonny', 1234, 'jonnylightheart@gmail.com');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.anything());
    expect(engineer.email).toEqual(expect.any(String));
});

test('changes engineer name', () => {
    const engineer = new Engineer('Jonny');

    engineer.getName('Jonathan');

    expect(engineer.name).toEqual(expect.stringContaining('Jonathan'));
});

test('changes engineer id', () => {
    const engineer = new Engineer('Jonny', 1234);

    engineer.getId('12ABD7');

    expect(engineer.id).toEqual(expect.stringContaining('12ABD7'));
});

test('changes engineer email', () => {
    const engineer = new Engineer('Jonny', 1234, 'jonnylightheart@gmail.com');

    engineer.getEmail('lightheartjonathan@gmail.com');

    expect(engineer.email).toEqual(expect.stringContaining('lightheartjonathan@gmail.com'));
});

test('return role as engineer', () => {
    const engineer = new Engineer('Jonny', 1234, 'jonnylightheart@gmail.com')

    engineer.getRole('Engineer');

    expect(engineer.role).toEqual(expect.stringContaining('Engineer'));
});

test('return engineer github', () => {
    const engineer = new Engineer('Jonny', 1234, 'jonnylightheart@gmail.com')

    engineer.getGithub('jlightheart24');

    expect(engineer.github).toEqual(expect.stringContaining('jlightheart24'));
});