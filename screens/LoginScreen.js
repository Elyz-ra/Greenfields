import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const dummyUser = { username: 'user1', password: 'pass1' };
    if (username === dummyUser.username && password === dummyUser.password) {
      navigation.navigate('MainMenu');
    } else {
      Alert.alert('Login Failed', 'Invalid username or password.');
    }
  };

  const handleRegister = () => {
    navigation.navigate('Registration');
  };

  const handleResetPassword = () => {
    navigation.navigate('ResetPassword');
  };

  return (
    <View>
      <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={handleRegister} />
      <Button title="Forgot Password?" onPress={handleResetPassword} />
    </View>
  );
};

export default LoginScreen;
