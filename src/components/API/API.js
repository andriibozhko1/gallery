const api = {
   getAlbums() {
    const albums = fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
        .then(json => json);

      return albums
  },
   getPhoto() {
    const photo = fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
        .then(json => json);
      return photo
  }
}

export default api;