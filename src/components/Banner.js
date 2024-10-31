

const Banner = ({ title, subtitle, videoSrc }) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {videoSrc && (
        <video autoPlay loop muted controls className="banner-video">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default Banner;
