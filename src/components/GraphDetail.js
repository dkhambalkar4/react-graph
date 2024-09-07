import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import '../styles/GraphDetails.css';

function GraphDetail() {
  const data = [
    { date: 'Jul 18', price: 500 },
    { date: 'Jul 19', price: 750 },
    { date: 'Jul 20', price: 1000 },
    { date: 'Jul 21', price: 1250 },
    { date: 'Jul 22', price: 1670 },
  ];

  return (
    <div className="main-card-container">
      {/* Main Card that wraps both chart and info cards */}
      <div className="main-card">
        {/* Left Card: Chart */}
        <div className="chart-card">
          <div className="card-header">
            <h2>Crude Palm Oil</h2>
            <p>Crude Palm Oil | USD/MT | Indonesia</p>
          </div>
          <LineChart width={600} height={300} data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#eee" />
            <Line type="monotone" dataKey="price" stroke="#2c3e50" />
          </LineChart>
        </div>

        {/* Right Card: Information */}
        <div className="info-card">
          <div className="summary-item">
            <h3>1670.00</h3>
            <p>USD/MT</p>
            <p>INDONESIA</p>
          </div>
          <br/>
          <div className="summary-item">
            <p>%W-o-W Change</p>
            <div className='items'>
            <h5>N/A</h5>
            <p>N/A</p>
            </div>
          <hr />
            <p>%M-o-M Change</p>
            <div className='items'>
            <h5>13.61%</h5>
            <p>1470.00</p>
            </div>
          <hr />
            <p>%Q-o-Q Change</p>
            <div className='items'>
            <h5>27.48%</h5>
            <p>1310.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GraphDetail;
