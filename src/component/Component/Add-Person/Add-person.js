import React, {useState} from 'react';

import './Add-person.css'

const AddPerson = (props) => {
    let [AddedPerson,  setAddPerson] = useState([props.addPerson]);
    console.log(AddedPerson);
    return (
        <div className='add-item' >
            <h4>Added Person: {AddedPerson.length}</h4>
        </div>
    );
}

export default AddPerson;
