import React from 'react';
import InnForm from './components/InnForm/InnForm';
import axios from 'axios';

import './App.sass';

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

    return (
        <div className="app">
            <div className="container">
                <InnForm sendRequest={sendRequest} />
                {isLoading && <p>Получаем данные</p>}
            </div>
        </div>
    );
}

export default App;
