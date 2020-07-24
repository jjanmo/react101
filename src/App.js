import React from 'react';
import axios from 'axios';
import Movie from './Movie';

//GOAL : show movielist

const API_KEY = 'f064a67e0d808eb7bb367bbd759b1bcc';

async function getMovieList() {
    const { data: { results } } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    return results;
}

function renderMovies(list) {
    return list.map(movie => {
        return (
            <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster={movie.poster_path}
                rating={movie.vote_average}
            />
        );
    })
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            movieList: []
        };
        this.getMovieList = getMovieList;
    }

    async componentDidMount() {
        this.setState({
            isLoading: false,
            movieList: await this.getMovieList()
        });
    }

    render() {
        const { isLoading, movieList } = this.state;
        return (
            <h1>{
                isLoading
                    ? 'Loading...'
                    : renderMovies(movieList)
            }</h1>
        );
    }
}


export default App;
