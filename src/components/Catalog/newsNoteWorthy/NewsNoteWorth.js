/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ProgrammingLangCard from "../catalogCard/ProgrammingLangCard";
import CourseCard from "../catalogCard/CourseCard";

const NewsNoteWorth = () => {
	return (
		<div className="newsNoteWorth">
			<h2>Editor's Note</h2>
			<div className="newsGrid">
				<a href="#" className="newsGrid__link">
					<h3>Rash.Ed student</h3>
					<p>
						Rash.Ed helps you to be career ready in the Tech-Industry
						With our free curated curriculums, you will be able to learn the 
						necessary skills
					</p>
				</a>
				<ProgrammingLangCard
					title={"Python for Data Science"}
				/>
				<ProgrammingLangCard
					title={"Learn Flutter"}
				/>
				<CourseCard title={"Learn MERN Stack"} />
			</div>
		</div>
	);
};

export default NewsNoteWorth;
