export function initYouTubeAPI() {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

export function getYoutubeId(link) {
  const youtubeIdReg =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
  return youtubeIdReg.exec(link)[1];
}

export function createYouTubePlayer(videoUrl) {
  return new YT.Player('youtubelightboxPlayer', {
    videoId: videoUrl,
    playerVars: { autoplay: 1 },
  });
}

export function setupLightbox() {
  const linksBtnsSelector = 'a[data-youtubeLightbox]';
  const youtubelightbox = document.getElementById('youtubelightbox');
  let player;

  youtubelightbox.addEventListener('click', function () {
    this.style.display = 'none';
    if (player) {
      player.stopVideo();
    }
  });

  youtubelightbox
    .querySelector('.youtubelightbox__centeredchild')
    .addEventListener('click', function (e) {
      e.stopPropagation();
    });

  window.onYouTubeIframeAPIReady = function () {
    const targetLinks = document.querySelectorAll(linksBtnsSelector);

    targetLinks.forEach((link) => {
      link._videoid = getYoutubeId(link);
      link.addEventListener('click', function (e) {
        youtubelightbox.style.display = 'block';
        if (!player) {
          player = createYouTubePlayer(this._videoid);
        } else {
          player.loadVideoById(this._videoid);
        }
        e.preventDefault();
      });
    });
  };
}
