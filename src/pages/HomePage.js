import React from 'react';
import { connect } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import Dropzone from '../components/Dropzone';
import _ from 'lodash';

const HomePage = (props) => {
  const { groupedFiles } = props;
  
  const files = Object.keys(groupedFiles).map(key => {
    return (
      <ul key={key}>
        <li>
          {key} ({groupedFiles[key].length} files)
          <ul>
          { groupedFiles[key].map((file, index) => (
            <li key={file.fileId}>{file.fileId}</li>
          )) }
          </ul>
        </li>
      </ul>
    );
  });

  return (
    <div className="home-page">
      <Dropzone></Dropzone>
      
      <div className="divider"></div>
      <div>
        <Bar data={{
          labels: Object.keys(groupedFiles),
          datasets: [{ 
            label: 'Number of Invoices Finalised',
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            data: Object.keys(groupedFiles).map(key => groupedFiles[key].length)
          }]
        }}
        options={{
          responsive: true,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                min: 0,
                callback: function(value, index, values) {
                    if (Math.floor(value) === value) {
                        return value;
                    }
                }
              }
            }]
          }
        }}
        ></Bar>
      </div>
      <div className="divider"></div>
      <div>
        <h4>All Recent Files (Grouped by date)</h4>
        {files}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  groupedFiles: _.groupBy(state.file.files, file => file.results.timestamp)
});

export default connect(
  mapStateToProps
)(HomePage);