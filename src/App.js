import React from 'react';
import { View, Panel, PanelHeader } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Home from './panels/Home'
import Info from './panels/Info'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            activePanel: "home"
        }
        
    }
    go = e => {
        this.setState({activePanel: e.currentTarget.dataset.to})
    }
    
    render() {
        return (
            <View activePanel={this.state.activePanel}>
            <Home id="home" go={this.go}/>
            <Info id="info" go={this.go}/>
            </View>

        )
    }
}
export default App;