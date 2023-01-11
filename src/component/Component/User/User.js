import React, {useState}from 'react';

import './User.css'

const User = (props) => {
    const [Userinfo, setSuer] = useState(props.user);
    const [buttonData,  setButtonData] = useState([]);
    const Name = `${Userinfo.name.title} ${Userinfo.name.first} ${Userinfo.name.last}`;
    const salary = Userinfo.salary;
    const potoLink = Userinfo.picture.large;
    const addItem = props.PersonSalary;
    const sendData=props.user;

    
    return (
        <div className='user' >
            <img src={potoLink} />
            <h2>{Name}</h2>
            <p> Salary {salary}</p>
            <button onClick={()=> addItem(sendData) } >Add Person</button>
        </div>
    );
}

export default User;
