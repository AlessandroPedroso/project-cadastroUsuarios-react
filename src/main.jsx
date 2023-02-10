import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './routes'

import GlobalStyles from './Styles/globalStyles.js'

ReactDOM.createRoot(document.getElementById('root'))
.render(
    <>
    <Routes /> 
    <GlobalStyles/>
    </>
    ,
)
