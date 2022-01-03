import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider} from "react-i18next";
import i18next from "i18next";

import global_es from "./Components/translations/es/global.json"
import global_en from "./Components/translations/en/global.json"
import global_de from "./Components/translations/de/global.json"

 //seteo por defecto la primera vez el valor del idioma en el localStorage
 if (localStorage.getItem('language') === null){
  localStorage.setItem("language", 'English');
}

console.log(localStorage.getItem('language'))

i18next.init({
  interpolation: {escapeValue: false},
  lng: localStorage.getItem('language'),
  resources: {
    English: {
      global: global_en
    },
    Spanish: {
      global: global_es
    },
    German: {
      global: global_de
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
