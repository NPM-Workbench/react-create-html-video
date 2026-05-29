## Security Policy

**Open Source Notice**<br/>

`react-create-html-video` is an open source React component package. Its source code is publicly available for review, audit, contribution, and responsible improvement under the license included in this repository.

This project is intended to provide a lightweight, client-side HTML5 video component for React applications with MP4 and WebM support. It does not include a backend service, tracking service, advertising service, analytics pipeline, payment system, account system, or user database.

**Data Collection and Privacy**<br/>

This package does not intentionally collect, store, transmit, process, sell, rent, trade, or monetize personal data.
In particular, this project does not:

- collect personal information from users;
- collect credentials, authentication tokens, payment information, or private application data;
- use cookies, local storage, session storage, indexed databases, or similar browser storage APIs;
- include analytics, fingerprinting, telemetry, or behavioral tracking code;
- send data to a project-owned server;
- sell or disclose user data to third parties for monetary benefit;
- collect data for malicious, deceptive, surveillance, or unauthorized purposes.

The package is distributed as frontend component code. Any data made available to it is limited to the props supplied by the consuming application, such as `mp4` and `webm`.

**Third-Party Media and Network Requests**<br/>

This component renders a native HTML `<video>` element using the MP4 and WebM source values provided by the consuming application. If those source values point to remote URLs, the browser may request video files directly from the referenced hosting provider, CDN, or media server.

Those external media requests are not controlled by this package. Application developers using this component are responsible for:

- choosing trusted video file URLs or static assets;
- validating any video URLs that come from user input or external systems;
- informing their users about any applicable third-party media hosting, privacy, consent, cookie, or network behavior;
- complying with laws, regulations, platform policies, and internal security requirements that apply to their application.

**Security Expectations for Consumers**<br/>

This package expects `mp4` and `webm` values to come from trusted application code or properly validated application data.

Consumers should avoid passing untrusted or unsanitized user input directly into video source props. If video URLs are user-generated or come from external systems, validate them before rendering the component. A recommended approach is to allow only expected protocols, trusted domains, and supported video file paths.

The package does not request elevated browser permissions, does not execute remote scripts, and does not create iframe content. It renders a native browser video element and relies on the browser's built-in media handling behavior.

**Reporting a Vulnerability**<br/>

If you discover a vulnerability, privacy issue, malicious behavior, dependency risk, or other security concern, please report it responsibly. Preferred reporting method:

- Open a GitHub security advisory for this repository, if available.
- If private security advisories are not available, open a GitHub issue with a clear description and avoid publishing exploit details that could put users at risk.

Please include:

- affected package version;
- a description of the issue;
- steps to reproduce, if applicable;
- potential impact;
- any suggested mitigation or patch.

The maintainer(s) will make a reasonable effort to review valid reports, investigate impact, and publish a fix or guidance when appropriate.

**Supported Versions**<br/>

Security updates are generally expected to apply to the latest published version of the package. Users are encouraged to upgrade to the latest version when fixes or improvements are released.

**No Warranty**<br/>

This project is provided as open source software under the repository license and without warranty of any kind. Users and application developers are responsible for evaluating whether this package is suitable for their own security, privacy, compliance, and operational requirements.
