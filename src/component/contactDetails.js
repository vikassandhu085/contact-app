import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import userImg from '../images/user.jpg';


function ContactDetails(props) {
    const location = useLocation();
    const data = location.state.contact
  return (
    <div className='contactDetails'>
    <div className='main'>
        <div className='ui card centered'>
            <div className='image'>
                <img src={userImg} alt="" />
            </div>
            <div className='content'>
                <div className='header'>{data.name}</div>
                <div className='description'>{data.email}</div>
            </div>
        </div>
    </div>
    
       <Link to = '/' className='back-to-list'>
       <button className='ui button green center'>Back to List</button>
       </Link>
    
    </div>
  )
}

export default ContactDetails;