import '@babel/polyfill';
import React, { Component } from "react";
import ReactDOM from "react-dom";
// import List from "./List.js";
import App from "./components/App.js";
import "./styles/base.scss";
import "./styles/layout.scss";
import "./styles/modules.scss";
import "./styles/grid_stuff.scss";
class Index extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     list: [
  //       { id: 1, name: "foo" },
  //       { id: 2, name: "bar" },
  //       { id: 3, name: "baz" }
  //     ]
  //   };
  // }
  render() {
    return <App />;
  }
}
ReactDOM.render(<Index />, document.getElementById("root"));
