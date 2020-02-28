import React from "react";
import PropTypes from "prop-types";

function Table({ data }) {
  const headings = [
    "",
    "Symbol",
    "Gene ID",
    "Gene Name",
    "Overall Association Score"
  ];
  return (
    <table>
      <thead>
        <tr>
          {headings.map(heading => (
            <th key={heading}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data
          ? data.map(item => (
              <tr key={item.geneId}>
                <td>
                  <button>+</button>
                </td>
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
