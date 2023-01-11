import React, {useEffect, useState} from 'react';

import SingleUsers from '../User/User';
import AddPersons from '../Add-Person/Add-person';
import './Users.css'




const Users = () => {

    const [User, setUser] = useState([]);
    const [addPerson, setAddPerson] = useState ([]);
    useEffect( () => {
        fetch('https://randomuser.me/api/?results=15')
        .then(res => res.json())
        .then(data => {
            setUser(data.results)
        })
        .catch(error => console.log(error));
    } , []);

    User.map((person)=>{
        const salary = parseInt((Math.random()+1)*10000);
        person.salary=salary;
    });

    const PersonSalary = (person) =>{
        const newPerons = [...addPerson, person];
        setAddPerson(newPerons);
        
    }


    return (
        <div className='main-face'>
            <div className='Users' >
            {
                User.map(item => <SingleUsers user={item} key={item.login.uuid} PersonSalary={PersonSalary}  ></SingleUsers> )
            }
            </div>
            <div className='add-item' >
                <AddPersons addPerson={addPerson}></AddPersons>
            </div>

        </div>
        
    );
}

export default Users;
