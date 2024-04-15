import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
	const { signIn } = useContext(AuthContext);

	const handleLogin = (e) => {
		e.preventDefault();

		const form = new FormData(e.currentTarget);
		const name = form.get("name");
		const email = form.get("email");
		const password = form.get("password");
		console.log(name, email, password);

		// signIn
		signIn(email, password)
			.then((result) => {
				console.log(result.user);
			})
			.catch((err) => {
				console.error("err", err);
			});
	};

	return (
		<div>
			<Navbar></Navbar>
			<div>
				<h2 className="my-10 text-3xl text-center">Please Login</h2>
				<form
					onClick={handleLogin}
					className="mx-auto card-body lg:w-1/2 md:w-3/4"
				>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Email</span>
						</label>
						<input
							type="email"
							name="email"
							placeholder="Email"
							className="input input-bordered"
							required
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Password</span>
						</label>
						<input
							type="password"
							name="password"
							placeholder="Password"
							className="input input-bordered"
							required
						/>
						<label className="label">
							<a
								href="#"
								className="label-text-alt link link-hover"
							>
								Forgot password?
							</a>
						</label>
					</div>
					<div className="mt-6 form-control">
						<button className="btn btn-primary">Login</button>
					</div>
				</form>
				<p className="text-center">
					Don&apos;t have account{" "}
					<Link
						className="font-bold text-blue-600"
						to={"/register"}
					>
						Register
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
