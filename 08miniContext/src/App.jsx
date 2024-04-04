 
import Login from './components/Login'
import Profile from './components/Profile'
import userContextProvider from './context/userContextProvider'
import UserContext from './context/UserContext'
function App() {
  

  return (
    <userContextProvider>
      <h1>hy payal</h1>
      <Login/>
      <Profile/>
    </userContextProvider>
  )
}

export default App
