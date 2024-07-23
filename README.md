# TypeScript Bottom Sheet Modal React Native

This is a [React Native ](https://reactnative.dev/) project bootstrapped with [`create-expo-app`](https://docs.expo.dev/tutorial/create-your-first-app/).

## Getting Started

First, Clone the repository:

```bash
git clone https://github.com/dupilop/typescript-bottom-sheet-modal-react-native
cd typescript-bottom-sheet-modal-react-native
```


Run the development server:

```bash
npm install
# or
yarn install
```

Prerequisites
- Node.js and npm/yarn installed.
- React Native CLI or Expo CLI installed.


Start Project:

```bash
npm start
# or 
yarn run
```

### Approach and Design Decisions
#### State Management
The component uses React's [useState](https://legacy.reactjs.org/docs/hooks-state.html) hook to manage the state of the input text and the submitted text. This is a simple and effective way to manage state for this use case.

#### Bottom Sheet Modal
The [react-native-modalize](https://www.npmjs.com/package/react-native-modalize/v/1.0.0-alpha.9) library is used to create the bottom sheet modal. It provides a simple and customizable modal component that fits the requirements well.

#### Gesture Handling
To ensure proper gesture handling, the entire component is wrapped in GestureHandlerRootView from [react-native-gesture-handler](https://www.npmjs.com/package/react-native-gesture-handler). This ensures that all gestures are recognized correctly.

#### Keyboard Handling
The [KeyboardAvoidingView](https://reactnative.dev/docs/keyboardavoidingview) component is used to ensure the modal content is not blocked by the keyboard when it is open. This component adjusts its position based on the keyboard's presence, providing a smooth user experience.

#### Assumptions
The project assumes a basic React Native setup with the necessary development environment for Android and iOS. The project assumes that react-native-reanimated, react-native-gesture-handler, and react-native-modalize are compatible with the current React Native version.
The project assumes that the TouchableWithoutFeedback component is sufficient to dismiss the keyboard when tapping outside the input field.

#### Conclusion
This project demonstrates a simple yet effective way to implement a bottom sheet modal in React Native using TypeScript. The use of react-native-modalize and KeyboardAvoidingView ensures a smooth and user-friendly experience. By following the setup and installation instructions, you should be able to run and test the project successfully.

This README.md file provides clear instructions on how to set up and run the project, explains the approach and design decisions, and lists any assumptions made during the implementation.