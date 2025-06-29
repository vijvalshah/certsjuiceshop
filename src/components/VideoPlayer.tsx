import { useEffect, useRef, useState } from 'react';
import '../styles/video.css';

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showPlayButton, setShowPlayButton] = useState(false);

  const playVideo = async () => {
    try {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.volume = 1.0;
        console.log('Attempting to play video...');
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log('Video playback started successfully');
              setShowPlayButton(false);
            })
            .catch(error => {
              console.error('Error during playback:', error);
              setShowPlayButton(true);
            });
        }
      }
    } catch (error) {
      console.error('Error in playVideo function:', error);
      setShowPlayButton(true);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadstart', () => console.log('Video load started'));
      video.addEventListener('loadeddata', () => {
        console.log('Video data loaded');
        playVideo();
      });
      video.addEventListener('playing', () => {
        console.log('Video is playing');
        setShowPlayButton(false);
      });
      video.addEventListener('pause', () => {
        console.log('Video paused');
        setShowPlayButton(true);
      });
      video.addEventListener('error', (e) => {
        console.error('Video error:', e);
        setShowPlayButton(true);
      });
    }

    playVideo();

    return () => {
      if (video) {
        video.removeEventListener('loadstart', () => {});
        video.removeEventListener('loadeddata', () => {});
        video.removeEventListener('playing', () => {});
        video.removeEventListener('pause', () => {});
        video.removeEventListener('error', () => {});
      }
    };
  }, []);

  const handlePlayClick = () => {
    playVideo();
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-black">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          className="min-h-full min-w-full object-cover"
          autoPlay
          playsInline
          preload="auto"
          loop={false}
          disablePictureInPicture
        >
          <source src="/videos/cysj.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {showPlayButton && (
          <button
            onClick={handlePlayClick}
            className="absolute z-50 p-6 bg-neon-green/20 rounded-full hover:bg-neon-green/30 border border-neon-green transition-all duration-300 transform hover:scale-110"
          >
            <svg
              className="w-16 h-16 text-neon-green"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
};

export default VideoPlayer; 