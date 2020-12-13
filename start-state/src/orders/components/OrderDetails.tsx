import React, { FC, useState } from 'react';
import { Trade, TRADE_STATUS } from '../models';
import { bookTrade } from '../services/ordersService';
import Styles from '../../styles';

const DEFAULT_TRADE: Trade = {
    amount: "1m",
    ccyPair: "EUR USD"
};

interface OrdersDetailsProps {
    ccyPairs?: string[];
};

const OrdersDetails: FC<OrdersDetailsProps> = ({ ccyPairs = [] }) => {

    const [tradeDetails, setTradeDetails] = useState<Trade>(DEFAULT_TRADE);
    
    const [tradeStatus, setTradeStatus] = useState<TRADE_STATUS>(TRADE_STATUS.DEFAULT);
    const { ccyPair = '', amount = '' } = tradeDetails;

    const onValueChange = (name: string, value: string): void => {
        setTradeStatus(TRADE_STATUS.DEFAULT);
        setTradeDetails((prev) => ({ ...prev, [name]: value}))
    };

    const onBookClick = async () => {
        try {
            setTradeStatus(TRADE_STATUS.IN_PROGRESS);
            const result = await bookTrade(tradeDetails);
            setTradeStatus(result);
        } catch(error) {
            setTradeStatus(error);
        }
    };

    return (
        <>   
            <div style={Styles.formItem()}>
                <span style={Styles.label()}>Amount: </span>
                <input
                    style={Styles.input()}
                    value={amount}
                    onChange={(e) => onValueChange('amount', e.target.value)}
                />
            </div>
            <div style={Styles.formItem()}>
                <span style={Styles.label()}>Currency: </span>
                <select style={Styles.select()} value={ccyPair} onChange={(e) => onValueChange('ccyPair', e.target.value)}>
                    {
                        ccyPairs?.map((pair) => <option key={pair} value={pair}>{pair}</option>)
                    }
                </select>
            </div>
            <div style={Styles.summary()}>
                <span>Order summary:</span>
                <span>{`${amount} ${ccyPair}`}</span>
            </div>
            <div style={Styles.submitContainer()}>
                <button 
                    disabled={!ccyPair || !amount} 
                    style={Styles.submit()} 
                    onClick={onBookClick}>
                        Book
                </button>
            </div>
            <div style={Styles.status()}>
                {tradeStatus}
            </div>
        </>
    );
};

export default OrdersDetails;