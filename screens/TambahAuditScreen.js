import React, { useState } from 'react';
import { View, Text, Button, TextInput, Picker, ScrollView, Platform, DatePickerIOS } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TambahAuditScreen = ({ navigation }) => {
  const [judulTemuan, setJudulTemuan] = useState('');
  const [areaAudit, setAreaAudit] = useState('Area 1');
  const [tanggalAudit, setTanggalAudit] = useState(new Date());
  const [tanggalClose, setTanggalClose] = useState(new Date());
  const userAuditor = 'Nama User Auditor';

  const handleSaveAudit = async () => {
    try {
      // Buat objek data audit
      const auditData = {
        judulTemuan,
        areaAudit,
        tanggalAudit: tanggalAudit.toISOString(), // Konversi tanggal ke format ISO string
        tanggalClose: tanggalClose.toISOString(),
        userAuditor,
      };

      // Simpan data audit ke penyimpanan lokal
      await AsyncStorage.setItem('auditData', JSON.stringify(auditData));

      // Setelah penyimpanan selesai, kembali ke halaman menu utama atau lakukan aksi lainnya
      navigation.navigate('MainMenu');
    } catch (error) {
      console.error('Error saving audit:', error);
    }
  };

  return (
    <ScrollView>
      <View style={{ padding: 16 }}>
        <Text>Judul/Temuan Audit:</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
          value={judulTemuan}
          onChangeText={(text) => setJudulTemuan(text)}
        />

        <Text>Area Audit:</Text>
        <Picker
          selectedValue={areaAudit}
          onValueChange={(itemValue) => setAreaAudit(itemValue)}
        >
          <Picker.Item label="Area 1" value="Area 1" />
          <Picker.Item label="Area 2" value="Area 2" />
        </Picker>

        <Text>Tanggal Audit:</Text>
        {Platform.OS === 'ios' && (
          <DatePickerIOS
            date={tanggalAudit}
            onDateChange={(date) => setTanggalAudit(date)}
            mode="date"
          />
        )}

        <Text>Tanggal Close:</Text>
        {Platform.OS === 'ios' && (
          <DatePickerIOS
            date={tanggalClose}
            onDateChange={(date) => setTanggalClose(date)}
            mode="date"
          />
        )}

        <Text>User Auditor: {userAuditor}</Text>

        <Button title="Save Audit" onPress={handleSaveAudit} />
      </View>
    </ScrollView>
  );
};

export default TambahAuditScreen;
