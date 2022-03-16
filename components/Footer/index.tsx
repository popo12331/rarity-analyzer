import * as React from "react";
import Link from "next/link";
import DarkMode from "../DarkMode";

const Footer = () => {
	return (
		<div className="dark:bg-gray-900 bg-gray-50">
			<footer className="max-w-screen-xl w-full mx-auto xl:px-0 px-5">
				<div className="space-x-6 py-6 text-xs w-full flex items-center md:justify-end justify-center text-gray-500 dark:text-gray-300">
					<div>
						Made by {" "}
						<a href="https://www.tsquirrel.io/" target="_blank" rel="noreferrer">
							TSquirrel NFT
						</a>
					</div>
					<div className="flex items-center justify-center space-x-1">
						<DarkMode />
					</div>
				</div>
			</footer>
		</div>
	);
};
export default Footer;
