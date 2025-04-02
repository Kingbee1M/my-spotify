import { useSongStore } from "@/states/useSongStore"



export const songList = () => {
    const songs = []
    for (let i = 1; i <= 15; i++) {
        let artval = Math.floor(Math.random()*20)
        let title = `Song ${artval}`
        let songtoplay =  useSongStore.getState().songs.filter(song => song.title === title)
        if (songtoplay.length > 0) {
            songs.push(songtoplay[0]);
        }
    }
    return songs;
} 