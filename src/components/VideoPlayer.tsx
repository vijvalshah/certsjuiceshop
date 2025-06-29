import { useEffect, useRef, useState } from 'react';
import '../styles/video.css';

interface VideoPlayerProps {
  onVideoEnd: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ onVideoEnd }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
              setIsPlaying(true);
            })
            .catch(error => {
              console.error('Error during playback:', error);
              setIsPlaying(false);
            });
        }
      }
    } catch (error) {
      console.error('Error in playVideo function:', error);
      setIsPlaying(false);
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
        setIsPlaying(true);
      });
      video.addEventListener('pause', () => {
        console.log('Video paused');
        setIsPlaying(false);
      });
      video.addEventListener('error', (e) => {
        console.error('Video error:', e);
        setIsPlaying(false);
      });
      video.addEventListener('ended', onVideoEnd);
    }

    playVideo();

    return () => {
      if (video) {
        video.removeEventListener('loadstart', () => {});
        video.removeEventListener('loadeddata', () => {});
        video.removeEventListener('playing', () => {});
        video.removeEventListener('pause', () => {});
        video.removeEventListener('error', () => {});
        video.removeEventListener('ended', onVideoEnd);
      }
    };
  }, [onVideoEnd]);

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
        
        {!isPlaying && (
          <button
            onClick={handlePlayClick}
            className="absolute z-50 p-6 bg-neon-blue/20 rounded-full hover:bg-neon-blue/30 border border-neon-blue transition-all duration-300 transform hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16 text-neon-blue"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z"
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