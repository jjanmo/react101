import React from 'react';
import Proptypes from 'prop-types'

const POSTER_BASIC_PATH = 'https://image.tmdb.org/t/p/w185';

function Movie({ id, title, poster, rating }) {
    return (
        <section id={id}>
            <h5>{title}</h5>
            <img src={`${POSTER_BASIC_PATH}${poster}`} alt={title} title={title} />
            <div>{rating} / 10</div>
        </section>
    );
}

Movie.propTypes = {
    id: Proptypes.number.isRequired,
    title: Proptypes.string.isRequired,
    poster: Proptypes.string.isRequired,
    rating: Proptypes.number.isRequired
}

export default Movie;