export default {
  options: {
    method: 'GET',
  },

  searchQuery: '',
  page: 1,

  key: '13118160-85f169275baea695b5828e8ed',

  async fetchImages() {
    const response = await fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.key}`,
      this.options,
    );
    const { hits, total } = await response.json();
    return { hits, total };
  },

  // fetchImages() {
  //   return fetch(
  //     `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.key}`,
  //     this.options,
  //   )
  //     .then(res => res.json())
  //     .then(({ hits }) => {
  //       this.totalImages = [...hits, ...this.totalImages];
  //       console.log(this.totalImages);
  //       return hits;
  //     })
  //     .catch(error => console.log(error));
  // },

  resetPage() {
    this.page = 1;
  },

  incrementPage() {
    this.page += 1;
  },

  imageCollection(obj) {
    this.totalImages.append(obj);
  },

  set query(value) {
    this.searchQuery = value;
  },

  get totalImageLength() {
    return this.totalImages.length;
  },
};
