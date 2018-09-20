import { css } from 'styled-components'

import terminal from '../img/terminal.svg'
import fontEOT from '../fonts/codropsicons/codropsicons.eot'
import fontTTF from '../fonts/codropsicons/codropsicons.ttf'
import fontWOFF from '../fonts/codropsicons/codropsicons.woff'
import fontSVG from '../fonts/codropsicons/codropsicons.svg'

const style = css`
  @font-face {
    font-weight: normal;
    font-style: normal;
    font-family: 'codropsicons';
    src: url(${fontEOT});
    src: url(${fontEOT}) format('embedded-opentype'),
      url(${fontWOFF}) format('woff'), url(${fontTTF}) format('truetype'),
      url(${fontSVG}) format('svg');
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    font-family: 'Source Sans Pro', Avenir, 'Helvetica Neue', Helvetica, Arial,
      sans-serif;
    color: #444;
    background: #f6f6f6;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    outline: none;
    color: #45a8f1;
    text-decoration: none;
  }

  a:hover,
  a:focus {
    color: #544f4a;
    outline: none;
  }

  .hidden {
    position: absolute;
    overflow: hidden;
    width: 0;
    height: 0;
    pointer-events: none;
  }

  /* Header */

  .codrops-header {
    letter-spacing: 2px;
    text-transform: uppercase;
    position: relative;
    padding: 0 0 2em 0;
    margin: 0 0 1em 0;
    min-height: 250px;
  }

  .codrops-header__title {
    font-size: 1.2em;
    color: #fff;
    border: 3px solid #fff;
    padding: 1.5em 2em;
    margin: 0 0 0 3em;
    display: inline-block;
  }

  .codrops-header__subbox {
    background: #fff;
    color: #66c6ff;
    max-width: 260px;
    padding: 2em 2em 4em;
    font-size: 0.85em;
    font-weight: bold;
    line-height: 1.25;
    text-align: right;
    margin: -1.25em 0 0 0;
  }

  .codrops-header__subbox span {
    display: block;
    margin: 0 0 1em 0;
  }

  /* Custom styles for https://github.com/filamentgroup/select-css */

  .custom-select {
    border: 3px solid #303840;
    background: #56b4f9;
  }

  .custom-select::after {
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 7px solid #303840;
    margin-top: -3px;
  }

  .custom-select select {
    font-family: 'Source Sans Pro', Avenir, 'Helvetica Neue', Helvetica, Arial,
      sans-serif;
    letter-spacing: 0px;
    font-weight: 700;
    color: #303840;
    line-height: 1.5;
    cursor: pointer;
  }

  /* Focus style */

  .custom-select select:focus {
    outline: none;
    box-shadow: none;
    border: 1px solid transparent;
  }

  /* Set options to normal weight */

  .custom-select option {
    font-weight: bold;
    background: #fff;
    box-shadow: none;
  }

  /* Top Navigation Style */

  .codrops-links {
    position: absolute;
    display: inline-block;
    text-align: center;
    white-space: nowrap;
    border: 3px solid #fff;
    background: #66c6ff;
    bottom: 0;
    left: 11em;
  }

  .codrops-links::after {
    position: absolute;
    top: -5%;
    left: 50%;
    width: 3px;
    margin-left: -1px;
    height: 110%;
    background: #fff;
    content: '';
    -webkit-transform: rotate3d(0, 0, 1, 22.5deg);
    transform: rotate3d(0, 0, 1, 22.5deg);
  }

  .codrops-icon {
    display: inline-block;
    margin: 1em;
    width: 1.5em;
    text-decoration: none;
  }

  .codrops-icon span {
    display: none;
  }

  .codrops-icon::before {
    margin: 0 5px;
    text-transform: none;
    font-weight: normal;
    font-style: normal;
    font-variant: normal;
    font-family: 'codropsicons';
    line-height: 1;
    speak: none;
    -webkit-font-smoothing: antialiased;
  }

  .codrops-icon--drop::before {
    content: '\\e001';
    color: #0099cc;
  }

  .codrops-icon--prev::before {
    content: '\\e004';
  }

  .pater {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    display: block;
    border: 3px solid #fff;
    padding: 4.5em 2.5em 2.5em;
    width: 100%;
    max-width: 460px;
    position: relative;
    color: #fff;
    background: rgba(102, 198, 255, 1);
    margin: auto 0 3em auto;
  }

  .pater:hover,
  .pater:focus {
    color: #fff;
    outline: none;
  }

  .pater::after {
    content: 'Sponsored by';
    position: absolute;
    top: 3.5em;
    left: 4em;
    font-size: 0.65em;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: bold;
  }

  @media screen and (min-width: 50em) {
    .pater::before {
      content: '';
      position: absolute;
      background: url(${terminal}) no-repeat 0 0;
      background-size: contain;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0;
      -webkit-transition: -webkit-transform 0.3s, opacity 0s 0.3s;
      transition: transform 0.3s, opacity 0s 0.3s;
    }
    .pater:hover::before,
    .pater:focus::before {
      opacity: 1;
      -webkit-transform: translate3d(-30px, 30px, 0);
      transform: translate3d(-30px, 30px, 0);
      -webkit-transition: -webkit-transform 0.3s
        cubic-bezier(0.43, 0.04, 0.32, 0.97);
      transition: transform 0.3s cubic-bezier(0.43, 0.04, 0.32, 0.97);
    }
  }

  .pater__img {
    display: block;
    width: 50%;
  }

  .pater__title {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 1.35em;
    margin: 1em 0;
  }

  .pater__desc {
    color: #3d3935;
    font-weight: 600;
    line-height: 1.1;
    margin: 0;
  }

  /* Colors */

  /* 1 */

  .anim--effect-1 .codrops-header__subbox {
    color: #605bd4;
  }

  .anim--effect-1 .custom-select,
  .anim--effect-1 .codrops-links,
  .anim--effect-1 .pater {
    background: #605bd4;
  }

  /* 2 */

  .anim--effect-2 .codrops-header__subbox {
    color: #9cdab1;
  }

  .anim--effect-2 .custom-select,
  .anim--effect-2 .codrops-links,
  .anim--effect-2 .pater {
    background: #9cdab1;
  }

  /* 4 */

  .anim--effect-4 .codrops-header__subbox {
    color: #999;
  }

  .anim--effect-4 .custom-select,
  .anim--effect-4 .codrops-links,
  .anim--effect-4 .pater {
    background: #16161d;
  }

  .anim--effect-4 .custom-select select {
    color: white;
  }

  .anim--effect-4 .custom-select select option {
    color: black;
  }

  .anim--effect-4 .custom-select::after {
    border-top-color: white;
  }

  @media screen and (max-width: 50em) {
    .codrops-header {
      width: 100%;
      font-size: 0.8em;
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      margin: 0;
      padding: 0;
      min-height: 0;
    }
    .codrops-header__title {
      display: block;
      margin: 0;
      width: 100%;
      padding: 1em;
    }
    .codrops-header__subbox {
      max-width: none;
      width: 100%;
      margin: 0;
      text-align: left;
      font-size: 1em;
      padding: 1em;
    }
    .codrops-links {
      position: relative;
      left: auto;
      bottom: auto;
      border-right: 0;
      padding: 0;
      width: 100%;
      border: 3px solid #fff;
      border-bottom: 0;
      text-align: center;
      display: block;
    }
    .pater {
      margin: 0;
      max-width: none;
      font-size: 0.85em;
      padding: 2.5em 1em 1em;
    }
    .pater::after {
      top: 1em;
      left: 1em;
    }
    .pater__img {
      width: 160px;
    }
    .container .page {
      padding: 2.85em;
    }
    .container .pagenav {
      top: 0.5em;
      left: 0.5em;
      right: 0.5em;
      bottom: 0.5em;
      font-size: 0.85em;
    }
  }

  @media screen and (max-width: 40em) {
    .pater__title {
      font-size: 1em;
    }
    .pater__img {
      max-width: 75%;
    }
  }
`

export default style
