import { View, StyleSheet, ScrollView, Text, StatusBar, SafeAreaView, Platform, Image, Button } from 'react-native';
import { useUserStore } from '@/states/useUserStore';
import { useSongStore } from '@/states/useSongStore';
import { useState, useEffect } from 'react';
import MusicDay from '@/components/musicDay';


import type { Song } from '@/states/useSongStore';

export default function HomeScreen() {
  const UserInfo = useUserStore((state) => state.userInfo);
  const profilPic = UserInfo?.[0]?.charAt(0);

  
  const artVal = () => `Artist ${Math.floor(Math.random() * 5) + 1}`;

  
  const [artistSong, setArtistSongs] = useState<Record<string, Song[]>>({})

  const generateArtistSongs = () => {
    const artistSongs: Record<string, Song[]> = {};
  
    Array.from({ length: 6 }).forEach(() => {
      const artistName = artVal(); 
      const songs = useSongStore.getState().pickArtistSongs(artistName);
  
      artistSongs[artistName] = songs;
    });
  
    return artistSongs;
  };
  
  useEffect(() => {
    const songs = generateArtistSongs();
    setArtistSongs(songs);
  }, []);
  return (
    <SafeAreaView style={styles.bodyContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerWrapper}>
          <View style={styles.headerContainer}>
            <View style={styles.profilePicContainer}>
              <Text style={styles.profilePic}>{profilPic}</Text>
            </View>
            <HeaderTab title="All" isActive={true} />
            <HeaderTab title="Music" />
            <HeaderTab title="Podcast" />
          </View>
        </View>
        <View style={styles.centeredContainer}>
            <View style={styles.randomArtContainer}>
      {Object.keys(artistSong).slice(1, 7).map((key, index) => (
        key ? (
          <View key={index} style={styles.songRow}>
            <Image 
      source={artistSong[key][0]?.cover 
        ? { uri: artistSong[key][0]?.cover } 
        : require('@/assets/images/volumetric-musical-background-with-treble-clef-notes-generative-ai.jpg')} 
      style={styles.songCover} 
    />
            <Text style={styles.artistsongs}>{key}</Text>
          </View>
        ) : null
      ))}
    </View>

      <MusicDay />

    </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Move HeaderTab here before styles so it can access styles without errors
const HeaderTab: React.FC<{ title: string; isActive?: boolean }> = ({ title, isActive = false }) => (
  <Text style={[styles.headercontent, isActive && styles.activeTab]}>{title}</Text>
);

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 50,
    width: "80%"
  },
  headerWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  headerContainer: {
    width: "65%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
  },
  profilePicContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
  profilePic: {
    color: "black",
    fontWeight: "700",
    fontSize: 15,
  },
  headercontent: {
    paddingVertical: 7,
    paddingHorizontal: 12,
    fontSize: 15,
    color: "white",
    backgroundColor: "#2C2C2C",
    borderRadius: 50,
    alignSelf: "center"
  },
  activeTab: {
    backgroundColor: "green",
    color: "black",
  },
  artistsongs: {
    color: "white",
    fontSize: 12
  },
  randomArtContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "flex-start",
  },
  songCover: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10, // Adds space between image and text
  },
  songRow: {
    flexDirection: "row", 
    alignItems: "center",
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#2C2C2C",
    borderRadius: 10,
  },
});