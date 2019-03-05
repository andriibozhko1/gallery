const api = {
   getAlbums() {
    const albums = fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
        .then(json => json);

      return albums
  }
}

export default api;