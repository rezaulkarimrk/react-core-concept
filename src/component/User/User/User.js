import React, {useState} from 'react';

const User = (props) => {
    const {name, email, picture, phone}= props.user;
    const [mobile, setMobile] = useState('');
    const addMember = props.addMember;
    const fullName = `${name.title} ${name.first} ${name.last} `;
    const userStyle = {
        border : '2px solid red',
        margin: '10px',
        borderRadius: '10px',
        padding: '10px',
        display: 'flex',
        width: '40%'
    }
    const setPhoone = () => setMobile(phone);

    return (
        <div style={userStyle} >
            <div style={{marginTop: '25px'}} >
                <img src={picture.large} />
            </div>
            <div style={{marginLeft:'20px'}} >
                <h1>{fullName}</h1>
                <p>Email: {email}</p>
                {/* <p><a target='_blank' /></p> */}
                <phone>Phone: {mobile}</phone>
                <br></br>
                <button onClick={()=>setPhoone()} >Sho Phone Number</button>
                <button onClick={()=>addMember(fullName)} >Add me</button>
            </div>
            
            
        </div>
    );
}

export default User;
