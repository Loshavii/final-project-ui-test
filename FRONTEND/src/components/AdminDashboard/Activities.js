import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/Activities.css';

const CombinedDataTable = () => {
  const [combinedData, setCombinedData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:2003/api/profiles/pay/combined-data')
      .then(response => {
        setCombinedData(response.data);
      })
      .catch(error => {
        console.error('Error fetching combined data:', error);
      });
  }, []);

  return (
    <div className="table-container">
      <h2>User and Payment Information</h2>
      <table className="combined-data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Coach Email</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {combinedData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.coachEmail}</td>
              <td>{item.paymentInfo?.paymentStatus || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CombinedDataTable;
