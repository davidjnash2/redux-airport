import { useState } from 'react';
import { useDispatch } from 'react-redux';

function AirlineForm(){

    const dispatch = useDispatch();

    const [newAirline, setNewAirline] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_AIRLINE',
            payload: newAirline
        });
        setNewAirline('');
    }


    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Come fly the friendly skies"
                onChange={(event) => setNewAirline(event.target.value)} 
                value={newAirline}
            />
            <button type="submit">
                Get them planes up!
            </button>
        </form>
    )
};

export default AirlineForm;