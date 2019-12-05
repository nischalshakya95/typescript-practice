import Statement from './Statement';

let statement = new Statement();

test('bank statement summarization test', () => {
    expect(statement.for('GOOG 300 542.0 B, AAPL 50 145.0 B, CSCO 250.0 29 B, GOOG 200 580.0 S')
        .summarize())
        .toBe('Buy: 169850 Sell: 116000; Badly formed 1: CSCO 250.0 29 B ;');
    expect(statement.for('ZNGA 1300 2.66, CLH15.NYM 50 56.32 S, OWW 1000 11.623 S, OGG 20 580.1 S')
        .summarize())
        .toBe('Buy: 0 Sell: 26041; Badly formed 1: ZNGA 1300 2.66 ;');
});