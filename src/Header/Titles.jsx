import React from 'react';
import './Header.css';

export class Titles extends React.Component {
	render() {
		return (
			<div id="Titles">
					<h1 style={{ color: 'white'}}>This is where a title goes! <br /> <small>This is where as subtitle goes</small> </h1>
					<p> style={{ textSize: "15px" }}> This is where the subtitle goes</p>
			</div>
			
		)
	}
}