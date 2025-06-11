# Task Manager

A modern, responsive task management application built with React and Material-UI. Features include task creation, editing, deletion, and completion tracking with persistent storage using IndexedDB.

![Task Manager Screenshot](./src/assets/screenshot.png)

## Features

- 📝 Create, edit, and delete tasks
- ✅ Mark tasks as complete/incomplete
- 🌓 Light and dark theme support
- 💾 Persistent storage using IndexedDB
- 📱 Responsive design
- ⚡ Smooth animations and transitions

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/task-manager.git
   cd task-manager
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   The application will open in your default browser at [http://localhost:3000](http://localhost:3000).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Technologies Used

- React
- Material-UI
- IndexedDB
- Framer Motion
- Emotion

## Project Structure

```
src/
├── components/          # React components
├── utils/              # Utility functions and classes
├── theme/              # Theme configuration
├── assets/             # Images and icons
└── styles/             # Custom CSS styles
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License


## Acknowledgments

- [Material-UI](https://mui.com/) for the component library
- [Create React App](https://create-react-app.dev/) for the project bootstrap
- [Framer Motion](https://www.framer.com/motion/) for animations
