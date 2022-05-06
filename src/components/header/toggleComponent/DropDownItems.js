/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import course from "../../../assests/svg/agenda.svg";
import home from "../../../assests/svg/home.svg";
import book from "../../../assests/svg/book.svg";

const DropDownItems = () => {
	return (
		<>
			<a href="#">
				<img src={home} alt="home icon" className="navbar__icon--md" />
				Home
			</a>

			<a href="#">
				<img
					src={course}
					alt="course icon"
					className="navbar__icon--md"
				/>
				Course Catalog
			</a>

			<a href="#">
				<img src={book} alt="book icon" className="navbar__icon--md" />
				Resources
			</a>

			
		</>
	);
};

export default DropDownItems;
