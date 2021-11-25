import React, { Component } from 'react'
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_TIETO":
            return {
                ...state,
                tiedot: state.tiedot.filter(
                (tieto) => tieto.id !== action.payload
            ),
        };

        case "ADD_TIETO":
            return {
                ...state,
                tiedot: [action.payload,...state.tiedot]        
        };
    default:
        return state;
    }
};
    

export default class Provider extends Component {
    state = {
        tiedot: [
        ],dispatch: (action) => 
              this.setState((state) => reducer(state, action))
    };

    componentDidMount(){
        axios
            .get("http://localhost:3030/urheilijat")
            .then( (res) => this.setState({ tiedot: res.data }) )
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;