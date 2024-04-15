import { useLoaderData } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import LeftSideNav from "../../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../../Shared/Navbar/Navbar";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import BreakingNews from "../BreakingNews/BreakingNews";
import NewsCard from "../NewsCard/NewsCard";

const Home = () => {
	const news = useLoaderData();
	return (
		<div>
			<Header></Header>
			<BreakingNews></BreakingNews>
			<Navbar></Navbar>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-4">
				<div>
					<LeftSideNav></LeftSideNav>
				</div>
				{/* news container */}
				<div className="md:col-span-2">
					{news.map((aNews) => (
						<NewsCard
							key={aNews._id}
							news={aNews}
						></NewsCard>
					))}
				</div>
				<div>
					<RightSideNav></RightSideNav>
				</div>
			</div>
		</div>
	);
};

export default Home;
