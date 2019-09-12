import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

//state- imperative mgmt
//lifecycle event- componentDidMount etc- hooks
//UI

class App extends Component{
    render(){
        return(
            <div>
                Hello nishant
            </div>
        );
    }   
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);