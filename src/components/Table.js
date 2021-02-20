/*jshint esversion: 6 */
import React from 'react';
import { PropTypes } from 'prop-types';

const Table = ({ people }) => {
	// Sort data here. -- why we sorting here????? why not in the component that has all logic in it already...

	return (
		<div className="table-div">
			<table className="table table-striped table-bordered table-hover full-width">
				<thead>
					<tr>
						<th className="course-name">Person Name</th>
						<th className="duration">Date of Birth</th>
					</tr>
				</thead>
				<tbody>
					{people.map((person, index) =>
						<tr key={person.name + index}>
							<td>{person.name}</td>
							<td>{person.birth}</td>
						</tr>
					)}

				</tbody>
			</table>
		</div>);
}

Table.propTypes = {
	people: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			birth: PropTypes.string
		})
	)
};

export default Table;