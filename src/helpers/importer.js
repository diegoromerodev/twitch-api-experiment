function importAll(cont) {
  const videos = {};
  cont.keys().map((item, index) => {
    videos[item.replace("./", "")] = cont(item);
  });
  return videos;
}

const allVideos = importAll(require.context("../assets", false, /\.mp4$/));

export default allVideos;
