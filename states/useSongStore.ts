import { create } from 'zustand';
import generateFakeSongs from '../functions/generateSongs';

export type Song = {
  id: number;
  title: string;
  artist: string;
  duration: string;
  album?: string;
  cover: string;
};

type SongState = {
  songs: Song[];
  favoriteSongs: Song[];
  likedSongs: Song[];
  addSong: (song: Song) => void;
  removeSong: (id: number) => void;
  addToFavorites: (song: Song) => void;
  addToLiked: (song: Song) => void;
  pickArtistSongs: (artistName: string) => Song[]; // Corrected function type
};

const initiate = generateFakeSongs();

export const useSongStore = create<SongState>((set, get) => ({
  songs: initiate,
  favoriteSongs: [],
  likedSongs: [],

  addSong: (song) =>
    set((state) => ({ songs: [...state.songs, song] })),

  removeSong: (id) =>
    set((state) => ({
      songs: state.songs.filter((song) => song.id !== id),
      favoriteSongs: state.favoriteSongs.filter((song) => song.id !== id),
      likedSongs: state.likedSongs.filter((song) => song.id !== id),
    })),

  addToFavorites: (song) =>
    set((state) => ({
      favoriteSongs: [...state.favoriteSongs, song],
    })),

  addToLiked: (song) =>
    set((state) => ({
      likedSongs: [...state.likedSongs, song],
    })),

  pickArtistSongs: (artistName) => {
    return get().songs.filter((song) => song.artist === artistName);
  },
}));