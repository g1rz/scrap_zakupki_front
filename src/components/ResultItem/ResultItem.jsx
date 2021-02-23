import React from 'react';

import './ResultItem.sass';

const ResultItem = ({ item }) => {
    const orderList = item.orders.map((order) => (
        <div className="result-order" key={order.orderID}>
            <div className="result-order__id">
                <a className="link" href={order.ink}>
                    {order.orderID}
                </a>
            </div>
            <div className="result-order__desc">{order.object}</div>
            <div className="result-order__date">{order.dateStart}</div>
            <div className="result-order__date">{order.dateEnd}</div>
            <div className="result-order__date">{order.dateUpdate}</div>
            <div className="result-order__price">{order.price}</div>
        </div>
    ));

    return (
        <div className="result-item">
            <div className="result-item__header">
                <div className="result-item__col result-item__col--left">{item.inn}</div>
                <div className="result-item__col result-item__col--right">
                    <a className="link" href={item.ownerLink} target="_blank">
                        {item.owner}
                    </a>
                </div>
            </div>
            <div className="result-item__body">{orderList}</div>
        </div>
    );
};

export default ResultItem;
