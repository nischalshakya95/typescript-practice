export class BirthdayCandle {

    getNoOfCandleCanBeBlown(age: number, candles: number[]): number | string {
        if (this.isCandleEqualToAge(age, candles)) {
            return candles.filter(c => {
                return c === this.findMaxNumberFromArray(candles, candles.length);
            }).length;
        } else {
            return 'Age and candle does not have same value';
        }
    }

    isCandleEqualToAge(age: number, candles: number[]) {
        return age === candles.length;
    }

    findMaxNumberFromArray(arr: number[], length: number): number {
        return length === 1 ? arr[0] : this.findMax(arr[length - 1], this.findMaxNumberFromArray(arr, length - 1));
    }

    findMax = (n1: number, n2: number): number => n1 > n2 ? n1 : n2;
}