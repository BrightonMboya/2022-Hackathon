/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const ProgrammingLangCard = ({ title }) => {
	return (
		<a href="#" className="catalogCard programmingLang">
			<p>
				<span className="programmingLang-difficulty"></span>Data Science Path
			</p>
			<h3>{title}</h3>
			<div className="course__level">
				<div className="course__level--dot dot-fill"></div>
				<div className="course__level--dot"></div>
				<div className="course__level--difficulty">
					Beginner friendly
				</div>
			</div>
			<p className="programmingLang--job">Get Started</p>
		</a>
	);
};

export default ProgrammingLangCard;
