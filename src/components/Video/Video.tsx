export const Video = () => {
  return (
    <div className="video">
      <div className="video__container">
        <iframe
          width="796"
          height="448"
          src="https://www.youtube.com/embed/pxn0wL_uSm4?si=zlUoF5Hmx-L8KhfN"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
