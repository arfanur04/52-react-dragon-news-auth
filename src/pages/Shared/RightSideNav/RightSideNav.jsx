import {
	FaFacebook,
	FaGithub,
	FaGoogle,
	FaInstagram,
	FaTwitter,
} from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
	return (
		<div>
			{/* Login with ----------------------------------- */}
			<div className="p-4 mb-6 space-y-3">
				<h2 className="text-3xl">Login With</h2>
				<button className="w-full btn btn-outline">
					<FaGoogle />
					Google
				</button>
				<button className="w-full btn btn-outline">
					<FaGithub />
					Github
				</button>
			</div>
			{/* Find Us On ----------------------------------- */}
			<div className="p-4 mb-6">
				<h2 className="mb-4 text-3xl">Find Us On</h2>
				<a
					href=""
					className="flex items-center p-4 text-lg border rounded-t-lg"
				>
					<FaFacebook className="mr-3" />
					Facebook
				</a>
				<a
					href=""
					className="flex items-center p-4 text-lg border-x"
				>
					<FaTwitter className="mr-3" />
					Twitter
				</a>
				<a
					href=""
					className="flex items-center p-4 text-lg border rounded-b-lg"
				>
					<FaInstagram className="mr-3" />
					Instagram
				</a>
			</div>
			{/* q zone ----------------------------------- */}
			<div className="p-4 mb-6 space-y-3">
				<h2 className="text-3xl">Q Zone</h2>
				<img
					src={qZone1}
					alt=""
				/>
				<img
					src={qZone2}
					alt=""
				/>
				<img
					src={qZone3}
					alt=""
				/>
			</div>
		</div>
	);
};

export default RightSideNav;
