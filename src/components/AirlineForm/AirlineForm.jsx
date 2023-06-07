import { useState } from 'react';
import { useDispatch } from 'react-redux';

function AirlineForm(){

    const dispatch = useDispatch();

    const [newAirline, setNewAirline] = useState('');
    const [newPlanes, setNewPlanes] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(
            {
                type: 'ADD_AIRLINE',
                payload: {name: newAirline, number: newPlanes}
            }
        );
        setNewAirline('');
        setNewPlanes('');
    }


    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Who, now?"
                onChange={(event) => setNewAirline(event.target.value)} 
                value={newAirline}
            />
            <input 
                type="number"
                placeholder="And how many?"
                onChange={(event) => setNewPlanes(event.target.value)} 
                value={newPlanes}
            />
            <button type="submit">
                Get them planes up!
            </button>
        </form>
    )
};

export default AirlineForm;