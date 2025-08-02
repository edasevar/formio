# Form.io Clone

A React-based form builder and renderer application that provides a drag-and-drop interface for creating dynamic forms, similar to Form.io.

## Features

- **Visual Form Builder**: Drag and drop interface for creating forms
- **Live Preview**: Real-time form rendering as you build
- **Field Types**: Support for multiple field types including:
  - Text Field
  - Text Area
  - Number
  - Email
  - Checkbox
  - Select (Dropdown)
  - Radio buttons
  - Datamap
- **Field Configuration**: Customizable field properties (labels, placeholders, validation, etc.)
- **Form Validation**: Built-in form validation capabilities
- **Responsive Design**: Mobile-friendly interface

## Technology Stack

- **React**: ^19.1.1
- **React DOM**: ^19.1.1
- **Parcel**: ^2.15.4 (Build tool)
- **CSS**: Custom styling

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd formio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:1234`.

### Building for Production

To create a production build:
```bash
npm run build
```

## Project Structure

```
formio/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.js             # Main application component
│   ├── index.js           # Application entry point
│   ├── components/
│   │   ├── FieldEditor.js     # Field property editor
│   │   ├── FormBuilder.js     # Form builder interface
│   │   ├── FormRenderer.js    # Form renderer component
│   │   ├── RenderComponents.js # Component rendering logic
│   │   └── fields/            # Individual field components
│   │       ├── Address.js
│   │       ├── Button.js
│   │       ├── Checkbox.js
│   │       ├── Currency.js
│   │       ├── Datetime.js
│   │       ├── Email.js
│   │       ├── Number.js
│   │       ├── Radio.js
│   │       ├── Select.js
│   │       ├── TextArea.js
│   │       ├── TextField.js
│   │       └── ... (and more)
│   └── styles/
│       └── builder.css        # Application styles
├── package.json
└── README.md
```

## Usage

### Building Forms

1. **Add Fields**: Click on field types in the left panel to add them to your form
2. **Configure Fields**: Select any field to edit its properties in the field editor
3. **Preview**: View your form in real-time in the right panel
4. **Rearrange**: Drag and drop fields to reorder them

### Field Configuration

Each field can be customized with:
- **Label**: Display name for the field
- **Key**: Unique identifier for the field
- **Placeholder**: Hint text for input fields
- **Required**: Whether the field is mandatory
- **Validation**: Custom validation rules
- **Options**: For select and radio fields

## API

### FormBuilder Component

```jsx
<FormBuilder 
  schema={schema} 
  setSchema={setSchema} 
/>
```

**Props:**
- `schema`: Array of field definitions
- `setSchema`: Function to update the form schema

### FormRenderer Component

```jsx
<FormRenderer 
  schema={schema} 
/>
```

**Props:**
- `schema`: Array of field definitions to render

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Inspired by Form.io's form building capabilities
- Built with React and modern web technologies
- Uses Parcel for fast development and building

## Support

If you encounter any issues or have questions, please open an issue on the GitHub repository.

---

**Version**: 1.1.0  
**Last Updated**: August 2025
