import React from "react";

function List(props) {
  return <ul>{props.list.map(thing => <li>{thing.name}</li>)}</ul>;
}
export default List;
