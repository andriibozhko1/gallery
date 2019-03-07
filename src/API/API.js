const api = {
   async getAlbums() {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
	      const albums = await response.json();
	      return albums;
  },
  async getPhoto() {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const photo = await response.json();
    return photo;
  }
}

export default api;