import 'react-native-gesture-handler';
import React from 'react';
import RootRouter from './src/routers/index';
import { AuthProvider } from './src/contexts/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <RootRouter />
    </AuthProvider>
  );
};

export default App;
