import React from 'react';
import './Users.css'

const User = (props) => {
   
    const { name, username, email, image , salary, phone } = props.user;
    const imageStyle = {width: '200px', height: '200px'};
    const handleAddSalary = props.handleAddSalary;
    
    
    return (
        <div className='user'>
           
            <div className='person'>
                <h4>Name: {name}</h4>
                <p><small>Username: {username}</small></p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Salary: {salary}$</p>
                <button onClick={()=>handleAddSalary(props.user)}>Add Person</button>
            </div>
            <div className='image'> 
                <img style={imageStyle} src={image} alt=""/>
            </div>
            
        </div>
    );
};

export default User;