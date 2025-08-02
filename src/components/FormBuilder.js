import React, { useState } from "react";
import FieldEditor from "./FieldEditor";

const componentOptions = [
  { type: "textfield", label: "Text Field" },
  { type: "textarea", label: "Text Area" },
  { type: "number", label: "Number" },
  { type: "email", label: "Email" },
  { type: "checkbox", label: "Checkbox" },
  { type: "select", label: "Select" },
  { type: "radio", label: "Radio" },
  { type: "datamap", label: "Datamap" }
];

const FormBuilder = ({ schema, setSchema }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const addField = (type) => {
    const newField = {
      type,
      key: `${type}_${schema.length}`,
      label: `${type} field`,
      placeholder: "",
      required: false
    };
    setSchema([...schema, newField]);
  };

  const updateField = (index, newData) => {
    const updated = [...schema];
    updated[index] = { ...updated[index], ...newData };
    setSchema(updated);
  };

  return (
    <div className="form-builder">
      <h2>Form Builder</h2>

      <div className="component-list">
        {componentOptions.map((comp) => (
          <button key={comp.type} onClick={() => addField(comp.type)}>
            {comp.label}
          </button>
        ))}
      </div>

      <h3>Fields</h3>
      <ul>
        {schema.map((field, index) => (
          <li
            key={field.key}
            style={{
              cursor: "pointer",
              padding: "5px",
              background: selectedIndex === index ? "#eee" : "transparent"
            }}
            onClick={() => setSelectedIndex(index)}
          >
            {field.label || field.key} ({field.type})
          </li>
        ))}
      </ul>

      {selectedIndex !== null && (
        <FieldEditor
          field={schema[selectedIndex]}
          onChange={(newData) => updateField(selectedIndex, newData)}
        />
      )}
    </div>
  );
};

export default FormBuilder;
