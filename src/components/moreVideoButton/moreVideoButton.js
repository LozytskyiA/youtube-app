import React from 'react';
import './moreVideoButton.css';

function MoreVideoButton({ onClick }) {
  return (
    <>
      <button className="youtube-moreVideos" onClick={onClick}>Load more...</button>
    </>
  );
}

export default MoreVideoButton;