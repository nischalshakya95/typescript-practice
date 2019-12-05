import Map from './Map';

let map = new Map<String, Number>();

test('map test', () => {
    expect(map.put('a', 2).get('a')).toBe(2);
})