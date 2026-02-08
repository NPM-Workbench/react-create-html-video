/// <reference types="jest" />
import React from 'react';
import { render } from '@testing-library/react';
import { ReactCreateHTMLVideo } from '../index.js';

/* mock the useVideo hook */
jest.mock('../use-video');

import useVideo from '../use-video';

const useVideoMock = useVideo as jest.MockedFunction<typeof useVideo>;

/* restore mocks after each test */
beforeEach(() => {
  jest.clearAllMocks();
  useVideoMock.mockReturnValue({ videoSource: null });
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('RCHV Test Suite:', () => {
  /* #1 */
  test('renders null when videoSource is null', () => {
    useVideoMock.mockReturnValue({ videoSource: null });

    const { container } = render(
      <ReactCreateHTMLVideo mp4="test.mp4" webm="test.webm" />,
    );

    expect(container.firstChild).toBeNull();
  });

  /* #2 */
  test('renders video container when videoSource is provided', () => {
    const testSource = 'blob:http://localhost/test-video';
    useVideoMock.mockReturnValue({ videoSource: testSource });

    const { container } = render(
      <ReactCreateHTMLVideo mp4="test.mp4" webm="test.webm" />,
    );

    const videoParent = container.querySelector('._rcVideoParent');
    expect(videoParent).toBeInTheDocument();
  });

  /* #3 */
  test('renders video element with correct attributes', () => {
    const testSource = 'blob:http://localhost/test-video';
    useVideoMock.mockReturnValue({ videoSource: testSource });

    const { container } = render(
      <ReactCreateHTMLVideo mp4="test.mp4" webm="test.webm" />,
    );

    const videoElement = container.querySelector('video');
    expect(videoElement).toBeInTheDocument();
    expect(videoElement).toHaveAttribute('autoplay');
    expect(videoElement).toHaveAttribute('loop');
    expect(videoElement?.getAttribute('muted')).toBeDefined();
    expect(videoElement).toHaveAttribute('playsinline');
  });

  /* #4 */
  test('sets video src to the videoSource from useVideo hook', () => {
    const testSource = 'blob:http://localhost/test-video';
    useVideoMock.mockReturnValue({ videoSource: testSource });

    const { container } = render(
      <ReactCreateHTMLVideo mp4="test.mp4" webm="test.webm" />,
    );

    const videoElement = container.querySelector('video');
    expect(videoElement).toHaveAttribute('src', testSource);
  });

  /* #5 */
  test('passes correct props to useVideo hook', () => {
    useVideoMock.mockReturnValue({ videoSource: null });

    const mp4Source = 'path/to/video.mp4';
    const webmSource = 'path/to/video.webm';

    render(<ReactCreateHTMLVideo mp4={mp4Source} webm={webmSource} />);

    expect(useVideoMock).toHaveBeenCalledWith({
      mp4: mp4Source,
      webm: webmSource,
    });
  });

  /* #6 */
  test('memoizes component and does not re-render with same props', () => {
    const testSource = 'blob:http://localhost/test-video';
    useVideoMock.mockReturnValue({ videoSource: testSource });

    const { rerender } = render(
      <ReactCreateHTMLVideo mp4="test.mp4" webm="test.webm" />,
    );

    const initialCallCount = useVideoMock.mock.calls.length;

    rerender(<ReactCreateHTMLVideo mp4="test.mp4" webm="test.webm" />);

    /* memo should prevent hook from being called again with same props */
    expect(useVideoMock.mock.calls.length).toBe(initialCallCount);
  });

  /* #7 */
  test('renders video element inside parent container', () => {
    const testSource = 'blob:http://localhost/test-video';
    useVideoMock.mockReturnValue({ videoSource: testSource });

    const { container } = render(
      <ReactCreateHTMLVideo mp4="test.mp4" webm="test.webm" />,
    );

    const videoParent = container.querySelector('._rcVideoParent');
    const videoElement = videoParent?.querySelector('video');

    expect(videoElement).toBeInTheDocument();
    expect(videoElement?.parentElement).toBe(videoParent);
  });

  /* #8 */
  test('updates when videoSource changes', () => {
    useVideoMock.mockReturnValue({
      videoSource: 'blob:http://localhost/video1',
    });

    const { container, rerender } = render(
      <ReactCreateHTMLVideo mp4="test.mp4" webm="test.webm" />,
    );

    let videoElement = container.querySelector('video');
    expect(videoElement).toHaveAttribute('src', 'blob:http://localhost/video1');

    useVideoMock.mockReturnValue({
      videoSource: 'blob:http://localhost/video2',
    });

    /* rerender with different props to trigger hook update */
    rerender(
      <ReactCreateHTMLVideo mp4="different.mp4" webm="different.webm" />,
    );

    /* verify hook was called again with new props */
    expect(useVideoMock.mock.calls.length).toBeGreaterThan(1);
  });

  /* #9 */
  test('returns null when videoSource is falsy', () => {
    useVideoMock.mockReturnValue({ videoSource: '' });

    const { container } = render(
      <ReactCreateHTMLVideo mp4="test.mp4" webm="test.webm" />,
    );

    /* empty string is falsy, so component returns null */
    expect(container.firstChild).toBeNull();
  });

  /* #10 */
  test('renders only one video element', () => {
    const testSource = 'blob:http://localhost/test-video';
    useVideoMock.mockReturnValue({ videoSource: testSource });

    const { container } = render(
      <ReactCreateHTMLVideo mp4="test.mp4" webm="test.webm" />,
    );

    const videoElements = container.querySelectorAll('video');
    expect(videoElements).toHaveLength(1);
  });
});
