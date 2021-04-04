import { HasFormatter } from '../interface/HasFormatter.js';

export class Payment implements HasFormatter {
    
    constructor(
            readonly recipient: string,
            private details: string,
            public amount: number
    ) { };

    format(): string {
        return '' + this.recipient + ' is owns ' + this.amount + ' for ' + this.details;
    }
    
}