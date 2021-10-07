import React, { useState, useContext } from 'react';
import { SettingsContext } from '../context/SettingsContext';
import Button from './Button';

const SetPomodoro = () => {

    const [newTimer, setNewTimer] = useState({
        work: 3,
        short: 2,
        long: 1,
        active: 'work',
    })
    const { updateExecute } = useContext(SettingsContext);

    const handleChange = input => {
        const { name, value } = input.target;
        switch (name) {
            case 'work':
                setNewTimer({
                    ...newTimer,
                    work: parseInt(value)
                })
                break;
            case 'shortBreak':
                setNewTimer({
                    ...newTimer,
                    short: parseInt(value)
                })
                break;
            case 'longBreak':
                setNewTimer({
                    ...newTimer,
                    long: parseInt(value)
                })
                break;
            default:
                break;
        }
    }


    const handleSubmit = e => {
        e.preventDefault();
        updateExecute(newTimer);
    };

    return (
        <div className="formContainer">
            <form noValidate>
                <div className="inputWrapper">
                    <input className="input" name="work" onChange={ handleChange } value={newTimer.work} />
                    <input className="input" name="shortBreak" onChange={ handleChange } value={newTimer.short} />
                    <input className="input" name="longBreak" onChange={ handleChange } value={newTimer.long} />
                </div>
                <Button title="Set Timer" _callback={ handleSubmit } />
            </form>
        </div>
    )
}

export default SetPomodoro;

