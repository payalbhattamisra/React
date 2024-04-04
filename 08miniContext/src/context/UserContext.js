//Context api and redux 
//data present inside a app in a container .so for accessing the container we use props ,as we know <App title='chai'> <container title='chai'> nested props use ..so we use optimize approach globally initialize variable title {'chai'} here solve our prblm but there is another prblm it updates everywhere where you don't want also..so context api use...
//redux is same as state to state data transfer in organised way.
//here it is totally js
import React from "react";
const UserContext=React.createContext();
export default UserContext;
//<userContext> <login/> <card/> <data/> <userContext/> (after context ,provider create so that they can acess and data provide inside the context  )