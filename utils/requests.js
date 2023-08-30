const API_KEY = process.env.API_KEY;

export default {
 
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=c92045b9d89b0bc01a8147608ddf2668&language=en-US`
    },
    fetchTopRated: {
        title: 'Top Rated',
        url: `/movie/top_rated?api_key=c92045b9d89b0bc01a8147608ddf2668&language=en-US`
    },
    fetchActionMovies: {
        title: 'Action',
        url: `/discover/movie?api_key=c92045b9d89b0bc01a8147608ddf2668&with_genres=28`
    },
    fetchComedyMovies: {
        title: 'Comedy',
        url: `/discover/movie?api_key=c92045b9d89b0bc01a8147608ddf2668&with_genres=35`
    },
    fetchHorrorMovie: {
        title: 'Horror',
        url: `/discover/movie?api_key=c92045b9d89b0bc01a8147608ddf2668&with_genres=27`
    },
    fetchRomanceMovie: {
        title: 'Romance',
        url: `/discover/movie?api_key=c92045b9d89b0bc01a8147608ddf2668&with_genres=10749`
    },
    fetchMysteryMovie: {
        title: 'Mystery',
        url: `/discover/movie?api_key=c92045b9d89b0bc01a8147608ddf2668&with_genres=9648`
    },
    fetchSciFiMovie: {
        title: 'Sci-Fi',
        url: `/discover/movie?api_key=c92045b9d89b0bc01a8147608ddf2668&with_genres=878`
    },
    fetchWesternMovie: {
        title: 'Western',
        url: `/discover/movie?api_key=c92045b9d89b0bc01a8147608ddf2668&with_genres=37`
    },
    fetchAnimationMovie: {
        title: 'Animation',
        url: `/discover/movie?api_key=c92045b9d89b0bc01a8147608ddf2668&with_genres=16`
    },
    fetchTvMovie: {
        title: 'TV Movie',
        url: `/discover/movie?api_key=c92045b9d89b0bc01a8147608ddf2668&with_genres=10770`
    },

};