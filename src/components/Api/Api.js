export default class Api {
  constructor(url) {
    this.url = url;
  }

  getData() {
    return fetch(this.url).then((response) => response.json());
  }
}

// fetch('http://example.com/movies.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data));
