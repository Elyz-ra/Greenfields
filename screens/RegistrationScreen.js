import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const RegistrationScreen = ({ navigation }) => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleRegistration = () => {
    Alert.alert('Registration Success', 'Account created successfully.');
    navigation.navigate('Login');
  };

  return (
    <View>
      <TextInput placeholder="New Username" value={newUsername} onChangeText={setNewUsername} />
      <TextInput placeholder="New Password" value={newPassword} onChangeText={setNewPassword} secureTextEntry />
      <Button title="Register" onPress={handleRegistration} />
    </View>
  );
};

export default RegistrationScreen;
