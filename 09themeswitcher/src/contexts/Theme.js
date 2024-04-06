import {createContext,useContext} from 'react'
export const ThemeContext=createContext({//call onject,method also for default prev not present
    themeMode:'light',
    darkTheme:()=>{},
    lightTheme:()=>{},
})
export const ThemeProvider=ThemeContext.Provider;
//prev userContext and UserContextProvider 2 file create but here in 1file we create

export default function useTheme(){//every file we import userContext in prev then useContext(userContext) write so here not do in every file just do in single file .like we do useTheme
 return useContext(ThemeContext);
}