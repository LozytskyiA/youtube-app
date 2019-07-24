import React from 'react';
import './videoList.css';

function VideoList({ title, image, video }) {

  const link = `https://www.youtube.com/watch?v=${video}`;

  return (
    <>
      <li className="youtube-videos-list__item">
        <a className="youtube-videos-list__link" href={link}>
          <img src={image.url} className="youtube-videos-list__img" alt="video"/>
        </a>
        <p className="youtube-videos-list__text">{title}</p>
      </li>
    </>
  );
}

export default VideoList;