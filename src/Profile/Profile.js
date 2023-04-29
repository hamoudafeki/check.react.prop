import React from 'react'
import propTypes from 'prop-types';
const Profile = (props) => {
  return (
    <div>
      <p className='string'>
        {props.children} <br/>
        <strong style={{color:"rgb(208, 161, 253)"}}>Full Name : </strong> {props.data.fullName} <br/>
        <strong style={{color:"rgb(208, 161, 253)"}}>Bio : </strong> {props.data.bio} <br/>
        <strong style={{color:"rgb(208, 161, 253)"}}>Profession : </strong> {props.data.profession}
      </p>
      <button onClick={() => props.handleName(props.data.fullName)}> Click Me</button>
    </div>
  )
}
Profile.defaultProps ={
  fullName : '.....',
  bio : '.....',
  profession : '.....'
}
Profile.propTypes={
  fullName : propTypes.string,
  bio : propTypes.string,
  profession : propTypes.string
}
export default Profile
