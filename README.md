<h1 align="center">Simple Blob Generator</h1>



<p align="center">
  <strong>A simple React application to generate blob-like shapes using CSS border-radius.</strong>
</p>

##  Getting Started

To use this application, follow these steps:

1. Clone the repository: `git clone git@github.com:Nik0Sp/simple_blob_generator.git`
2. Change directory to the project folder: `cd simple-blob-generator`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit `http://localhost:3000` to see the application in action.

##  Usage

The application provides sliders and input fields to control the dimensions and curvature of the blob shape. By adjusting the sliders and input fields, users can create unique blob designs. The CSS code for the generated blob shape is displayed in the `css-code` input field.

To copy the CSS code, click the "Copy" button. The code will be automatically selected and copied to the clipboard. A notification will be shown to indicate that the code has been copied.

## Components

The main component of the application is `App`, which manages the state and event handling for generating the blob shape.

### State

The component uses the `useState` hook to manage the following state:

- `copyNotification`: Stores the status of the copy notification.

### Event Handling

The `useEffect` hook is used to set up event listeners and handle changes in the application.

- The `createBlob` function is called whenever any of the sliders or input fields change. It calculates the border radius and updates the blob shape accordingly.
- The "Copy" button click event is handled to select and copy the CSS code to the clipboard. It also triggers the copy notification.

### JSX Markup

The JSX markup in the `return` statement defines the structure and appearance of the application's user interface. It includes sliders for adjusting the blob's curvature, input fields for specifying the dimensions, an input field to display the generated CSS code, and a "Copy" button.

## Contributions

Contributions to this project are welcome. If you have any ideas, improvements, or bug fixes, feel free to open an issue or submit a pull request.

##  License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use and modify the code as per the license terms.