import React, { FC, useState, useEffect } from 'react';
import { getRefData } from '../services/ordersService';
import Styles from '../../styles';
import OrdersDetails from '../components/OrderDetails';

const Loading: FC = () => <div style={Styles.loading()}><h3>Loading...</h3></div>

interface OrdersViewProps {};

const OrdersView: FC<OrdersViewProps> = () => {

    const [ccyPairs, setCCYPairs] = useState<string[]>();

    useEffect(() => {
        getRefData().
            then((values) => setCCYPairs(values));
    }, []);

    return (
        <div style={Styles.container()}>
            <h1 style={Styles.title()}>Trade FX</h1>
            { !ccyPairs ? <Loading /> : <OrdersDetails ccyPairs={ccyPairs} />
            }
        </div>
    );
};

export default OrdersView;
