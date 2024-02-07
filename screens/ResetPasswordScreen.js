import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const ResetPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    Alert.alert('Reset Password', 'Password reset email sent.');
  };

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <Button title="Reset Password" onPress={handleResetPassword} />
    </View>
  );
};

export default ResetPasswordScreen;
