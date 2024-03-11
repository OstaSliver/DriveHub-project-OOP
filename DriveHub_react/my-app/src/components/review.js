import React, { useState } from 'react';

function RatingForm() {
  const [rating, setRating] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="wrapper">
      <h3>Lorem ipsum dolor sit amet.</h3>
      <button onClick={togglePopup}>Rating</button> {/* Rating button */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content"> 
            <div className="rating">
              <input type="number" name="rating" hidden value={rating} />
              {[0, 1, 2, 3, 4].map((index) => (
                <i
                  key={index}
                  className={`bx ${index < rating ? 'bxs' : 'bx'}-star star`}
                  onClick={() => handleStarClick(index)}
                ></i>
              ))}
            </div>
            <textarea name="opinion" cols="30" rows="5" placeholder="Your opinion..."></textarea>
            <div className="btn-group">
              <button type="submit" className="btn submit">Submit</button>
              <button className="btn cancel" onClick={togglePopup}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RatingForm;
