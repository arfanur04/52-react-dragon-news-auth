import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			console.log("user in the auth state changed", currentUser);
			setUser(currentUser);
			setLoading(false);
		});
		return () => unsubscribe();
	}, []);

	// use Context value
	const authInfo = {
		user,
		loading,
		setLoading,
		// ProviderLogin,
		createUser,
		signIn,
		// updateUserProfile,
		// verifyEmail,
		logOut,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;

AuthProvider.propTypes = {
	children: PropTypes.node,
};
