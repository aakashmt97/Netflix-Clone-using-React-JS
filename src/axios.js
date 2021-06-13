import axios from 'axios';

const instance = axios.create({
    baseURL = "https://api.themoviedb.org/3"
});

export default instance;


// Let say in any other JS file, if I type --> instance.get('/upcomingMovies');
// So it will ".get" will append the value init to the BaseURL as given below,
// baseURL = "https://api.themoviedb.org/3/upcomingMovies"