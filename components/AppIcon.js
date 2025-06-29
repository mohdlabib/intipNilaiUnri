import { useState, useEffect } from 'react';

export default function AppIcon({ size = 35, className = '' }) {
  const [iconError, setIconError] = useState(false);
  const [iconLoaded, setIconLoaded] = useState(false);

  // Try multiple icon sources
  const iconSources = [
    'https://i.pinimg.com/736x/d6/4a/9f/d64a9fc240a2172440832575ad3e1ba1.jpg',
    '/icon.png',
    '/public/icon.png',
    // Fallback to a simple data URI if needed
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAzNSAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTcuNSIgY3k9IjE3LjUiIHI9IjE3LjUiIGZpbGw9InVybCgjZ3JhZGllbnQwX2xpbmVhcl8xXzEpIi8+CjxwYXRoIGQ9Ik0xNy41IDhMMjIgMTJIMjBWMjBIMTVWMTJIMTNMMTcuNSA4WiIgZmlsbD0id2hpdGUiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQwX2xpbmVhcl8xXzEiIHgxPSIwIiB5MT0iMCIgeDI9IjM1IiB5Mj0iMzUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGQTY3MyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjhBNTAiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K'
  ];

  const [currentSourceIndex, setCurrentSourceIndex] = useState(0);

  const handleImageError = () => {
    if (currentSourceIndex < iconSources.length - 1) {
      setCurrentSourceIndex(currentSourceIndex + 1);
    } else {
      setIconError(true);
    }
  };

  const handleImageLoad = () => {
    setIconLoaded(true);
    setIconError(false);
  };

  // Reset when component mounts
  useEffect(() => {
    setIconError(false);
    setIconLoaded(false);
    setCurrentSourceIndex(0);
  }, []);

  if (iconError) {
    return (
      <div 
        className={`icon-fallback ${className}`}
        style={{
          width: size,
          height: size,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: Math.floor(size * 0.6),
          background: 'linear-gradient(135deg, #FFA673, #FF8A50)',
          borderRadius: '50%',
          color: 'white',
          textShadow: '0 1px 2px rgba(0,0,0,0.2)'
        }}
      >
        🎓
      </div>
    );
  }

  return (
    <img
      src={iconSources[currentSourceIndex]}
      alt="App Icon"
      width={size}
      height={size}
      className={className}
      onError={handleImageError}
      onLoad={handleImageLoad}
      style={{
        width: size,
        height: size,
        objectFit: 'cover',
        display: 'block',
        imageRendering: '-webkit-optimize-contrast',
        opacity: iconLoaded ? 1 : 0.8,
        transition: 'opacity 0.3s ease',
        borderRadius: '50%',
        border: '2px solid rgba(255, 166, 115, 0.3)',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
      }}
    />
  );
}
