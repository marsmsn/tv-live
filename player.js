const player = videojs('video');

async function loadPlaylist() {
  const response = await fetch('playlist.m3u8');
  const text = await response.text();
  const lines = text.split('\n').filter(line => line && !line.startsWith('#'));
  
  if (lines.length > 0) {
    player.src({ src: lines[0], type: 'application/x-mpegURL' });
  } else {
    alert('播放列表为空');
  }
}

loadPlaylist();
