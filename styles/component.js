import { css } from 'styled-components'

const style = css`
  html,
  body {
    min-height: 100vh;
    overflow-x: hidden;
  }

  .js .container {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  .js .pages {
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    z-index: 0;
  }

  .page {
    padding: 6.5em;
    background: #66c6ff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .js .page {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    z-index: 1;
  }

  .js .page--current {
    visibility: visible;
    position: relative;
  }

  /* Navigation */

  .pagenav {
    position: absolute;
    pointer-events: none;
    top: 2em;
    left: 2em;
    right: 2em;
    bottom: 2em;
    z-index: 1000;
  }

  .no-js .pagenav {
    display: none;
  }

  .pagenav__button {
    position: absolute;
    border: 0;
    background: none;
    padding: 0;
    margin: 0;
    width: 2em;
    height: 2em;
    cursor: pointer;
    pointer-events: auto;
  }

  .pagenav__button:focus {
    outline: none;
  }

  .pagenav__button--top,
  .pagenav__button--bottom {
    left: 50%;
    margin: 0 0 0 -1em;
  }

  .pagenav__button--bottom,
  .pagenav__button--cornerbottomleft {
    bottom: 0;
  }

  .pagenav__button--left,
  .pagenav__button--right {
    top: 50%;
    margin: -1em 0 0 0;
  }

  .pagenav__button--right,
  .pagenav__button--cornertopright,
  .pagenav__button--cornerbottomright {
    right: 0;
  }

  .pagenav__button--cornerbottomright {
    bottom: 0;
  }

  .icon {
    width: 100%;
    height: 100%;
    fill: rgba(0, 0, 0, 0.15);
    stroke: #303840;
  }

  .pagenav__button:hover .icon {
    stroke: #000;
  }

  .icon--rtop {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  .icon--rbottom {
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }

  .icon--rright {
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg);
  }

  .icon--rtopleft {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .icon--rtopright {
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
  }

  .icon--rbottomleft {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .icon--rbottomright {
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }

  /* Page content */

  .quote {
    font-size: 5.5vh;
    line-height: 1.25;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 100%;
    margin: 0 auto;
    max-width: 800px;
    padding: 1em;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .quote p {
    font-family: 'Merriweather', serif;
    margin: 0 0 0.5em;
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
  }

  .quote p::before {
    content: '\\201C';
  }

  .quote p::after {
    content: '\\201D';
  }

  .quote footer {
    font-size: 0.5em;
  }

  .quote footer::before {
    content: '\\2014';
  }

  /* Revealers */

  .revealer {
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 1000;
    pointer-events: none;
  }

  .revealer--cornertopleft,
  .revealer--cornertopright,
  .revealer--cornerbottomleft,
  .revealer--cornerbottomright {
    top: 50%;
    left: 50%;
  }

  .revealer--top,
  .revealer--bottom {
    left: 0;
  }

  .revealer--right,
  .revealer--left {
    top: 50%;
    left: 50%;
  }

  .revealer--top {
    bottom: 100%;
  }

  .revealer--bottom {
    top: 100%;
  }

  .revealer__layer {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #ddd;
  }

  /* Revealer effects */

  /* One layer effect (effect-1) */

  .anim--effect-1 .page:first-child {
    background: #605bd4;
  }

  .anim--effect-1 .page:nth-child(2) {
    background: #ff6eae;
  }

  .anim--effect-1 .revealer--animate .revealer__layer {
    -webkit-animation: anim-effect-1 1.5s cubic-bezier(0.2, 1, 0.3, 1) forwards;
    animation: anim-effect-1 1.5s cubic-bezier(0.2, 1, 0.3, 1) forwards;
  }

  @-webkit-keyframes anim-effect-1 {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    35%,
    65% {
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
    100% {
      -webkit-transform: translate3d(0, -200%, 0);
      transform: translate3d(0, -200%, 0);
    }
  }

  @keyframes anim-effect-1 {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    35%,
    65% {
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
    100% {
      -webkit-transform: translate3d(0, -200%, 0);
      transform: translate3d(0, -200%, 0);
    }
  }

  /* Two layer effect (effect-2) */

  .anim--effect-2 .page:first-child {
    background: #9cdab1;
  }

  .anim--effect-2 .page:nth-child(2) {
    background: #f9c969;
  }

  .anim--effect-2 .revealer--animate .revealer__layer {
    -webkit-animation: anim-effect-2-1 1.5s cubic-bezier(0.7, 0, 0.3, 1)
      forwards;
    animation: anim-effect-2-1 1.5s cubic-bezier(0.7, 0, 0.3, 1) forwards;
  }

  .anim--effect-2 .revealer--animate .revealer__layer:nth-child(2) {
    -webkit-animation-name: anim-effect-2-2;
    animation-name: anim-effect-2-2;
  }

  @-webkit-keyframes anim-effect-2-1 {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    30%,
    70% {
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
      -webkit-animation-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
      animation-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
    }
    100% {
      -webkit-transform: translate3d(0, -200%, 0);
      transform: translate3d(0, -200%, 0);
    }
  }

  @keyframes anim-effect-2-1 {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    30%,
    70% {
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
      -webkit-animation-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
      animation-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
    }
    100% {
      -webkit-transform: translate3d(0, -200%, 0);
      transform: translate3d(0, -200%, 0);
    }
  }

  @-webkit-keyframes anim-effect-2-2 {
    0%,
    14.5% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    37.5%,
    62.5% {
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
      -webkit-animation-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
      animation-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
    }
    85.5%,
    100% {
      -webkit-transform: translate3d(0, -200%, 0);
      transform: translate3d(0, -200%, 0);
    }
  }

  @keyframes anim-effect-2-2 {
    0%,
    14.5% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    37.5%,
    62.5% {
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
      -webkit-animation-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
      animation-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
    }
    85.5%,
    100% {
      -webkit-transform: translate3d(0, -200%, 0);
      transform: translate3d(0, -200%, 0);
    }
  }

  /* Three layer effect (effect-3) */

  .anim--effect-3 .page:nth-child(2) {
    background: #ecf3a3;
  }

  .anim--effect-3 .revealer--animate .revealer__layer {
    -webkit-animation: anim-effect-3-1 1.5s
      cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards;
    animation: anim-effect-3-1 1.5s cubic-bezier(0.55, 0.055, 0.675, 0.19)
      forwards;
  }

  .anim--effect-3 .revealer--animate .revealer__layer:nth-child(2) {
    -webkit-animation-name: anim-effect-3-2;
    animation-name: anim-effect-3-2;
  }

  .anim--effect-3 .revealer--animate .revealer__layer:nth-child(3) {
    -webkit-animation-name: anim-effect-3-3;
    animation-name: anim-effect-3-3;
  }

  @-webkit-keyframes anim-effect-3-1 {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    25%,
    75% {
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      -webkit-transform: translate3d(0, -200%, 0);
      transform: translate3d(0, -200%, 0);
    }
  }

  @keyframes anim-effect-3-1 {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    25%,
    75% {
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      -webkit-transform: translate3d(0, -200%, 0);
      transform: translate3d(0, -200%, 0);
    }
  }

  @-webkit-keyframes anim-effect-3-2 {
    0%,
    12.5% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    37.5%,
    62.5% {
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    87.5%,
    100% {
      -webkit-transform: translate3d(0, -200%, 0);
      transform: translate3d(0, -200%, 0);
    }
  }

  @keyframes anim-effect-3-2 {
    0%,
    12.5% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    37.5%,
    62.5% {
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    87.5%,
    100% {
      -webkit-transform: translate3d(0, -200%, 0);
      transform: translate3d(0, -200%, 0);
    }
  }

  @-webkit-keyframes anim-effect-3-3 {
    0%,
    25% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      -webkit-animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
      animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    75%,
    100% {
      -webkit-transform: translate3d(0, -200%, 0);
      transform: translate3d(0, -200%, 0);
    }
  }

  @keyframes anim-effect-3-3 {
    0%,
    25% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      -webkit-animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
      animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    75%,
    100% {
      -webkit-transform: translate3d(0, -200%, 0);
      transform: translate3d(0, -200%, 0);
    }
  }

  /* Forth effect */

  .anim--effect-4 .page:first-child {
    background: #28282d;
  }

  .anim--effect-4 .page:nth-child(2) {
    background: #f15c5c;
  }

  .anim--effect-4 .page--animate-top .quote {
    -webkit-animation: moveQuoteTop 1.5s forwards;
    animation: moveQuoteTop 1.5s forwards;
  }

  @-webkit-keyframes moveQuoteTop {
    0%,
    65% {
      -webkit-transform: translate3d(0, -75px, 0);
      transform: translate3d(0, -75px, 0);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes moveQuoteTop {
    0%,
    65% {
      -webkit-transform: translate3d(0, -75px, 0);
      transform: translate3d(0, -75px, 0);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  .anim--effect-4 .page--animate-bottom .quote {
    -webkit-animation: moveQuoteBottom 1.5s forwards;
    animation: moveQuoteBottom 1.5s forwards;
  }

  @-webkit-keyframes moveQuoteBottom {
    0%,
    65% {
      -webkit-transform: translate3d(0, 75px, 0);
      transform: translate3d(0, 75px, 0);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes moveQuoteBottom {
    0%,
    65% {
      -webkit-transform: translate3d(0, 75px, 0);
      transform: translate3d(0, 75px, 0);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  .anim--effect-4 .page--animate-left .quote {
    -webkit-animation: moveQuoteLeft 1.5s forwards;
    animation: moveQuoteLeft 1.5s forwards;
  }

  @-webkit-keyframes moveQuoteLeft {
    0%,
    65% {
      -webkit-transform: translate3d(-75px, 0, 0);
      transform: translate3d(-75px, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes moveQuoteLeft {
    0%,
    65% {
      -webkit-transform: translate3d(-75px, 0, 0);
      transform: translate3d(-75px, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  .anim--effect-4 .page--animate-right .quote {
    -webkit-animation: moveQuoteRight 1.5s forwards;
    animation: moveQuoteRight 1.5s forwards;
  }

  @-webkit-keyframes moveQuoteRight {
    0%,
    65% {
      -webkit-transform: translate3d(75px, 0, 0);
      transform: translate3d(75px, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes moveQuoteRight {
    0%,
    65% {
      -webkit-transform: translate3d(75px, 0, 0);
      transform: translate3d(75px, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  .anim--effect-4 .page--animate-cornertopright .quote {
    -webkit-animation: moveQuoteCornerTopRight 1.5s forwards;
    animation: moveQuoteCornerTopRight 1.5s forwards;
  }

  @-webkit-keyframes moveQuoteCornerTopRight {
    0%,
    65% {
      -webkit-transform: translate3d(50px, -50px, 0);
      transform: translate3d(50px, -50px, 0);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes moveQuoteCornerTopRight {
    0%,
    65% {
      -webkit-transform: translate3d(50px, -50px, 0);
      transform: translate3d(50px, -50px, 0);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  .anim--effect-4 .page--animate-cornertopleft .quote {
    -webkit-animation: moveQuoteCornerTopLeft 1.5s forwards;
    animation: moveQuoteCornerTopLeft 1.5s forwards;
  }

  @-webkit-keyframes moveQuoteCornerTopLeft {
    0%,
    65% {
      -webkit-transform: translate3d(-50px, -50px, 0);
      transform: translate3d(-50px, -50px, 0);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes moveQuoteCornerTopLeft {
    0%,
    65% {
      -webkit-transform: translate3d(-50px, -50px, 0);
      transform: translate3d(-50px, -50px, 0);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  .anim--effect-4 .page--animate-cornerbottomright .quote {
    -webkit-animation: moveQuoteCornerBottomRight 1.5s forwards;
    animation: moveQuoteCornerBottomRight 1.5s forwards;
  }

  @-webkit-keyframes moveQuoteCornerBottomRight {
    0%,
    65% {
      -webkit-transform: translate3d(50px, 50px, 0);
      transform: translate3d(50px, 50px, 0);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes moveQuoteCornerBottomRight {
    0%,
    65% {
      -webkit-transform: translate3d(50px, 50px, 0);
      transform: translate3d(50px, 50px, 0);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  .anim--effect-4 .page--animate-cornerbottomleft .quote {
    -webkit-animation: moveQuoteCornerBottomLeft 1.5s forwards;
    animation: moveQuoteCornerBottomLeft 1.5s forwards;
  }

  @-webkit-keyframes moveQuoteCornerBottomLeft {
    0%,
    65% {
      -webkit-transform: translate3d(-50px, 50px, 0);
      transform: translate3d(-50px, 50px, 0);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes moveQuoteCornerBottomLeft {
    0%,
    65% {
      -webkit-transform: translate3d(-50px, 50px, 0);
      transform: translate3d(-50px, 50px, 0);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  .anim--effect-4 .revealer--animate .revealer__layer {
    -webkit-animation: anim-effect-4-1 1.5s
      cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards;
    animation: anim-effect-4-1 1.5s cubic-bezier(0.55, 0.055, 0.675, 0.19)
      forwards;
  }

  .anim--effect-4 .revealer--animate .revealer__layer:nth-child(2) {
    -webkit-animation-name: anim-effect-4-2;
    animation-name: anim-effect-4-2;
    -webkit-animation-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    animation-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
  }

  .anim--effect-4 .revealer--animate .revealer__layer:nth-child(3) {
    -webkit-animation-name: anim-effect-4-3;
    animation-name: anim-effect-4-3;
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  }

  @-webkit-keyframes anim-effect-4-1 {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    35%,
    65% {
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      -webkit-transform: translate3d(0, -200%, 0);
      transform: translate3d(0, -200%, 0);
    }
  }

  @keyframes anim-effect-4-1 {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    35%,
    65% {
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      -webkit-transform: translate3d(0, -200%, 0);
      transform: translate3d(0, -200%, 0);
    }
  }

  @-webkit-keyframes anim-effect-4-2 {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    45%,
    55% {
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
      -webkit-animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
      animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    100% {
      -webkit-transform: translate3d(0, -200%, 0);
      transform: translate3d(0, -200%, 0);
    }
  }

  @keyframes anim-effect-4-2 {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    45%,
    55% {
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
      -webkit-animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
      animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    100% {
      -webkit-transform: translate3d(0, -200%, 0);
      transform: translate3d(0, -200%, 0);
    }
  }

  @-webkit-keyframes anim-effect-4-3 {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    45%,
    55% {
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
      -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
      animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    }
    100% {
      -webkit-transform: translate3d(0, -200%, 0);
      transform: translate3d(0, -200%, 0);
    }
  }

  @keyframes anim-effect-4-3 {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    45%,
    55% {
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
      -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
      animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    }
    100% {
      -webkit-transform: translate3d(0, -200%, 0);
      transform: translate3d(0, -200%, 0);
    }
  }

  /* Media queries */

  @media screen and (max-width: 50em) {
    .quote {
      font-size: 5vw;
      text-align: center;
      padding: 0.5em;
    }
  }
`

export default style
