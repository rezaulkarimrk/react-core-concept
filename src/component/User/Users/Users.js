import React, {useState, useEffect} from 'react';

import User from '../User/User'

const Users = () => {
    const [users, setUsers] = useState([]);
    const [team, setTeam] = useState([]);
    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=15')
        .then(res => res.json( ))
        .then(data => setUsers(data.results))
        .catch(error => console.log(error));
    }, [])
    
    const addMember = (memeber) =>{
        setTeam([...team, memeber]);
    }
    return (
        <div>
            <h1>Team builder</h1>
            <ul>
                {
                    team.map((m, index )=> <li key={index} >{m}</li>)
                }
            </ul>
            {
                users.map((user, index) =>  <User user={user} key={index} addMember={addMember} ></User>)
            }
        </div>
    );
}

export default Users;
