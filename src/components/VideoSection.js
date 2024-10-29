import React, { useState } from 'react';
import YouTubeIcon from '../img/youtube-icon.png'; // Adjust path as needed
import BackgroundImage from '../img/video-bg-1.png'; // Adjust path as needed

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div className='col-md-6 d-flex justify-content-center position-relative'>
      {!isPlaying && (
        <div
          className='video-cover'
          style={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: 'cover',
            width: '100%',
            height: '350px',
            position: 'relative',
            cursor: 'pointer',
          }}
          onClick={handlePlayVideo}
        >
          <img
            src={YouTubeIcon}
            alt='Play Video'
            style={{
              width: '60px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </div>
      )}
      {isPlaying && (
        <iframe
          width="100%"
          height="350px"
          src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1"
          frameBorder="0"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default VideoSection;
