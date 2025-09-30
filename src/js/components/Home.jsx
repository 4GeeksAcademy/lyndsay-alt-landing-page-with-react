import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";
//include images into your bundle


//create your first component
const Home = () => {

	const cards = [
		{
			title: "Card title 1",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			buttonText: "Find Out More!",
			imgSrc: "https://via.placeholder.com/500x325",
		},
		{
			title: "Card title 2",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			buttonText: "Find Out More!",
			imgSrc: "https://via.placeholder.com/500x325",
		},
		{
			title: "Card title 3",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			buttonText: "Find Out More!",
			imgSrc: "https://via.placeholder.com/500x325",
		},
		{
			title: "Card title 4",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			buttonText: "Find Out More!",
			imgSrc: "https://via.placeholder.com/500x325",
		},
	];

	return (
		<>
			<Navbar />
			<div className="container my-4">
				<Jumbotron />
				<div className="row">
					{cards.map((card, index) => (
						<div className="col-md-3 mb-4" key={index}>
							<Card
								title={card.title}
								description={card.description}
								buttonText={card.buttonText}
								imgSrc={card.imgSrc}
							/>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
};



export default Home;




