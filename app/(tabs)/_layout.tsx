import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { BlurView } from 'expo-blur';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useColorScheme } from '@/hooks/useColorScheme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: () =>
          Platform.OS === 'ios' ? <BlurView intensity={50} style={{ flex: 1 }} /> : null,
        tabBarStyle: {
          backgroundColor: 'transparent',
          position: 'absolute',
          elevation: 0,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <FontAwesome name="search" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="yourLibrary"
        options={{
          title: 'Your Library',
          tabBarIcon: ({ color }) => <FontAwesome name="bookmark" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="premium"
        options={{
          title: 'Premium',
    tabBarIcon: ({ color }) => (
      <FontAwesome name="spotify" size={28} color={color} />
    ),
  }}
/>
    </Tabs>
  );
}
