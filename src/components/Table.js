import React from "react";
import PropTypes from "prop-types";

function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Gene ID</th>
          <th>Gene Name</th>
          <th>Overall Association Score</th>
        </tr>
      </thead>
      <tbody>
        {data
          ? data.map(item => (
              <tr key={item.symbol}>
                <td>{item.symbol}</td>
                <td>{item.geneId}</td>
                <td>{item.geneName}</td>
                <td>{item.overallAssociationScore}</td>
              </tr>
            ))
          : null}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  data: PropTypes.array
};

export default Table;
