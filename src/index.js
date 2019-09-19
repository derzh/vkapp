import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import connect from '@vkontakte/vkui-connect-promise';
connect.send('VKWebAppInit', {})

ReactDOM.render(<App />, document.getElementById('root'));