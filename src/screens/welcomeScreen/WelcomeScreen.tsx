import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';

// Logo Component
const Logo: React.FC = () => (
 <Image
    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4279/4279596.png' }}
    style={styles.logo}
    resizeMode="contain"
  />
);

// Title Component
const Title: React.FC = () => (
  <Text style={styles.title}>Welcome to HisabOk</Text>
);

// Tagline Component
const Tagline: React.FC = () => (
  <Text style={styles.tagline}>Track your expenses, effortlessly.</Text>
);

// Loader Component
const Loader: React.FC = () => (
  <ActivityIndicator size="large" color="#6366F1" style={styles.loader} />
);

// Footer Component
const Footer: React.FC = () => (
  <Text style={styles.footer}>Powered by HisabOk. All rights reserved © 2025</Text>
);

// Main Screen
const WelcomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Title />
      <Tagline />
      <Loader />
      <Footer />
    </View>
  );
};

export default WelcomeScreen;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 12,
  },
  tagline: {
    fontSize: 18,
    color: '#4B5563',
    marginBottom: 20,
  },
  loader: {
    marginBottom: 40,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    fontSize: 14,
    color: '#9CA3AF',
  },
});
