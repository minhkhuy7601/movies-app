const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "ca90f43fb4cba855cfbbf13084a3df5b",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
