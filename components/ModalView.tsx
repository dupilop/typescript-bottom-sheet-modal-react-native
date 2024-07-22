import React, { useState } from 'react';
import { Button, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Modalize } from 'react-native-modalize';

const ModalView = ({handleSubmit, modalRef}: any) => {
  const [inputValue, setInputValue] = useState('')
    return (
      <Modalize ref={modalRef} adjustToContentHeight>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.modalContent}
      >
        <TextInput
          style={styles.input}
          placeholder="Enter text"
          value={inputValue}
          onChangeText={setInputValue}
        />
        <Button 
        title="Submit" 
        onPress={() => {
          handleSubmit(inputValue)
          setInputValue('')
        }}/>
      </KeyboardAvoidingView>
    </Modalize>
    )
}

const styles = StyleSheet.create({
    modalContent: {
      padding: 20,
      backgroundColor: 'white',
      marginBottom: 20,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 20,
      paddingHorizontal: 10,
    },
    button: {
      borderRadius: 20,
      paddingHorizontal: 50,
      paddingVertical: 5,
      elevation: 1,
      marginHorizontal: 19,
    },
  });

  export default ModalView;