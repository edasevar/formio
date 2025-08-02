import React, { useState } from "react";
import FormBuilder from "./components/FormBuilder";
import FormRenderer from "./components/FormRenderer";
import "./styles/builder.css";

const App = () => {
  const [schema, setSchema] = useState([]);

  return (
    <div className="app-container">
      <h1>Form.io Clone</h1>
      <div className="main">
        <FormBuilder schema={schema} setSchema={setSchema} />
        <FormRenderer schema={schema} />
      </div>
    </div>
  );
};

export default App;
