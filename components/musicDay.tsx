import { View, Text, StyleSheet } from "react-native"
import { useState, useEffect } from "react";
import { songList } from "@/functions/songList";

type Song = {
    id: number;
    title: string;
    artist: string;
    album?: string;
    duration: string;
    cover?: string;
  };

export default function MusicDay() {
    
      function getCurrentDay() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const today = new Date();
        return daysOfWeek[today.getDay()];
      }
    
      const [day] = useState(getCurrentDay)

      const [songs, setSongs] =useState<Song[]>([]);
      useEffect(() => {
        const songsToPlay = songList();
        setSongs(songsToPlay);
    }, []);
  return (
    <View>
        <View>
            <Text style={styles.texts}>Its new music {day}!</Text>
            <View></View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    texts: {
        color: "white",
    }
})