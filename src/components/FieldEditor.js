import React from "react";

const FieldEditor = ({ field, onChange }) => {
	if (!field) return null;

	const handleInput = (e) => {
		const { name, value, type, checked } = e.target;
		onChange({ [name]: type === "checkbox" ? checked : value });
	};

	const handleOptionsChange = (e) => {
		const raw = e.target.value;
		const optionsArray = raw.split(",").map((opt) => opt.trim()).filter(Boolean);
		onChange({ options: optionsArray });
	};

	const isOptionField = ["select", "radio", "selectboxes"].includes(field.type);

	return (
		<div className="field-editor">
			<h3>Edit Field</h3>

			<label>
				Label:
				<input
					type="text"
					name="label"
					value={field.label || ""}
					onChange={handleInput}
				/>
			</label>

			{"placeholder" in field && (
				<label>
					Placeholder:
					<input
						type="text"
						name="placeholder"
						value={field.placeholder || ""}
						onChange={handleInput}
					/>
				</label>
			)}

			<label>
				Required:
				<input
					type="checkbox"
					name="required"
					checked={field.required || false}
					onChange={handleInput}
				/>
			</label>

			{isOptionField && (
				<label>
					Options (comma-separated):
					<input
						type="text"
						value={(field.options || []).join(", ")}
						onChange={handleOptionsChange}
					/>
				</label>
			)}
		</div>
	);
};

export default FieldEditor;
