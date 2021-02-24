import React from 'react';

import './ResultItem.sass';

const ResultItem = ({ item }) => {
    const orderList = item.orders.map((order) => (
        <tr className="order-row" key={order.orderID}>
            <td className="order-row__id">
                <a className="link" href={order.link} target="_blank" rel="noreferrer">
                    {order.orderID}
                </a>
            </td>
            <td className="order-row__desc">
                <p className="order-desc"> {order.object}</p>

            </td>
            <td className="order-row__date">{order.dateStart}</td>
            <td className="order-row__date">{order.dateEnd}</td>
            <td className="order-row__date">{order.dateUpdate}</td>
            <td className="order-row__price">{order.price}</td>
        </tr>
    ));

    return (
        <div className="result-item">
            <div className="result-item__header">
                <div className="result-item__col result-item__col--left">{item.inn}</div>
                <div className="result-item__col result-item__col--right">
                    <a className="link" href={item.ownerLink} rel="noreferrer" target="_blank">
                        {item.owner}
                    </a>
                </div>
            </div>
            <div className="result-item__body">
                <table className="orders">
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Описание</th>
                            <th>Дата размещения</th>
                            <th>Дата окончания</th>
                            <th>Дата обновления</th>
                            <th>Стоимость</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderList}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ResultItem;
