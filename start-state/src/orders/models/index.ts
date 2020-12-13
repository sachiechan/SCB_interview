export interface Trade {
    amount: string;
    ccyPair: string;
};

export enum TRADE_STATUS { 
    IN_PROGRESS = 'Booking In Progress',
    SUCCESS = 'Booking Success',
    FAILED = 'Booking Failed',
    DEFAULT = ''
};

export const DEFAULT_CCY_PAIRS: string[] = [
    "EUR USD",
    "USD JPY",
    "USD GBP",
];