import { createBrowserRouter } from "react-router-dom";
import Roots from "../../layouts/Roots";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Register from "../../pages/Register/Register";
import News from "../../pages/News/News";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Roots>Hello world!</Roots>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
				loader: () => fetch("/news.json"),
			},
			{
				path: "/news/:_id",
				element: (
					<PrivateRoute>
						<News></News>
					</PrivateRoute>
				),
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
		],
	},
]);

export default router;
