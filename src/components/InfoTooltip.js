import React from 'react';
import Popup from './Popup';
import successLogo from '../images/success.svg';
import errorLogo from '../images/error.svg';

export default function InfoTooltip({name, isOpen, onClose, isSuccess}) {
    return (
        <Popup name={name} isOpen={isOpen} onClose={onClose}>
            <img className="popup__logo" src={isSuccess ? successLogo : errorLogo} alt={isSuccess ? "Успех" : "Ошибка"}/>
            <p className="popup__result">{isSuccess ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}</p>
        </Popup>
    );
}
