/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import Quiz from "../quiz/Quiz";
import PopularCatalog from "./PopularCatalog";
import NewsNoteWorth from "./newsNoteWorthy/NewsNoteWorth";
import GetInpsire from "./getInspireSectiion/GetInspire";
import Footer from "../footer/Footer";
import Accordion from "./accordion/Accordion";

const languages = [
	"HTML & CSS",
	"Python",
	"JavaScript",
];
const subjects = [
	"Web Development",
	"Data Science",
];

const Catalog = () => {
	useEffect(() => {
		document.title = "Catalog Home | Rash.Ed";
	}, []);
	return (
		<div className="catalogContainer__outer">
			<div className="sidebar">
				<div className="sidebar__left">
					<div className="sidebar__left--container">
						<Accordion Links={languages} title="Language" />
						<Accordion Links={subjects} title="Subjects" />
					</div>
				</div>
				<div className="sidebar__right">
					<div className="catalogContainer__inner">
						<Quiz />
						<PopularCatalog />
						<NewsNoteWorth />
						<GetInpsire />
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Catalog;
