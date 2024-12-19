import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image,Button ,Alert, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LogoutPage({ navigation}) {
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150'); 

  useEffect(() => {
    const loremPicsumImage = 'https://fastly.picsum.photos/id/838/5000/3333.jpg?hmac=QLioLwW7LgW7mt2ADC8syet_zrW2Maaa9QV_XNVxP_Q'; 
    setProfileImage(loremPicsumImage);
  }, []);

  const handleLogout = async () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
          onPress: async () => {
            try {
              await AsyncStorage.removeItem('userToken');
              navigation.replace('Login');
            } catch (error) { 
              console.error('Error clearing AsyncStorage during logout:', error);
              Alert.alert('Error', 'Failed to log out. Please try again.');
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <LinearGradient
      colors={['#2f3640', '#2f3640']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
    <TouchableOpacity onPress={handleLogout}>
      <LinearGradient
        colors={['#141414', '#141414']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.headerGradient}
      >
           <Text style={styles.headerText}>Logout</Text>
      </LinearGradient>
    </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, height: '100%', justifyContent: 'center' },
  headerGradient: {
    padding: 15,
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  itemList: {
    padding: 15,
    margin: 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 40,
  },
});
