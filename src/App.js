import React, {Component} from "react";
import "./App.css";
import {TestComponent} from "./components/TestComponent"

export default class App extends Component {
    render() {
        return(
            <div className="App">
                <h4>Test Element</h4>
                <TestComponent />
            </div>
        )
    }
}