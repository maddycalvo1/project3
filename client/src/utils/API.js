import axios from "axios";

export default {
  // Gets all books
  savePark: function() {
    return axios.post("/api/park/");
  },
  // Gets the book with the given id
  getParkById: function(id) {
    return axios.get("/api/park/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // getParkLocation: function () {
  //   return axios.get("/api/search/:location")
  // },
  // We need an if statement that will read a given string or list and pass them
  // through a route

  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
