import axios from "axios";

const bookSearch = "Harry+Potter"
const apiKey = "AIzaSyABRE3BViZ_TQQhOIkrIqxcjf9m7IDDXa0";

const languages = ["JavaScript", "Python", "C", "Ruby", "Java", "PHP", "C#"];
// Export an object containing methods we'll use for accessing the Google Books API
export default {
  getBookResultsByTitle: function(language) {
    return new Promise((resolve, reject) => {
      axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${bookSearch}&key=${apiKey}`)
        .then(res => {
          const bookResults = res.data;
          const results = bookResults.map(book => {
            return {
                title: book.items.volumeInfo.title,
                authors: book.items.volumeInfo.authors,
                description: book.items.volumeInfo.description,
                image: book.items.volumeInfo.imageLinks.smallThumbnail,
                link: book.items.volumeInfo.previewLink
            };
          });
          resolve(results);
        })
        .catch(err => reject(err));
    });
  }
};
