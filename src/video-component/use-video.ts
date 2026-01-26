/* node modules */
import { isIE } from "react-device-detect";
import { useState, useEffect } from "react";
import { TReactCreateHTMLVideo } from "../types";

/* types */
type TInput = TReactCreateHTMLVideo;

/* hook */
function useVideo(props: TInput) {
  /* props - destruct */
  const { mp4, webm } = props;
  /* local state */
  const [videoSource, setVideoSource] = useState<string | null>(null);

  /* update video source */
  useEffect(() => {
    if (typeof mp4 !== "string" || typeof webm !== "string") {
      setVideoSource(null);
      return;
    }

    const formats = {
      mp4: 'video/mp4; codecs="avc1.42E01E"',
      webm: 'video/webm; codecs="vp8, vorbis"',
    };

    const v = document.createElement("video");

    if (isIE) {
      setVideoSource(null);
    } else if (v.canPlayType(formats.mp4) === "probably") {
      setVideoSource(mp4);
    } else if (v.canPlayType(formats.webm) === "probably") {
      setVideoSource(webm);
    } else {
      setVideoSource(null);
    }
  }, [mp4, webm]);

  return { videoSource };
}

/* exports */
export default useVideo;
