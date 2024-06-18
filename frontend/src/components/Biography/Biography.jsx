import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
        </div>
      </div>
    </>
  );
};

export default Biography;