import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Store from '../redux/Store'
import {Provider} from 'react-redux'

const MainStore = Store()


ReactDOM.render(<Provider store={MainStore}><App/></Provider>,document.getElementById('root'))