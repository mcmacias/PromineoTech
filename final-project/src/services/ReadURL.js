
// const readUrl = `https://64c5aeebc853c26efadaea42.mockapi.io/PTF/ReadBooks`;

export default class ReadURL {
  constructor(readUrl){
    this.url = readUrl;
  }

  async getBooksRead(){
    const url = `${this.url}`;
    console.log(url);
    return (
      fetch(url)
      .then(data => data.json())
      .then((json) => {
        return json;
      }));
  }
}