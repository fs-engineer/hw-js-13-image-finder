export default {
  options: {
    method: 'GET',
  },

  searchQuery: '',
  page: 1,
  totalImages: '',

  key: '13118160-85f169275baea695b5828e8ed',

  async fetchImages() {
    try {
      const response = await fetch(
        `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.key}`,
        this.options,
      );
      const { hits, total } = await response.json();
      return { hits, total };
    } catch (error) {
      throw error;
    }
  },

  resetPage() {
    this.page = 1;
  },

  incrementPage() {
    this.page += 1;
  },

  set query(value) {
    this.searchQuery = value;
  },

  // get totalImageLength() {
  //   return this.totalImages.length;
  // },
};
