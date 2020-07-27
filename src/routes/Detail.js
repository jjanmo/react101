import React from 'react';
import { Genres, POSTER_BASIC_PATH } from '../components/Movie';
import './Detail.css';

class Detail extends React.Component {
	constructor(props) {
		super(props);
		this.goBack = this.goBack.bind(this);
	}

	componentDidMount() {
		const { location, history } = this.props;
		if (!location.state) {
			history.push('/');
		}
	}

	goBack() {
		this.props.history.push('/');
	}

	render() {
		const { location } = this.props;
		if (location.state) {
			const {
				id,
				title,
				overview,
				poster,
				rating,
				release,
				genres,
			} = location.state;
			return (
				<div className="movie-container" id={id}>
					<div className="movie">
						<img
							src={`${POSTER_BASIC_PATH}${poster}`}
							alt={title}
							title={title}
						/>
						<div className="movie-detail">
							<h1>{title}</h1>
							<span className="release-year">
								{release.split('-').join('.')}
							</span>
							🎈 <span className="rating">{rating} / 10</span>
							<Genres genres={genres} />
							<div className="overview">{overview}</div>
						</div>
					</div>
					<button onClick={this.goBack} className="goback">
						back
					</button>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default Detail;
