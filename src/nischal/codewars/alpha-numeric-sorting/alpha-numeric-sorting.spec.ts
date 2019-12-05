import {AlphaNumericSorting} from "./alpha-numeric-sorting";

test('Sort alphanumeric words in ascending order on basics of number', () => {
    let alphaNumericSorting = new AlphaNumericSorting();
    expect(alphaNumericSorting.sort('is21 Thi1s T4est 3a')).toBe('Thi1s 3a T4est is21');
    expect(alphaNumericSorting.sort('4of Fo1r pe6ople g3ood th5e the2')).toBe('Fo1r the2 g3ood 4of th5e pe6ople');
    expect(alphaNumericSorting.sort('')).toBe('');
});