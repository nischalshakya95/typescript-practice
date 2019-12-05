import Number from './Number';


test('number to roman test', () => {
    expect(new Number(3).getRomanValue()).toBe('III');
});