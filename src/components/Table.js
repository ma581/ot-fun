import React, { useState } from "react";
import "./Table.css";
import PropTypes from "prop-types";
import BootstrapTable from "react-bootstrap/Table";
import BootstrapButton from "react-bootstrap/Button";
import BarChart from "./BarChart";

function Table({ data }) {
  const headings = [
    "",
    "Symbol",
    "Gene ID",
    "Gene Name",
    "Overall Association Score"
  ];

  return (
    <BootstrapTable bordered hover>
      <thead>
        <tr>
          {headings.map(heading => (
            <th key={heading}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>{data ? data.map(useExpandableRow) : null}</tbody>
    </BootstrapTable>
  );
}

const useExpandableRow = item => {
  const [hidden, setHidden] = useState(true);
  return (
    <React.Fragment key={item.geneId}>
      <tr data-testid="data-row">
        <td>
          <BootstrapButton
            variant="outline-primary"
            onClick={() => setHidden(!hidden)}
          >
            +
          </BootstrapButton>
        </td>
        <td>{item.symbol}</td>
        <td>{item.geneId}</td>
        <td>{item.geneName}</td>
        <td>{item.overallAssociationScore}</td>
      </tr>
      <tr aria-hidden={hidden} hidden={hidden}>
        <td colSpan={5}>
          <BarChart scores={item.associationScores} />
        </td>
      </tr>
    </React.Fragment>
  );
};

Table.propTypes = {
  data: PropTypes.array
};

export default Table;
