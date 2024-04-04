import  React from 'react'
import UserContext from './UserContext'

const userContextProvider = ({children}) =>{
    //children use for data transfer as it is send
    const [user,setUser]=React.useState(null);
   return (
    <UserContext.Provider value={{user,setUser}}> 
    {children}
    </UserContext.Provider>
    //provider first wrap then data also use for acess all value
   )
}
export default userContextProvider;