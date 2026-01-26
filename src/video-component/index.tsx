/* node modules */
import React, { memo } from "react";

/* app imports */
import "./style.scss";
import { TReactCreateHTMLVideo } from "../types/index.js";
import useVideo from "./use-video";

/* types */
type TInput = TReactCreateHTMLVideo;

/* component */
function UIComponent(props: TInput) {
  /* hook(s) */
  const { videoSource } = useVideo(props);

  if (!videoSource) return null;
  return (
    <div className="videoParent">
      <video autoPlay loop muted playsInline src={videoSource} />
    </div>
  );
}

/* exports */
const ReactCreateHTMLVideo = memo(UIComponent);
export { ReactCreateHTMLVideo };
