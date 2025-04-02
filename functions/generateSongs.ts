const generateFakeSongs = () => {
  const songs = [];
  for (let i = 1; i <= 50; i++) {
    songs.push({
      id: i,
      title: `Song ${i}`,
      artist: `Artist ${Math.ceil(i / 5)}`,
      album: `Album ${Math.ceil(i / 10)}`,
      duration: `${Math.floor(Math.random() * 4) + 2}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
      cover: `https://picsum.photos/seed/${i}/200/200`,
    });
  }
  return songs;
};

export default generateFakeSongs;