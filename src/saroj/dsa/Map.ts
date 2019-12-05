export default class Map<K, V> {

    private keys: Array<K>  = [];
    private values: Array<V> = [];

    public put(key: K, value: V): Map<K, V> {
        if (this.has(key)) {
            this.values[this.keys.lastIndexOf(key)] = value;
            return this;
        }
        this.keys.push(key);
        this.values.push(value);
        return this;
    }

    public get(key: K): V{
        return this.values[this.keys.indexOf(key)];
    }

    public has(key: K): boolean {
        return (this.keys.lastIndexOf(key) != -1);
    }

}