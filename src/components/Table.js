import React, { useState } from "react";
import PropTypes from "prop-types";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

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
      <tbody>{data ? data.map(useRow) : null}</tbody>
    </table>
  );
}

const useRow = item => {
  const [hidden, setHidden] = useState(true);
  return (
    <React.Fragment key={item.geneId}>
      <tr data-testid="data-row">
        <td>
          <button onClick={() => setHidden(!hidden)}>+</button>
        </td>
        <td>{item.symbol}</td>
        <td>{item.geneId}</td>
        <td>{item.geneName}</td>
        <td>{item.overallAssociationScore}</td>
      </tr>
      <tr aria-hidden={hidden} hidden={hidden}>
        <td colSpan={4}>
          {getBarChart(item.associationScores ? item.associationScores : {})}
        </td>
      </tr>
    </React.Fragment>
  );
};

function getBarChart(scores) {
  const options = {
    title: {
      text: "Association Score vs Data Type"
    },
    series: [
      {
        data: Object.values(scores),
        type: "column"
      }
    ],
    xAxis: {
      categories: Object.keys(scores)
    }
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

Table.propTypes = {
  data: PropTypes.array
};

export default Table;