import { Trade, TRADE_STATUS, DEFAULT_CCY_PAIRS } from '../models';

export const bookTrade = (trade: Trade) : Promise<TRADE_STATUS> => {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            trade.amount === "1m" ? 
                resolve(TRADE_STATUS.SUCCESS) :
                reject(TRADE_STATUS.FAILED)
        },
        2000
    )
    });
};

export const getRefData = () : Promise<string[]> => {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve(DEFAULT_CCY_PAIRS)
        },
        2000
    )
    });
};
