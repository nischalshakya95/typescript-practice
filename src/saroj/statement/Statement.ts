export default class Statement {

    private rawInfo:string;

    constructor() {
        this.rawInfo = '';
    }

    for(info:string):Statement {
        this.rawInfo = info;
        return this;
    }

    summarize(): string {
        let buy: number = 0;
        let sell: number = 0;
        let badCount: number = 0;
        let badString: string = ``
        this.rawInfo.split(', ').forEach(order => {
            if (!order) return;
            let items: string[] = order.split(' ');
            let quantity: string = items[1];
            let price: string = items[2];
            let status: string = items[3];
            if (price.indexOf('.') === -1 || isNaN(+price) || !status) {
                badString += `${order} ;`;
                badCount++;
                return;
            }
            if (status === 'B')
                buy += +quantity * parseFloat(price);
            else sell += +quantity * parseFloat(price);
        });
        return `Buy: ${Math.ceil(buy)} Sell: ${Math.ceil(sell)}${(badCount > 0) ? (`; Badly formed ${badCount}: ` + badString) : ''}`;
    }
     
}