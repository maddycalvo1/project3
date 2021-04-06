import axios from "axios";

export default {
  // Gets all Parks in the given location
  searchParks: function(location) {
    return axios.get("/api/search/"+ location);
  },
  // Gets the Park with the given id
  getPark: function(id) {
    return axios.get("/api/search/location/" + id);
  },
  // Saves the Park into our DB
  savePark: function(parkData) {
    return axios.post("/api/park/", parkData);
  },
  // Saves a book to the database
  getBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  // Get all the blogs! ALL OF THEM!!!
  getBlogs: function() {
    return axios.get("/api/blogs")
  },
  // Time to save a Blog thing!
  saveBlog: function(blogData) {
    return axios.post("api/blogs", blogData)
  }
};
