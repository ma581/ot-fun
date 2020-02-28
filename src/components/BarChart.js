import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React from "react";
import PropTypes from "prop-types";

export default function BarChart({ scores }) {
  if (!scores) {
    return null;
  }
  const chartTitle = "Association Score vs Data Type";
  const xAxisTitle = "Data Type";
  const yAxisTitle = "Score";

  const options = {
    title: {
      text: chartTitle
    },
    series: [
      {
        data: Object.values(scores),
        type: "column",
        showInLegend: false
      }
    ],
    yAxis: {
      title: { text: yAxisTitle }
    },
    xAxis: {
      title: { text: xAxisTitle },
      categories: Object.keys(scores)
    }
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

BarChart.propTypes = {
  scores: PropTypes.object
};
