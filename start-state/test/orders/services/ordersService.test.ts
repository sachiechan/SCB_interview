import { bookTrade } from '../../../src/orders/services/ordersService';
import { Trade, TRADE_STATUS } from '../../../src/orders/models';

const mockTrade: Trade = {
    amount: '1m',
    ccyPair: 'EUR USD'
};

it('Booking successful when amount is 1m', () => {
    expect.assertions(1);
    return bookTrade(mockTrade).then(data => expect(data).toEqual(TRADE_STATUS.SUCCESS));
});

it('Booking fails when amount is not 1m', () => {
    expect.assertions(1);
    return bookTrade({ ...mockTrade, amount: '100m' })
        .catch(error => expect(error).toEqual(TRADE_STATUS.FAILED));
});