import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import './Movie.css';

export const POSTER_BASIC_PATH = 'https://image.tmdb.org/t/p/w154';

export function Genres({ genres }) {
	return (
		<ul>
			{genres.map((genre, index) => (
				<li key={index}>{genre}</li>
			))}
		</ul>
	);
}

function Movie({ id, title, overview, poster, rating, release, genres }) {
	return (
		<div className="movie">
			<Link
				to={{
					pathname: `/detail/${id}`,
					state: {
						id,
						title,
						overview,
						poster,
						rating,
						release,
						genres,
					},
				}}>
				<section id={id}>
					<img
						src={`${POSTER_BASIC_PATH}${poster}`}
						alt={title}
						title={title}
					/>
					<div className="movie-detail">
						<h2>{title}</h2>
						<span className="release-year">{release.split('-').join('.')}</span>
						🎈
						<Genres genres={genres} />
						<div className="overview">{`${overview.slice(0, 150)}...`}</div>
					</div>
				</section>
			</Link>
		</div>
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
