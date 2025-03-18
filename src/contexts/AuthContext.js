import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Lấy trạng thái đăng nhập từ AsyncStorage khi ứng dụng khởi động
  useEffect(() => {
    const loadLoginStatus = async () => {
      try {
        const storedStatus = await AsyncStorage.getItem('isLoggedIn');
        if (storedStatus !== null) {
          setIsLoggedIn(JSON.parse(storedStatus)); // Chuyển đổi thành boolean
        }
      } catch (error) {
        console.error('Error loading login status:', error);
      }
    };

    loadLoginStatus();
  }, []);

  // Lưu trạng thái `isLoggedIn` vào AsyncStorage mỗi khi thay đổi
  useEffect(() => {
    const saveLoginStatus = async () => {
      try {
        await AsyncStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
      } catch (error) {
        console.error('Error saving login status:', error);
      }
    };

    saveLoginStatus();
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
