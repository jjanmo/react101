import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

//GOAL : show movielist

const API_KEY = 'f064a67e0d808eb7bb367bbd759b1bcc';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            movieList: []
        };
    }

    changeObj(array) {
        const newObj = {}
        array.forEach(obj => {
            newObj[obj.id] = obj.name;
        })
        return newObj;
    }

    async getMovieList() {
        const { data: { results } } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        const { data: { genres } } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
        const genresFormat = this.changeObj(genres);
        results.forEach(movie => {
            movie.genres = movie.genre_ids.reduce(((list, id) => list.concat(genresFormat[id])), []);
        })
        console.log(results);
        this.setState({
            isLoading: false,
            movieList: results
        });
    }

    renderMovies(movieList) {
        return movieList.map(movie => {
            return (
                <Movie
                    key={ movie.id }
                    id={ movie.id }
                    title={ movie.title }
                    overview={ movie.overview }
                    poster={ movie.poster_path }
                    rating={ movie.vote_average }
                    release={ movie.release_date }
                    genres={ movie.genres }
                />
            );
        })
    }

    componentDidMount() {
        this.getMovieList();
    }

    render() {
        const { isLoading, movieList } = this.state;
        return (
            <div className="wrapper">{
                isLoading
                    ? 'Loading...'
                    : this.renderMovies(movieList)
            }</div>
        );
    }
}

export default App;
