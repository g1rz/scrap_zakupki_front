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
        <form className="i-form" onSubmit={handleSubmitForm}>
            <div className="i-form__wrap">
                <label htmlFor="inn_list" className="i-form__label">
                    Введите список ИНН
                </label>
                <textarea
                    className="i-form__textarea"
                    name="inn_list"
                    placeholder="Введите ИНН"
                    value={innList}
                    onChange={(e) => setInnList(e.target.value)}></textarea>
                {!isValid && <span className="i-form__error">Заполните поле</span>}
            </div>

            <button type="submit" className="btn i-form__submit">
                Поиск
            </button>
        </form>
    );
};

export default InnForm;
