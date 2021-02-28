import React from 'react';

import './ResultItem.sass';

const ResultItem = ({ item }) => {
    const [orders, setOrders] = React.useState(item.orders);
    const [sortDateStart, setSortDateStart] = React.useState('asc');
    const [sortDateEnd, setSortDateEnd] = React.useState('asc');
    const [sortDateUpdate, setSortDateUpdate] = React.useState('asc');
    const [sortPrice, setSortPrice] = React.useState('asc');

    const onClickSort = (e) => {
        let field = e.target.getAttribute('data-field');

        switch (field) {
            case 'date_start':
                if (sortDateStart === 'asc') {
                    setSortDateStart('desc');
                } else {
                    setSortDateStart('asc');
                }
                sortOrders('dateStart', sortDateStart);
                break;

            case 'date_end':
                if (sortDateEnd === 'asc') {
                    setSortDateEnd('desc');
                } else {
                    setSortDateEnd('asc');
                }
                sortOrders('dateEnd', sortDateEnd);
                break;

            case 'date_update':
                if (sortDateUpdate === 'asc') {
                    setSortDateUpdate('desc');
                } else {
                    setSortDateUpdate('asc');
                }
                sortOrders('dateUpdate', sortDateUpdate);
                break;

            case 'price':
                if (sortPrice === 'asc') {
                    setSortPrice('desc');
                } else {
                    setSortPrice('asc');
                }
                sortOrders('price', sortPrice);
                break;
        }
    };

    const sortOrders = (field, sort) => {
        let copyOrders = JSON.parse(JSON.stringify(orders));

        if (sort === 'asc') {
            if (field === 'price') {
                copyOrders.sort((a, b) => {
                    if (+a[field].replace(/\D||\s/g, '') > +b[field].replace(/\D||\s/g, '')) return -1;
                    if (+a[field].replace(/\D||\s/g, '') < +b[field].replace(/\D||\s/g, '')) return 1;
                    return 0;
                });
            } else {
                copyOrders.sort((a, b) => {
                    if (a[field].replace(/\s/g, '') > b[field].replace(/\s/g, '')) return -1;
                    if (a[field].replace(/\s/g, '') < b[field].replace(/\s/g, '')) return 1;
                    return 0;
                });
            }
            
        } else {
            if (field === 'price') {
                copyOrders.sort((a, b) => {
                    if (+a[field].replace(/\D||\s/g, '') < +b[field].replace(/\D||\s/g, '')) return -1;
                    if (+a[field].replace(/\D||\s/g, '') > +b[field].replace(/\D||\s/g, '')) return 1;
                    return 0;
                });
            } else {
                copyOrders.sort((a, b) => {
                    if (a[field].replace(/\s/g, '') < b[field].replace(/\s/g, '')) return -1;
                    if (a[field].replace(/\s/g, '') > b[field].replace(/\s/g, '')) return 1;
                    return 0;
                });
            }
        }

        setOrders(copyOrders);
    };

    const orderList = orders.map((order) => (
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
                            <th>
                                <div
                                    className={`order-sort ${sortDateStart}`}
                                    data-field="date_start"
                                    onClick={onClickSort}>
                                    Дата размещения
                                </div>
                            </th>
                            <th>
                                <div
                                    className={`order-sort ${sortDateEnd}`}
                                    data-field="date_end"
                                    onClick={onClickSort}>
                                    Дата окончания
                                </div>
                            </th>
                            <th>
                                <div
                                    className={`order-sort ${sortDateUpdate}`}
                                    data-field="date_update"
                                    onClick={onClickSort}>
                                    Дата обновления
                                </div>
                            </th>
                            <th>
                                <div
                                    className={`order-sort ${sortPrice}`}
                                    data-field="price"
                                    onClick={onClickSort}>
                                    Стоимость
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>{orderList}</tbody>
                </table>
            </div>
        </div>
    );
};

export default ResultItem;
