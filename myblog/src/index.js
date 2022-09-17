import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './store';
import {createStore} from 'redux';


// const petIncrement = () =>{
//   return {
//     type: "PET_INCREASED"
//   }
// }
// const petDecrement = () =>{
//   return {
//     type: "PET_DECREASED"
//   }
// }

// //reducers
// const petCounter = (state = 0, action) => {
//   switch (action.type) {
//     case "PET_INCREASED":
//       return state + 1;
//     case "PET_DECREASED":
//       return state -1;
//     default:
//       return state;
//       }
// }


// //for the stores

// //dispatch

// let store = createStore(petCounter);

// store.subscribe(()=>console.log(store.getState()));
// store.dispatch(petIncrement());
// store.dispatch(petIncrement());
// store.dispatch(petIncrement());
// store.dispatch(petIncrement());
// store.dispatch(petDecrement());



const root = ReactDOM.createRoot(document.getElementById('root'));
const themes = {
  light: {
    foreground: '#1c1c1c',
    background: '#ffffff'
  },
  dark: {
    foreground: '#ffffff',
    background: '#808080'
  }
}
export const ThemeContext = React.createContext()
const ThemeContextProvider = ({children}) => {
  const [theme, setTheme]= useState(themes.light);
  const [activeTheme, setActiveTheme] = useState('light')

  const toggleTheme =()=>{
    const nextTheme = activeTheme === 'light' ?'dark':'light';
    setTheme(themes[nextTheme]);
    setActiveTheme(nextTheme);
  }
  return(
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}



root.render(
<Provider store={store}>
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>

  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
