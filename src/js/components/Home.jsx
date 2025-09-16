import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		// Here we use Bootstrap's navbar component as an example
		<div className="container-fluid">

			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">Navbar</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">About</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Services</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			{/* Jumbotron */}
			<div className="p-5 mb-4 bg-light rounded-3">
				<div className="container-fluid py-5">
					<h1 className="display-5 fw-bold">Custom jumbotron</h1>
					<p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
					<button className="btn btn-primary btn-lg" type="button">Example button</button>
				</div>
			</div>

			<div className="container">

				<div className="d-flex">
					<MyCard />
					<MyCard />
					<MyCard />
					<MyCard />
				</div>
			</div>
		</div>
	)
}






export default Home;


// We renamed the component to MyCard 

function MyCard() {
	return (
		<div className="card" style={{ width: "18rem" }}> // Notice some HTML attributes change their names or values in order to work in React
			<img className="card-img-top" src="..." alt="Card image cap" /> // We should now take care to always close self-closing tags
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				<a href="#" className="btn btn-primary">Go somewhere</a>
			</div>
		</div>
	);
}
