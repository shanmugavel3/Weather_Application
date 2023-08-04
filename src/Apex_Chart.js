import React from 'react';
import ReactApexChart from 'react-apexcharts';


export default class Apex_Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        data: [1, 2, 3, 1, 2, 3] // Data points corresponding to 'Sunny,' 'Winter,' and 'Rainy'
      }],

      options: {
        chart: {
          height: 350,
          type: 'bar',
          events: {
            click: function (chart, w, e) {
              // console.log(chart, w, e)
            }
          }
        },
        colors: ['#312f63', '#312f63', '#f7c400', '#312f63', '#312f63', '#312f63'],
        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true,
            borderRadius: 12,
            hover: {
              size: 0,
            },
            dataLabels: {
              style: {
                colors: ['#fff'],
                fontSize: '12px',
              },
            },
            strokeColors: 'transparent',
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        grid: {
          show: false,
        },
        xaxis: {
          categories: [
              ['10 AM'],
              ['12 AM'],
              ['2 PM'],
              ['4 PM'],
              ['6 PM'],
              ['8 PM'],
          ],
          show: false,
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            style: {
              colors: '#fff',
              fontSize: '12px',
            },
          },
          axisBorder: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: ['#fff'],
              fontSize: '12px',
            },
            formatter: function (val) {
              const customLabels = ['',['heavy', 'rain'], ['rainy'], ['summar']];
              return customLabels[val];
            },
          },
          axisBorder: {
            show: false,
          },
        },
      },
    };
  }

  render() {
    const chartContainerStyle = {
      marginLeft: '10px',
      
    };

    return (
      <div id="chart" style={chartContainerStyle}>
        <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
      </div>
    );
  }
}
