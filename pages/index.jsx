import React from 'react';
import Head from '../src/components/head/head.jsx';
import Nav from '../src/components/nav/nav.jsx';
import Card from '../src/components/card/card.jsx';
import '../src/scss/index.scss';

const Home = () => {
	return (
		<div>
			<Head title="Home" />
			<Nav />

			<div className="hero">
				<h1 className="title">Shortcuts</h1>
				<div className="grid-container">
					<div className="grid">
						<Card color={'green'} href="/">
							<h3>Remind Me Later</h3>
						</Card>
						<Card color={'yellow'} href="/">
							<h3>Examples</h3>
						</Card>
						<Card color={'purple'} href="/">
							<h3>Create Next App</h3>
						</Card>
						<Card color={'pink'} href="/">
							<h3>Deploy blog post</h3>
						</Card>
						<Card color={'red'} href="/">
							<h3>Commit to Repo</h3>
						</Card>
						<Card color={'empty'} href="/">
							<h3>Got an idea?</h3>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
