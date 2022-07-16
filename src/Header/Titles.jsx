import { Component } from 'react';
import './Header.css';
import 'handsontable/dist/handsontable.full.css';

export class Titles extends Component {
	render() {
		return (
			<div style={{ background: 'DarkSeaGreen', textAlign: "center", borderRadius: '15px' }}>
				<h1 style={{ color: 'white' }}>This is where a title goes!</h1>
				<p style={{ fontSize: "15px" }}> This is where the subtitle goes</p>
			</div>
		)
	}
}