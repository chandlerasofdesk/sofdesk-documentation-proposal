import React from "react";

type Props = { text: string };

function HelloWorld({text}: Props) {
  return <div style={{ color: "red" }}>Hello {text}</div>;
}

export default HelloWorld
