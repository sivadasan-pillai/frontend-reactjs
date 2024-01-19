import React, { useEffect, useState } from 'react';
import '../styles/websitemonitorStatusCss.css';

const WebsitemonitorStatus = () => {
  const [websiteStatuses, setWebsiteStatuses] = useState([]);

  const fetchWebsiteStatuses = async () => {
    try {
      const response = await fetch('http://localhost:8888/websitemonitor/status'); 
      const data = await response.json();
      setWebsiteStatuses(data);
    } catch (error) {
      console.error('Error fetching website statuses:', error);
    }
  };

  useEffect(() => {
    fetchWebsiteStatuses();

    const intervalId = setInterval(() => {
      fetchWebsiteStatuses();
    }, 2 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {/* <h1 style={{ textAlign: 'center' }}>Website Status Monitor</h1> */}
      <table className="website-table">
        <thead>
          <tr >
            <th className='theader'>Website</th>
            <th className='theader'>Status</th>
          </tr>
        </thead>
        <tbody className='tableBody'>
          {websiteStatuses.map((websiteStatus, index) => (
            <tr key={index}>
              <td className='tableBody'><a target='blank' href={websiteStatus.url}>{websiteStatus.url}</a></td>
              <td className='tableBody'><div className={websiteStatus.status}>{websiteStatus.status}</div></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WebsitemonitorStatus;
