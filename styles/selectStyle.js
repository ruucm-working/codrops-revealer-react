import { css } from 'styled-components'

const style = css`
  /* https://github.com/filamentgroup/select-css */

  /* Container used for styling the custom select, the buttom class below adds the
 * bg gradient, corners, etc. */
  .custom-select {
    position: relative;
    display: block;
  }

  /* This is the native select, we're making everything but the text invisible so
 * we can see the button styles in the wrapper */
  .custom-select select {
    width: 100%;
    margin: 0;
    outline: none;
    padding: 0.6em 0.8em 0.5em 0.8em;

    /* Prefixed box-sizing rules necessary for older browsers */
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    /* Font size must be 16px to prevent iOS page zoom on focus */
    font-size: 16px;
  }

  /* Custom arrow sits on top of the select - could be an image, SVG, icon font,
 * etc. or the arrow could just baked into the bg image on the select. */
  .custom-select::after {
    content: ' ';
    position: absolute;
    top: 50%;
    right: 1em;
    z-index: 2;
    /* These hacks make the select behind the arrow clickable in some browsers */
    pointer-events: none;
    display: none;
  }

  @supports (-webkit-appearance: none) or (appearance: none)
    /* Firefox <= 34 has a false positive on @supports( -moz-appearance: none )
	 * @supports ( mask-type: alpha ) is Firefox 35+
	 */
    or ((-moz-appearance: none) and (mask-type: alpha)) {
    /* Show custom arrow */
    .custom-select::after {
      display: block;
    }

    /* Remove select styling */
    .custom-select select {
      padding-right: 2em; /* Match-01 */
      /* inside @supports so that iOS <= 8 display the native arrow */
      background: none; /* Match-04 */
      /* inside @supports so that Android <= 4.3 display the native arrow */
      border: 1px solid transparent; /* Match-05 */

      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
    .custom-select select:focus {
      border-color: #aaa; /* Match-03 */
    }
  }
`
export default style
