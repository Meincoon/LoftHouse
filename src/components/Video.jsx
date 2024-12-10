import play from '../assets/img/video/play.svg';
import video from '../assets/img/video/video-img.jpg';

function Video() {

  return (
    <section className="video none1">
      <h2 className="visually-hidden">Видео про ЖК Loft House</h2>
      <div className="container">
        <a href="https://www.youtube.com/watch?v=bhJNL9JUsnY" data-youtubeLightbox className="video__link">
          <img src={play} alt="Play video" className="video__icon" />
          <img src={video} alt="Video thumbnail" className="video__img" />
        </a>
      </div>
    </section>
  );
}

export default Video;
