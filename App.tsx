import React, { useState, useRef } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';
import ModalView from './components/ModalView';
import ListingView from './components/ListingView';

export default function App() {
  const [listViewable, setListViewable] = useState<string[]>([]);
  const modalRef = useRef<Modalize>(null);

  const openModal = () => {
    modalRef.current?.open();
  };

  const closeModal = () => {
    modalRef.current?.close();
  };

  const handleSubmit = (input: string) => {
    setListViewable([...listViewable, input]);
    closeModal();
  };

  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Button title="Open Modal" onPress={openModal} />
        <ListingView lists={listViewable} />
        <ModalView handleSubmit={handleSubmit} modalRef={modalRef}/>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
