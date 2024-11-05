import React, { useEffect, useState } from "react";

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Check if there's any history stored in localStorage
    const storedHistory = JSON.parse(localStorage.getItem("visitHistory")) || [];
    setHistory(storedHistory);
  }, []);

  return (
    <div className="w-11/12 mx-auto text-center mt-10">
      <h1 className="text-3xl font-bold mb-5">Visited Pages History</h1>
      {history.length > 0 ? (
        <ul className="list-disc text-left">
          {history.map((item, index) => (
            <li key={index} className="mb-2">
              <strong>Page:</strong> {item.pageName} <br />
              <strong>Visited At:</strong> {item.timestamp}
            </li>
          ))}
        </ul>
      ) : (
        <p>No history available.</p>
      )}
    </div>
  );
};

export default PeopleHistory;
