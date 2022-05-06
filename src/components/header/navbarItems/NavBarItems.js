/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import userPhoto from "../../../assests/img/tony.JPG";

const navBarItems = () => {
	return (
		<>
			<a href="#">Home</a>

			<a href="#">Course Catalog</a>

			<a href="#">Resources</a>

			
			<img
				src={userPhoto}
				alt="User"
				className="navbarItems__icon user-photo"
			/>
			<button className="navbarItems__btn btn">Sign Up</button>
		</>
	);
};

export default navBarItems;
