import axios from "axios";

const bookSearch = "Harry+Potter";
const apiKey = "AIzaSyABRE3BViZ_TQQhOIkrIqxcjf9m7IDDXa0";

// Export an object containing methods we'll use for accessing the Google Books API
export default {
    getBookResultsByTitle: function() {
        return new Promise((resolve, reject) => {
        axios
            .get(`https://www.googleapis.com/books/v1/volumes?q=${bookSearch}&key=${apiKey}`)
            .then(res => {
            const bookResults = res.data.items;
            const results = bookResults.map(book => {
                // console.log(book);
                const { imageLinks = null } = book.volumeInfo

                const thumbnail = imageLinks ? imageLinks.thumbnail : null
                return {
                    id: book.id,
                    title: book.volumeInfo.title,
                    authors: book.volumeInfo.authors,
                    description: book.volumeInfo.description,
                    image: thumbnail,
                    link: book.volumeInfo.previewLink
                };
            });
            console.log(results);
            resolve(results);
            })
            .catch(err => reject(err));
        });
    },
};
