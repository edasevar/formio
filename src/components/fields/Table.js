import React from 'react';
import RenderComponents from '../RenderComponents';

const Table = ({ numRows = 1, numCols = 1, rows = [[]] }) => {
	return (
		<table className="form-table" border="1" cellPadding="10">
			<tbody>
				{rows.map((row, rowIndex) => (
					<tr key={rowIndex}>
						{row.map((cell, colIndex) => (
							<td key={colIndex}>
								<RenderComponents components={cell.components || []} />
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
