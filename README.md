![component-preview-compressed](https://github.com/user-attachments/assets/2f791123-8aa4-4118-b031-a087fcd70ebf)
## React Create HTML Video
A lightweight React component that programmatically generates and plays an HTML `<video>` element with a clean, reusable API. This library does not rely on CSS-in-JS, with styles are intentionally kept minimal. Created with Typescript support.

### 📦 Installation
```console
npm install react-create-html-video
```

### 🎲 Features
1. Built for modern React with support for Typescript
2. A lightweight API surface that is easy to understand
3. Helps render a native HTML `<video>` element on the browser
4. Provides support for MP4 and Webm based Video displays

### 🔤 Example Usage
```javascript
/* node modules */
import { ReactCreateHTMLVideo } from "react-create-html-video";

/* API Signature */
// { mp4: string, webm: string }

/* module */
function UIComponent() {
  return (
    {/* make sure your parent container is positioned: relative, imagine here min-height of 100vh */}
    <div className="heroSection positionRelative">
      <ReactCreateHTMLVideo
        mp4="/path/to/mp4/video.mp4"
        webm="/path/to/webm/video.webm"
      />
    </div>
  )
}

/* exports */
export default UIComponent;
```
### 📘 Contributing
Contributions, suggestions, and improvements are welcome.<br/>
Feel free to open issues or pull requests.

### ❤️ Support
Like this project? Support it with a github star, it would mean a lot to me! Cheers and Happy Coding.
