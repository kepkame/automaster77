export default () => {
  function getIdVideo(link) {
    const href = link.href;
    const index = href.lastIndexOf('/');

    return href.substring(index + 1);
  }

  // function parseMediaURL(media) {
  //   const regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
  //   const url = media.src;
  //   const match = url.match(regexp);

  //   return match[1];
  // }

  function generateURL(id) {
    const query = '?rel=0&showinfo=0&autoplay=1';

    return `https://www.youtube.com/embed/${id}${query}`;
  }

  function createIframe(id) {
    const iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('youtube-video__media');

    return iframe;
  }

  function loadYouTubeVideo(link, id) {

  }

  // Load video
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

  // Open modal window
  if (document.querySelector('.slider-coverflow__media')) {
    const arrVideo = document.querySelectorAll('.slider-coverflow__media');
  }
};
