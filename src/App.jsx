import React from "react";
import Bqflow from "./Bqflow/Bqflow";
import { data } from "./data";
import jsonData from "./jsonData";

const App = () => {
  return <Bqflow palette={data} />;
};

export default App;
