import React from "react";
import ReactDOM from "react-dom";
// import List from "./List.js";
import App from "./components/App.js";
import "./styles/base.scss";
import "./styles/layout.scss";
import "./styles/modules.scss";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: 1, name: "foo" },
        { id: 2, name: "bar" },
        { id: 3, name: "baz" }
      ]
    };
  }
  render() {
    return <App />;
  }
}
ReactDOM.render(<Index />, document.getElementById("root"));
