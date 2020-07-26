import React from 'react';
import Proptypes from 'prop-types';
import './Movie.css';

const POSTER_BASIC_PATH = 'https://image.tmdb.org/t/p/w154';

function Movie({ id, title, overview, poster, rating, release, genres }) {
	return (
		<section id={id}>
			<img src={`${POSTER_BASIC_PATH}${poster}`} alt={title} title={title} />
			<div className='movie-detail'>
				<h2>{title}</h2>
				<span className='release-year'>{release.split('-').join('.')}</span>🎈
				<span className='rating'>{rating} / 10</span>
				<Genres genres={genres} />
				<div className='overview'>{`${overview.slice(0, 150)}...`}</div>
			</div>
		</section>
	);
}

function Genres({ genres }) {
	return (
		<ul>
			{genres.map((genre, index) => (
				<li key={index}>{genre}</li>
			))}
		</ul>
	);
}

Movie.propTypes = {
	id: Proptypes.number.isRequired,
	title: Proptypes.string.isRequired,
	overview: Proptypes.string.isRequired,
	poster: Proptypes.string.isRequired,
	rating: Proptypes.number.isRequired,
	release: Proptypes.string.isRequired,
	genres: Proptypes.array.isRequired,
};

export default Movie;
