import React, { useState, useEffect } from 'react';

const TodaySpecial = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 4000); // Popup visibility duration
    }, 2000); // Interval between popups

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ paddingTop: '499px' ,paddingBottom:"499px", textAlign: 'center' }}>
      {showPopup && (
        <div className="popup" style={{ marginBottom: '2000px', display: 'flex', justifyContent: 'center' }}>
          <p style={{position: 'fixed', backgroundColor: 'lightblue', padding: '10px', borderRadius: '5px', textAlign: 'center' ,marginBottom: '1000px'}}>Special offer coming in next festival</p>
        </div>
      )}
     
    </div>
  );
};

export default TodaySpecial;
