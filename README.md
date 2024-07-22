React Native Bottom Sheet Modal with TypeScript
Setup and Run the Project
Prerequisites
Node.js and npm/yarn installed.
React Native CLI or Expo CLI installed.
Android Studio or Xcode installed for Android/iOS development.
Installation
Clone the repository:

sh
Copy code
git clone <repository-url>
cd <repository-name>
Install dependencies:

sh
Copy code
npm install
or

sh
Copy code
yarn install
Install additional dependencies for gesture handling:

sh
Copy code
npm install react-native-reanimated react-native-gesture-handler react-native-modalize
or

sh
Copy code
yarn add react-native-reanimated react-native-gesture-handler react-native-modalize
Link native dependencies (for React Native CLI):

sh
Copy code
npx react-native link
Configure iOS project:

Open the iOS project in Xcode.

Go to Build Settings -> Other Linker Flags and add $(inherited) if not already present.

Install CocoaPods dependencies:

sh
Copy code
npx pod-install
Running the Project
Start the Metro bundler:

sh
Copy code
npx react-native start
Run the project on an Android emulator or device:

sh
Copy code
npx react-native run-android
Run the project on an iOS simulator or device:

sh
Copy code
npx react-native run-ios
Approach and Design Decisions
State Management
The component uses React's useState hook to manage the state of the input text and the submitted text. This is a simple and effective way to manage state for this use case.

Bottom Sheet Modal
The react-native-modalize library is used to create the bottom sheet modal. It provides a simple and customizable modal component that fits the requirements well.

Gesture Handling
To ensure proper gesture handling, the entire component is wrapped in GestureHandlerRootView from react-native-gesture-handler. This ensures that all gestures are recognized correctly.

Keyboard Handling
The KeyboardAvoidingView component is used to ensure the modal content is not blocked by the keyboard when it is open. This component adjusts its position based on the keyboard's presence, providing a smooth user experience.

Assumptions
The project assumes a basic React Native setup with the necessary development environment for Android and iOS.
The project assumes that react-native-reanimated, react-native-gesture-handler, and react-native-modalize are compatible with the current React Native version.
The project assumes that the TouchableWithoutFeedback component is sufficient to dismiss the keyboard when tapping outside the input field.
Conclusion
This project demonstrates a simple yet effective way to implement a bottom sheet modal in React Native using TypeScript. The use of react-native-modalize and KeyboardAvoidingView ensures a smooth and user-friendly experience. By following the setup and installation instructions, you should be able to run and test the project successfully.

This README.md file provides clear instructions on how to set up and run the project, explains the approach and design decisions, and lists any assumptions made during the implementation.