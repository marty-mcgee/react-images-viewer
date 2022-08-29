import React from "react";
// OLD
// import { render } from "react-dom"
// NEW
import { createRoot } from "react-dom/client";
import Gallery from "./components/Gallery";
import CustomSpinner from "./components/Spinner";
import "./example.less";

function makeUnsplashSrc(id) {
  return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&w=1024&h=1024`;
}
function makeUnsplashSrcSet(id, size) {
  return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&w=${size} ${size}w`;
}
function makeUnsplashThumbnail(id, orientation = "landscape") {
  const dimensions = orientation === "square" ? "w=300&h=300" : "w=240&h=159";

  return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&crop=faces&fit=crop&${dimensions}`;
}

// Unsplash images from the "Adventure" collection
// https://unsplash.com/collections/369/adventure

const DEFAULT_IMAGES = [
  {
    id: "1526382551041-3c817fc3d478",
    caption: "Photo by Simon Alexander",
    orientation: "square",
    useForDemo: true,
  },
  {
    id: "1522985225914-17a10a58c8ec",
    caption: "Photo by Blake Cheek",
    orientation: "square",
    useForDemo: true,
  },
  {
    id: "1522931698295-e7b4d3e4188f",
    caption: "Photo by Oliver Sjöström",
    orientation: "square",
    useForDemo: true,
  },
  {
    id: "1516175663209-ac2459a5652f",
    caption: "Photo by Jeremy Bishop",
    orientation: "square",
    useForDemo: true,
  },
  {
    id: "1515911601378-97de98db6dda",
    caption: "Photo by Emily Reider",
    orientation: "square",
    useForDemo: true,
  },
];
const THEMED_IMAGES = [
  {
    id: "1506773090264-ac0b07293a64",
    caption: "Photo by Dan Grinwis",
    orientation: "square",
    useForDemo: true,
  },
  {
    id: "1482398650355-d4c6462afa0e",
    caption: "Photo by Andrew Neel",
    orientation: "landscape",
    useForDemo: true,
  },
  {
    id: "1514949823529-bdcc933a9339",
    caption: "Photo by Kristopher Roller",
    orientation: "landscape",
    useForDemo: true,
  },
  {
    id: "1503293962593-47247718a17a",
    caption: "Photo by Jeremy Bishop",
    orientation: "landscape",
    useForDemo: true,
  },
  {
    id: "1509914398892-963f53e6e2f1",
    caption: "Photo by Linus Nylund",
    orientation: "landscape",
    useForDemo: true,
  },
];
const THUMBNAIL_IMAGES = [
  {
    id: "1501963422762-3d89bd989568",
    caption: "Photo by Jeremy Bishop",
    orientation: "landscape",
    useForDemo: true,
  },
  {
    id: "1418846531910-2b7bb1043512",
    caption: "Photo by Vincentiu Solomon",
    orientation: "landscape",
    useForDemo: true,
  },
  {
    id: "1509529711801-deac231925ac",
    caption: "Photo by Joshua Earle",
    orientation: "landscape",
    useForDemo: true,
  },
  {
    id: "1499062229216-7c6349e898fb",
    caption: "Photo by Leio McLaren",
    orientation: "square",
    useForDemo: true,
  },
  {
    id: "1495619744764-2cc11fcbe5f0",
    caption: "Photo by Philipp Kämmerer",
    orientation: "square",
    useForDemo: true,
  },
  {
    id: "1488584433697-7ccc1148d30c",
    caption: "Photo by Flecher Clay",
    orientation: "square",
  },
  {
    id: "1478562853135-c3c9e3ef7905",
    caption: "Photo by Austin Neil",
    orientation: "landscape",
  },
  {
    id: "1476111021705-ac3b3304fe20",
    caption: "Photo by Dino Reichmuth",
    orientation: "square",
  },
  {
    id: "1478001517127-fccc92f54906",
    caption: "Photo by Joshua Earle",
    orientation: "landscape",
  },
  {
    id: "1455383333344-451b6147021b",
    caption: "Photo by Joshua Earle",
    orientation: "landscape",
  },
];

const theme = {
  // container
  container: {
    background: "rgba(255, 255, 255, .9)",
  },

  // arrows
  arrow: {
    backgroundColor: "rgba(255, 255, 255, .8)",
    fill: "#222",
    opacity: 0.6,
    transition: "opacity 200ms",

    ":hover": {
      opacity: 1,
    },
  },
  arrow__size__medium: {
    borderRadius: 40,
    height: 40,
    marginTop: -20,

    "@media (min-width: 768px)": {
      height: 70,
      padding: 15,
    },
  },
  arrow__direction__left: { marginLeft: 10 },
  arrow__direction__right: { marginRight: 10 },
  close: {
    fill: "#d40000",
    opacity: 0.6,
    transition: "all 200ms",
    ":hover": {
      opacity: 1,
    },
  },

  // footer
  footer: {
    color: "#000",
  },
  footerCount: {
    color: "rgba(0, 0, 0, .6)",
  },

  // thumbnails
  thumbnail: {},
  thumbnail__active: {
    boxShadow: "0 0 0 2px #00d8ff",
  },
};
// const theme = {
//   container: {
//     background: "rgba(255, 255, 255, .9)",
//   },
//   arrow: {
//     backgroundColor: "#222",
//     fill: "#222",
//     opacity: 0.6,
//     transition: "opacity 200ms",
//     marginLeft: 300,
//   },
//   arrow__size__medium: {
//     borderRadius: 40,
//     height: 40,
//     marginTop: -20,
//     marginLeft: 300,
//   },
//   arrow__direction__left: { marginLeft: 300, background: "blue" },
//   arrow__direction__right: { marginRight: 10, background: "blue" },
//   close: {
//     fill: "#d40000",
//     opacity: 0.6,
//     transition: "all 200ms",
//   },
//   footer: {
//     color: "#000",
//   },
//   footerCount: {
//     color: "rgba(0, 0, 0, .6)",
//   },
//   thumbnail: {
//     activeBorderColor: "#fff",
//     size: 50,
//     gutter: 2,
//   },
//   thumbnail__active: {
//     boxShadow: "0 0 0 2px #00d8ff",
//   },
// };

// OLD
// render(
// NEW (FOR REACT 18)
const root = createRoot(document.getElementById('example'))
root.render(
  <div>
    <div>
      <p>
        Photos courtesy of{" "}
        <a
          href="https://unsplash.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unsplash
        </a>
        . Use your keyboard to navigate <kbd>left, up</kbd>{" "}
        <kbd>right, down</kbd> <kbd>space, esc</kbd> &mdash; Also, try resizing
        your browser window.
      </p>
    </div>
    <h3>Default Options</h3>
    <Gallery
      imgs={DEFAULT_IMAGES.map(({ caption, id, orientation, useForDemo }) => ({
        src: makeUnsplashSrc(id),
        thumbnail: makeUnsplashThumbnail(id, orientation),
        srcSet: [
          makeUnsplashSrcSet(id, 1024),
          makeUnsplashSrcSet(id, 800),
          makeUnsplashSrcSet(id, 500),
          makeUnsplashSrcSet(id, 320),
        ],
        caption,
        orientation,
        useForDemo,
      }))}
    />

    <h3>With Thumbnails</h3>
    <Gallery
      imgs={THUMBNAIL_IMAGES.map(
        ({ caption, id, orientation, useForDemo }) => ({
          src: makeUnsplashSrc(id),
          thumbnail: makeUnsplashThumbnail(id, orientation),
          srcSet: [
            makeUnsplashSrcSet(id, 1024),
            makeUnsplashSrcSet(id, 800),
            makeUnsplashSrcSet(id, 500),
            makeUnsplashSrcSet(id, 320),
          ],
          caption,
          orientation,
          useForDemo,
        })
      )}
      showThumbnails
    />

    <h3>Themed ImgsViewer</h3>
    <Gallery
      imgs={THEMED_IMAGES.map(({ caption, id, orientation, useForDemo }) => ({
        src: makeUnsplashSrc(id),
        thumbnail: makeUnsplashThumbnail(id, orientation),
        srcSet: [
          makeUnsplashSrcSet(id, 1024),
          makeUnsplashSrcSet(id, 800),
          makeUnsplashSrcSet(id, 500),
          makeUnsplashSrcSet(id, 320),
        ],
        caption,
        orientation,
        useForDemo,
      }))}
      theme={theme}
      spinner={CustomSpinner}
      spinnerColor={"#d40000"}
      spinnerSize={150}
      showThumbnails
    />
  </div>
  // OLD
  // , document.getElementById('example-CN')
);
