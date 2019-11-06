import React from 'react';

export default ({data, selectedBuilding}) => {
	const ViewBuilding = data.filter(id => {
		return id.id == selectedBuilding
	})
	return (
		<table className="table">
			{ViewBuilding.length !== 1 ? <tr>Click on a name to view more information</tr> : 
				<div>
					<tr>Code: {ViewBuilding[0].code}</tr>
					<tr>Name: {ViewBuilding[0].name}</tr>
					<tr>Address: {ViewBuilding[0].address}</tr>
					<tr>Latitude: {ViewBuilding[0].coordinates && ViewBuilding[0].coordinates.latitude}</tr>
					<tr>Longitude: {ViewBuilding[0].coordinates && ViewBuilding[0].coordinates.longitude}</tr>
				</div>
			}
		</table>
	);
}
