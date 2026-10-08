import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/AppNavigator';
import { initializeDatabase } from './src/database/database';
import { colors } from './src/constants/colors';

export default function App() {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => { initializeDatabase().then(() => setReady(true)).catch((e) => { setError(e.message); setReady(true); }); }, []);
  if (!ready) return <View style={styles.loading}><ActivityIndicator color={colors.primary} size="large" /></View>;
  if (error) return <View style={styles.loading}><Text style={styles.error}>Could not open your local expense database. {error}</Text></View>;
  return <NavigationContainer><StatusBar style="dark" /><AppNavigator /></NavigationContainer>;
}
const styles = StyleSheet.create({ loading: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24, backgroundColor: colors.background }, error: { color: colors.danger, textAlign: 'center' } });
