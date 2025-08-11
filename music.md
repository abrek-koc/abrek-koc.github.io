---
layout: default
title: My Music
permalink: /music/
---

{%-include back_link.html-%}

<h1>{{ page.title }}</h1>

<div class="music-page-content">
  <p>Check out what I'm listening to right now. This widget displays my current Spotify status and updates every 30 seconds.</p>
  
  <div id="spotify-status-container">
    <div class="spotify-container">
      <div class="spotify-title">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABB0lEQVQ4jZXSMUoDQRTG8d+uG0ljlT5HsBASvIKFhZ1H8ASewCs4VRrBE3gDa8HGQpBgpQlYWAQMm3VmYRxmk134YJh57/3/b2bee6NVCS1McIcnvBfsueN8xSgu3uAJrxFe4xE3mMc9Ffi76QPXfuMVU9EfDPCGH5zhsJR0l3isElr4wCem2E/2LUvnh1LSSIBnBby3dH6aS/pKkm17SnCcJJ0nyZ/YwmsBnyTJmfEMOxl8mSQP+ouPM/g8SZ5oJtVW8JwNTEIVYDsBbgrJi5gdtII90/8nEh7+MvmgAXxZgWm6riN2Q4V4idf4iN1BY1X+iwE+G/J0lku96A/mImab7X+VFbw3pKpu8AsGkkRch7KzHQAAAABJRU5ErkJggg==">
        RETRO TUNES
      </div>
      <div class="spotify-info">
        <p>Loading...</p>
      </div>
    </div>
  </div>

  <div class="music-page-extra">
    <p>This integration uses n8n to fetch my Spotify data via webhook and JavaScript to display it here with a retro aesthetic.</p>
    <p>Check out my <a href="https://open.spotify.com/user/11163527565" target="_blank">full Spotify profile</a> to see my playlists and more.</p>
  </div>
</div>
