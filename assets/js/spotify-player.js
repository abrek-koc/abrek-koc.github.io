document.addEventListener('DOMContentLoaded', function() {
  const spotifyStatusContainer = document.getElementById('spotify-status-container');
  
  // Check if container exists on the page
  if (!spotifyStatusContainer) return;
  
  function generateAsciiFrame() {
    return [
      "╔═════════════════════╗",
      "║                     ║",
      "╚═════════════════════╝"
    ].join('\n');
  }
  
  function updateSpotifyStatus() {
    fetch('https://n8n.abrek.codes/webhook/e3b2a556-eb30-4f7c-9e4c-49768381e1e0')
      .then(response => response.json())
      .then(data => {
        const isPlaying = data.is_playing === 'true';
        
        spotifyStatusContainer.innerHTML = `
          <div class="spotify-container">
            <div class="spotify-title">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABB0lEQVQ4jZXSMUoDQRTG8d+uG0ljlT5HsBASvIKFhZ1H8ASewCs4VRrBE3gDa8HGQpBgpQlYWAQMm3VmYRxmk134YJh57/3/b2bee6NVCS1McIcnvBfsueN8xSgu3uAJrxFe4xE3mMc9Ffi76QPXfuMVU9EfDPCGH5zhsJR0l3isElr4wCem2E/2LUvnh1LSSIBnBby3dH6aS/pKkm17SnCcJJ0nyZ/YwmsBnyTJmfEMOxl8mSQP+ouPM/g8SZ5oJtVW8JwNTEIVYDsBbgrJi5gdtII90/8nEh7+MvmgAXxZgWm6riN2Q4V4idf4iN1BY1X+iwE+G/J0lku96A/mImab7X+VFbw3pKpu8AsGkkRch7KzHQAAAABJRU5ErkJggg==">
              Currently Listening
            </div>
            <div class="spotify-cover-wrapper">
              <img class="spotify-cover" src="${data.cover_image}" alt="Album cover">
            </div>
            <div class="spotify-info">
              <div class="song-name">${data.song_name}</div>
              <div class="artist-name">${data.artist}</div>
            </div>
            <div class="spotify-status ${!isPlaying ? 'paused' : ''}">
              ${isPlaying ? 
                '<div class="pause-bars"><div class="pause-bar"></div><div class="pause-bar"></div></div> ▶ NOW PLAYING' : 
                '<div class="play-button"></div> ■ PAUSED'}
            </div>
            <a href="${data.song_link}" class="spotify-link" target="_blank">OPEN IN SPOTIFY</a>
          </div>
        `;
      })
      .catch(error => {
        console.error('Error fetching Spotify data:', error);
        spotifyStatusContainer.innerHTML = `
          <div class="spotify-container">
            <div class="spotify-title">No Songs For Now</div>
            <pre>╔═════════════════════╗
║      NO SIGNAL      ║
╚═════════════════════╝</pre>
            <div class="spotify-cover-wrapper no-signal">
              <div class="static"></div>
            </div>
            <div class="spotify-info">
              <p>Will Be Back!</p>
            </div>
          </div>
        `;
      });
  }
  
  // Initial update
  updateSpotifyStatus();
  
  // Update every 30 seconds
  setInterval(updateSpotifyStatus, 30000);
});
