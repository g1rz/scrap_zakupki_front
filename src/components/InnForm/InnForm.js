import React from 'react';
import './InnForm.sass';
const InnForm = ({ sendRequest }) => {
    const [innList, setInnList] = React.useState('');
    const [isValid, setIsValid] = React.useState(true);

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        console.log('submit');
        if (innList === '') {
            setIsValid(false);
            return;
        } else {
            setIsValid(true);
            setInnList('');

            sendRequest(innList);
        }
    };

    return (
        <form className="inn-form" onSubmit={handleSubmitForm}>
            <textarea
                className="inn-list"
                name="inn_list"
                placeholder="Введите ИНН"
                value={innList}
                onChange={(e) => setInnList(e.target.value)}></textarea>
            {!isValid && <p className="error">Заполните поле</p>}
            <button type="submit" className="btn">
                Отправить
            </button>
        </form>
    );
};

export default InnForm;
