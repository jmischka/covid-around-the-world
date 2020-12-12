import React, { Component } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class Graph extends Component {
  render() {
    let data = this.props.countryData;
    return (
      <div className="Details-graph">
        <div className="graph-container">
          <h3 className="graph-headline">Confirmed cases from the first reported case</h3>
          <ResponsiveContainer width="100%" height={700}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Date" />
              <YAxis />
              <Tooltip 
                labelStyle={{ color: "#798022" }} 
                itemStyle={{ fontSize: "12px", display: "flex" }} 
              />
              <Legend verticalAlign="top" height={36} wrapperStyle={{ top: -50, left: 0, right: 0, bottom: 0 }} />
              <Bar dataKey="Confirmed" fill="#B6BF34" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="graph-container">
        <h3 className="graph-headline">Deaths from the first reported death</h3>
          <ResponsiveContainer width="100%" height={700}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Date" />
              <YAxis />
              <Tooltip 
                labelStyle={{ color: "#A64242" }} 
                itemStyle={{ fontSize: "12px", display: "flex" }} 
              />
              <Legend verticalAlign="top" height={36} wrapperStyle={{ top: -50, left: 0, right: 0, bottom: 0 }} />
              <Bar dataKey="Deaths" fill="#E55C5C" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="graph-container">
        <h3 className="graph-headline">Confirmed cases and deaths</h3>
          <ResponsiveContainer width="100%" height={700}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Date" />
              <YAxis />
              <Tooltip 
                labelStyle={{ color: "grey" }}
                itemStyle={{ fontSize: "12px", display: "flex" }} 
              />
              <Legend verticalAlign="top" height={36} wrapperStyle={{ top: -50, left: 0, right: 0, bottom: 0 }} />
              <Bar dataKey="Deaths" stackId="a" fill="#E55C5C" />
              <Bar dataKey="Confirmed" stackId="a" fill="#B6BF34" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}

export default Graph;