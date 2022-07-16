import { Component } from 'react';
import './Header.css';
import 'handsontable/dist/handsontable.full.css';

import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';

// register Handsontable's modules
registerAllModules();

const hotData = [
	["", "Tesla", "Volvo", "Toyota", "Honda"],
	["2020", 10, 11, 12, 13],
	["2021", 20, 11, 14, 13],
	["2022", 30, 15, 12, 13]
];

export class Titles extends Component {
	render() {
		return (
			/*
			<div style={{ background: 'DarkSeaGreen', textAlign: "center", borderRadius: '15px' }}>
				<h1 style={{ color: 'white' }}>This is where a title goes!</h1>
				<p style={{ fontSize: "15px" }}> This is where the subtitle goes</p>
			</div>
			*/

			<div id="hot-app">
				<HotTable
					data={hotData}
					colHeaders={true}
					rowHeaders={true}
					width="600"
					height="300"
				/>
			</div>
		)
	}
}