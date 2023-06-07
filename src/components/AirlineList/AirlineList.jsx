import {useSelector} from 'react-redux';
import './AirlineList.css';

function AirlineList(){

    const airlineList = useSelector(store => store.airlineList)
    

    return (
        <tbody>
            {airlineList.map((airline, i) => (
                <tr key={i}>
                    <td>
                        {airline.name}
                    </td>
                    <td>
                        {airline.number}
                    </td>
                </tr>
            ))}
        </tbody>
    )
};

export default AirlineList;