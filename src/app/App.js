//MODULES
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'react-css-themr'

//CSS
import theme from 'css/theme.scss'

//ROUTER
import AppRouter from './AppRouter'

//SERVICES
import store from './services/store'

const contextTheme = {
    RTInput: theme
};

class App extends Component {
    componentDidMount() {
        
    }

    render() {
        return (
            <Provider store={ store }>
                <ThemeProvider theme={contextTheme}>
                <AppRouter /> 
                </ThemeProvider>
            </Provider>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)