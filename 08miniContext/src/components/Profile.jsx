import React,{useContext} from 'react'
import UserContext from '../context/UserContext'
import userContextProvider from '../context/userContextProvider';
function Profile() {//data receive
  const {user}=useContext(UserContext);
   if(!user) return <div>please login</div>
   return <div>welcome {user.username}</div>
}

export default Profile
