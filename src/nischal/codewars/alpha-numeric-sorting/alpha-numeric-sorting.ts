export class AlphaNumericSorting {
    sort(sentence: string): string {
        let newy = "sentence";
        console.log(newy);
        return sentence.split(' ')
            .sort((strOne, strTwo) => {
                return +strOne.match(/\d+/g)![0] - +strTwo.match(/\d+/g)![0];
            }).join(' ');
    }
}