// Greenfields/screens/MainMenuScreen.js
import React from 'react';
import { View, Button } from 'react-native';

const MainMenuScreen = ({ navigation }) => {
  const handleNavigateHasilAudit = () => {
    navigation.navigate('HasilAudit');
  };

  return (
    <View>
      <Button title="Tambah Audit" onPress={handleNavigateTambahAudit} />
      <Button title="Hasil Audit" onPress={handleNavigateHasilAudit} />
    </View>
  );
};

export default MainMenuScreen;
