# Task Tracker App

A simple mobile application for managing tasks, built with React Native, Expo, and TypeScript.

## Features
- View a list of tasks
- Create a new task (empty tasks are blocked)
- Mark tasks as complete or incomplete
- Filter tasks (All / Active / Completed)
- Persist tasks locally (data remains after restarting the app)

## Setup Instructions

### Prerequisites
Make sure you have Node.js and npm installed. You also need Expo Go installed on your physical mobile device if you want to test on it, or an iOS/Android emulator running on your machine.

### Installation

1. Clone or download this repository.
2. Navigate into the project directory:
   ```bash
   cd TaskTracker
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the Expo development server:
```bash
npx expo start
```
or 
```bash
npm start
```

This will open a Metro Bundler interface in your terminal (and potentially browser). 
- To run on an Android emulator, press `a`.
- To run on an iOS simulator (Requires macOS), press `i`.
- To run on your physical device, scan the QR code with the Expo Go app.

## Technologies Used
- **React Native & Expo**: The core framework. Expo simplifies setting up and building React Native apps significantly, out of the box.
- **TypeScript**: Used for type safety (defining `Task` and `FilterType` models), catching errors during development, and making the code more robust and predictable.
- **@react-native-async-storage/async-storage**: Chosen for local persistence. It's a simple, unencrypted, asynchronous, persistent, key-value storage system that is standard for React Native, making it perfect for lightweight apps like this task tracker without Needing a complex local database like SQLite.

## Future Improvements
If I had more time, I would consider the following additions:
- **Animations/Transitions**: Add Framer Motion or React Native Reanimated to animate tasks entering or leaving the list, or when being marked as completed.
- **Editing Tasks**: Allow users to edit the text of an existing task.
- **Task Deletion**: Allow users to permanently delete a task (currently they can only be marked as completed).
- **Date/Time Reminders**: Adding a due date feature using a date picker and scheduling local notifications via `expo-notifications`.
- **Global State Management**: If the app were to grow more complex, moving from a custom hook context down into Redux Toolkit or Zustand instead of relying on prop drilling or local hooks.
- **Theming**: Implement a robust Dark Mode / Light mode switch.
