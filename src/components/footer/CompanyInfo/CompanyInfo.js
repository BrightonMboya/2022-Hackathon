/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import GooglePlayIcon from "../../../assests/svg/googleplay.svg";
import AppleStoreIcon from "../../../assests/svg/applestore.svg";

// import Info from "./Info";
const CompanyInfo = () => {
	return (
		<div className="infoContainer">
			<div className="footerItems">
				<h3 className="footerItems__title">Resources</h3>
				<div className="footerItems__items">
					<a href="#">Blog</a>
					<a href="#">CheatSheets</a>
					<a href="#">Articles</a>
				</div>
			</div>

			<div className="footerItems">
				<h3 className="footerItems__title">Community</h3>
				<div className="footerItems__items">
					<a href="#">forums</a>
					<a href="#">Chapter</a>
					<a href="#">Events</a>
				</div>
			</div>
		</div>
	);
};

export default CompanyInfo;
