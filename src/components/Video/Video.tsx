import "./Video.scss";

export const Video = () => {
  return (
    <div className="video">
      <iframe
        className="video--big"
        width="796"
        height="448"
        src="https://www.youtube.com/embed/pxn0wL_uSm4?si=zlUoF5Hmx-L8KhfN"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <iframe
        className="video--small"
        src="https://www.youtube.com/embed/pxn0wL_uSm4?si=zlUoF5Hmx-L8KhfN"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};
