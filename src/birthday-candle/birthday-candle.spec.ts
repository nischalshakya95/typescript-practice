import {BirthdayCandle} from "./birthday-candle";

const AGE = 10;

const CANDLES = [18, 90, 90, 13, 90, 75, 90, 8, 90, 43];

test('Maximum between two numbers', () => {
    let birthdayCandle = new BirthdayCandle();
    expect(birthdayCandle.findMax(4, 2)).toBe(4);
});

test('Maximum numbers from array', () => {
    let birthdayCandle = new BirthdayCandle();
    expect(birthdayCandle.findMaxNumberFromArray(CANDLES, CANDLES.length)).toBe(90);
});

test('Does candle and age have same value', () => {
    let birthdayCandle = new BirthdayCandle();
    expect(birthdayCandle.isCandleEqualToAge(AGE, CANDLES)).toBe(true);
    expect(birthdayCandle.isCandleEqualToAge(AGE, CANDLES.splice(3, 0))).toBe(false);
});

test("Get number of candle that can be blown", () => {
    let birthdayCandle = new BirthdayCandle();
    expect(birthdayCandle.getNoOfCandleCanBeBlown(AGE, CANDLES)).toBe(5);
});