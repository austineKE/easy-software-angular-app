export class Payment {
    username: string;
    amountinwords: string;
    id: number;
    amount: number;
    paymentType: string
    constructor(
        username: string,
        amountinwords: string,
        id: number,
        amount: number,
        paymentType: string
    ) {
        this.username = username;
        this.amountinwords = amountinwords;
        this.id = id;
       this.amount = amount;
       this.paymentType = paymentType;
    }


}
