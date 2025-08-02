import React from "react";

const componentOptions = [
  { type: "textfield", label: "Text Field" },
  { type: "textarea", label: "Text Area" },
  { type: "number", label: "Number" },
  { type: "email", label: "Email" },
  { type: "checkbox", label: "Checkbox" },
  { type: "select", label: "Select" },
  { type: "radio", label: "Radio" },
];

const FormBuilder = ({ schema, setSchema }) => {
  const addField = (type) => {
    const newField = {
      type,
      key: `${type}_${schema.length}`,
      label: `${type} Field`,
      placeholder: "",
      required: false
    };
    setSchema([...schema, newField]);
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
      <pre>{JSON.stringify(schema, null, 2)}</pre>
    </div>
  );
};

export default FormBuilder;
