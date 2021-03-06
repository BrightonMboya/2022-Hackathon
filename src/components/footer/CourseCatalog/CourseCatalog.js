/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const CourseCatalog = () => {
	return (
		<div className="courseContainer__outer">
			<h3>COURSE CATALOG</h3>
			<div className="courseContainer__inner">
				<div className="footerItems">
					<h3 className="footerItems__title">Languages</h3>
					<div className="footerItems__items courseItems">
						<a href="#">HTML & CSS</a>
						<a href="#">Python</a>
						<a href="#">JavaScript</a>
					</div>
				</div>
				<div className="footerItems">
					<h3 className="footerItems__title">Subjects</h3>
					<div className="footerItems__items courseItems">
						<a href="#">Web Development</a>
						<a href="#">Data Science</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseCatalog;
