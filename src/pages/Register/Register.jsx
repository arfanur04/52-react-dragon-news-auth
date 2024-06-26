import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
	const { createUser } = useContext(AuthContext);

	const handleRegister = (e) => {
		e.preventDefault();

		const form = new FormData(e.currentTarget);
		const name = form.get("name");
		const photo = form.get("photo");
		const email = form.get("email");
		const password = form.get("password");
		console.log(name, photo, email, password);

		// create user
		createUser(email, password)
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
				<h2 className="my-10 text-3xl text-center">Please Register</h2>
				<form
					onClick={handleRegister}
					className="mx-auto card-body lg:w-1/2 md:w-3/4"
				>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Name</span>
						</label>
						<input
							type="text"
							name="name"
							placeholder="Name"
							className="input input-bordered"
							required
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Photo URL</span>
						</label>
						<input
							type="text"
							name="photo"
							placeholder="Photo URL"
							className="input input-bordered"
							required
						/>
					</div>
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
						<button className="btn btn-primary">Register</button>
					</div>
				</form>
				<p className="text-center">
					Already have a account{" "}
					<Link
						className="font-bold text-blue-600"
						to={"/login"}
					>
						Login
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;
