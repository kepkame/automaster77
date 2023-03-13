export default () => {
  // This function extracts the video ID from a YouTube link
  function getIdVideo(link) {
    const { href } = link;
    const index = href.lastIndexOf('/'); // Find the last index of '/' in href

    return href.substring(index + 1);
  }

  // This function generates a YouTube embed URL for a given video ID
  function generateURL(id) {
    const query = '?rel=0&showinfo=0&autoplay=1'; // URL parameters for autoplay

    return `https://www.youtube.com/embed/${id}${query}`; // Return the generated URL
  }

  // This function creates an iframe element for a given video ID
  function createIframe(id) {
    const iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('youtube-video__media');

    return iframe;
  }

  // Load video
  function initYouTubeVideo() {
    if (document.querySelector('.youtube-video')) {
      const arrVideo = document.querySelectorAll('.youtube-video');

      arrVideo.forEach((video) => {
        video.classList.add('youtube-video--enabled');

        video.addEventListener('click', (e) => {
          e.preventDefault();

          const link = video.querySelector('.youtube-video__inner');
          const button = video.querySelector('.btn-play');
          const id = getIdVideo(link);
          const iframe = createIframe(id);

          link.remove();
          button.remove();
          video.appendChild(iframe);
        });
      });
    }
  }

  initYouTubeVideo();
};
