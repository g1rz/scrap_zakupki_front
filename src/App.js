import React from 'react';
import axios from 'axios';

import './App.sass';

import InnForm from './components/InnForm/InnForm';
import Loader from './components/Loader/Loader';

import dataTest from './data-test.json';
import ResultItem from './components/ResultItem/ResultItem';

function App() {
    const [isLoading, setIsLoading] = React.useState(false);

    const sendRequest = async (innList) => {
        setIsLoading(true);
        try {
            const response = await axios.post('http://localhost:3002', { innList: innList });
            setIsLoading(false);
            console.log('Returned data:', response.data);
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }
    };

    console.log(dataTest);

    const resultList = dataTest.map((item) => <ResultItem key={item.inn} item={item} />);

    return (
        <div className="app">
            <div className="container">
                <InnForm sendRequest={sendRequest} />
                {isLoading && <Loader />}
                <div className="result-list">{resultList}</div>
            </div>
        </div>
    );
}

export default App;
