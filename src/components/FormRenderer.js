import React from "react";
import { fieldRegistry } from "./fields";

const FormRenderer = ({ schema }) => {
  return (
    <div className="form-renderer">
      <h2>Preview</h2>
      <form>
        {schema.map((field, index) => {
          const FieldComponent = fieldRegistry[field.type];
          if (!FieldComponent) return <div key={index}>Unknown field: {field.type}</div>;
          return <FieldComponent key={field.key} {...field} />;
        })}
        {schema.length > 0 && <button type="submit">Submit</button>}
      </form>
    </div>
  );
};

export default FormRenderer;
