![component-preview-compressed](https://github.com/user-attachments/assets/2f791123-8aa4-4118-b031-a087fcd70ebf)
![npm](https://img.shields.io/npm/v/react-create-html-video)
![downloads](https://img.shields.io/npm/dw/react-create-html-video)
![license](https://img.shields.io/npm/l/react-create-html-video)
![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/react-click-image-play-youtube-video)
![Security Policy](https://img.shields.io/badge/security-policy-brightgreen)
![npm_provenance](https://img.shields.io/badge/npm-provenance-brightgreen?logo=npm)

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
5. No manual CSS import is required — styles are bundled with the package.

### 📄 API Type Signature

```javascript
export type TReactCreateHTMLVideo = {
  mp4: string;
  webm: string;
};
```

### 🤝 Peer Dependencies

```javascript
"peerDependencies": {
  "react": ">=18",
  "react-dom": ">=18"
}
```

### 🧪 How This Works

1. Detects browser support using `HTMLVideoElement.canPlayType`
2. Prefers MP4 if supported
3. Falls back to WebM if MP4 is unavailable
4. Disables video rendering on Internet Explorer
5. Returns `null` when no supported format is available

### 🔤 Example Usage

```javascript
/* node modules */
import { ReactCreateHTMLVideo } from "react-create-html-video";

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

### 📗 Test Coverage

```
PASS  src/video-component/test/index.test.tsx
  RCHV Test Suite:
    ✓ renders null when videoSource is null
    ✓ renders video container when videoSource is provided
    ✓ renders video element with correct attributes
    ✓ sets video src to the videoSource from useVideo hook
    ✓ passes correct props to useVideo hook
    ✓ memoizes component and does not re-render with same props
    ✓ renders video element inside parent container
    ✓ updates when videoSource changes
    ✓ returns null when videoSource is falsy
    ✓ renders only one video element
```

```
-----------|---------|----------|---------|---------|-------------------
File       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------|---------|----------|---------|---------|-------------------
All files  |     100 |      100 |     100 |     100 |
 index.tsx |     100 |      100 |     100 |     100 |
-----------|---------|----------|---------|---------|-------------------
```

<br/>🎯 **Note:** Release(s) 1.4.x has fixed issues related to react-dedup. It was found that inspite of being a react client side component, an error related to ```Cannot read properties of undefined (reading 'ReactCurrentDispatcher')``` was coming up. You can now install this package directly. If issues still persist, please do raise a github issue along with screenshots and comments for me to work on.

### 📘 Contributing

Contributions, suggestions, and improvements are welcome.<br/>
Feel free to open issues or pull requests.

### 🔒 Security & Privacy

1. This package is open source and designed as a lightweight client-side React component. It does not collect, store, sell, or share user data, and it does not include analytics, tracking, telemetry, cookies, local storage usage, backend services, or project-owned data collection systems.
2. For more details, including vulnerability reporting guidance and consumer security recommendations, please see the [Security Policy](https://github.com/NPM-Workbench/react-create-html-video/security/policy).

### ❤️ Support

Like this project? Support it with a github star, it would mean a lot to me! Cheers and Happy Coding.
