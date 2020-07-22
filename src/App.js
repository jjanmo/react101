import React from 'react';
import PropTypes from 'prop-types';

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

//prop-types : react에서 컴퍼넌트로 전달되는 prop의 타입을 체크함으로서 오류를 인지할수있다.
//-> 부수적 효과 : proptype을 상세하게 명세함으로서 그것만으로도 전달되는 prop이 무엇이고 컴퍼넌트간의 
//전달되는 데이터의 타입들을 명확하게 인지할 수 있다. 이로 인해 가독성이 좋아질 수 있다

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired
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
