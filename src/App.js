import React from 'react';

const MOVIE_POSTER_PATH = 'https://image.tmdb.org/t/p/w500';

let movieList = [
    {
        id: 1,
        title: 'The Outpost',
        poster: `${MOVIE_POSTER_PATH}/hPkqY2EMqWUnFEoedukilIUieVG.jpg`,
        popularity: 77.328
    },
    {
        id: 2,
        title: 'Superagente Makey',
        poster: `${MOVIE_POSTER_PATH}/27eA9xGba61LtKr7gJRnhtDDgEP.jpg`,
        popularity: 73.2
    },
    {
        id: 3,
        title: '반도',
        poster: `${MOVIE_POSTER_PATH}/7S9RvfMBWSTlUZ4VbxDY7oLeenk.jpg`,
        popularity: 78.552
    },
    {
        id: 4,
        title: 'Scoob!',
        poster: `${MOVIE_POSTER_PATH}/jHo2M1OiH9Re33jYtUQdfzPeUkx.jpg`,
        popularity: 93.058
    },
    {
        id: 5,
        title: 'Onward',
        poster: `${MOVIE_POSTER_PATH}/f4aul3FyD3jv3v4bul1IrkWZvzq.jpg`,
        popularity: 81.23
    }
]

//function component
function Movie({ title, poster, popularity }) {
    return (
        <section>
            <h2>{title}</h2>
            <img src={poster} alt={title} />
            <p>{popularity}</p>
        </section>
    );
}

//map안의 콜백함수를 따로 빼낼수도 있다
//리액트의 모든 엘리먼트는  다르게 보일 필요가 있기 때문에 유일한 키값을 갖도록 해준다
// key prop은 단지 리액트 내부에서 사용하기위한 것이지 컴퍼넌트로 전달되지는 않는다
function renderMovie(movie) {
    return (
        <Movie key={movie.id}
            title={movie.title}
            poster={movie.poster}
            popularity={movie.popularity
            }
        />);
}

function App() {
    return (
        <div>
            {movieList.map(renderMovie)}
        </div>
    );
}

export default App;
