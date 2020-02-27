import React from "react";

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
                <td>{item.associationScore}</td>
              </tr>
            ))
          : null}
      </tbody>
    </table>
  );
}

export default Table;
