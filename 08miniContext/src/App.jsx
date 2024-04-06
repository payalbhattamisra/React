 
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import UserContext from './context/UserContext'
function App() {
  

  return (
    <UserContextProvider>
      <h1>hy payal</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  //  (usercontextprovider created where user,setuser data send acces login,profile page )
  )
}

export default App
