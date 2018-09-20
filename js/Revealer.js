import classie from './classie'

// some helper functions
/**
 * from https://davidwalsh.name/javascript-debounce-function
 */
function debounce(func, wait, immediate) {
  let timeout
  return function() {
    const context = this
    const args = arguments
    const later = () => {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}
function extend(a, b) {
  for (const key in b) {
    if (b.hasOwnProperty(key)) {
      a[key] = b[key]
    }
  }
  return a
}

// some vars
const bodyEl = document.body

let // window sizes
winsize = { width: window.innerWidth, height: window.innerHeight }

const // support for animations
support = { animations: Modernizr.cssanimations }

const // animationend event function
animEndEventNames = {
  WebkitAnimation: 'webkitAnimationEnd',
  OAnimation: 'oAnimationEnd',
  msAnimation: 'MSAnimationEnd',
  animation: 'animationend',
}

const animEndEventName = animEndEventNames[Modernizr.prefixed('animation')]

const onEndAnimation = (el, callback) => {
  const onEndCallbackFn = function({ target }) {
    if (support.animations) {
      if (target != this) return
      this.removeEventListener(animEndEventName, onEndCallbackFn)
    }
    if (callback && typeof callback === 'function') {
      callback.call()
    }
  }
  if (support.animations) {
    el.addEventListener(animEndEventName, onEndCallbackFn)
  } else {
    onEndCallbackFn()
  }
}

/**
 * Revealer obj
 */
class Revealer {
  constructor(options) {
    this.options = extend({}, this.options)
    extend(this.options, options)
    this._init()
  }

  /**
   * build layer structure
   * add effect class
   * init/bind events
   */
  _init() {
    // add revealer layers
    this._addLayers()
    // now we have access to the layers
    this.layers = [].slice.call(this.revealerWrapper.children)
    // init/bind events
    this._initEvents()
  }

  /**
   * init/bind events
   */
  _initEvents() {
    // window resize: recalculate window sizes
    this.debounceResize = debounce(ev => {
      winsize = { width: window.innerWidth, height: window.innerHeight }
    }, 10)
    window.addEventListener('resize', this.debounceResize)
  }

  /**
   * build layer structure and append it to the body
   * add effect class
   */
  _addLayers() {
    this.revealerWrapper = document.createElement('div')
    this.revealerWrapper.className = 'revealer'
    classie.add(bodyEl, this.options.effect)
    let strHTML = ''
    for (let i = 0; i < this.options.nmbLayers; ++i) {
      const bgcolor =
        typeof this.options.bgcolor === 'string'
          ? this.options.bgcolor
          : this.options.bgcolor instanceof Array && this.options.bgcolor[i]
            ? this.options.bgcolor[i]
            : '#fff'
      strHTML += `<div style="background:${bgcolor}" class="revealer__layer"></div>`
    }
    this.revealerWrapper.innerHTML = strHTML
    bodyEl.appendChild(this.revealerWrapper)
  }

  /**
   * reveal the layers
   * direction: right || left || top || bottom || cornertopleft || cornertopright || cornerbottomleft || cornerbottomright
   */
  reveal(direction, callbacktime, callback) {
    // if animating return
    if (this.isAnimating) {
      return false
    }
    this.isAnimating = true
    // current direction
    this.direction = direction
    // onStart callback
    this.options.onStart(this.direction)

    // set the initial position for the layers´ parent
    let widthVal

    let heightVal
    let transform
    if (
      direction === 'cornertopleft' ||
      direction === 'cornertopright' ||
      direction === 'cornerbottomleft' ||
      direction === 'cornerbottomright'
    ) {
      const pageDiagonal = Math.sqrt(winsize.width ** 2 + winsize.height ** 2)
      widthVal = heightVal = `${pageDiagonal}px`

      if (direction === 'cornertopleft') {
        transform = `translate3d(-50%,-50%,0) rotate3d(0,0,1,135deg) translate3d(0,${pageDiagonal}px,0)`
      } else if (direction === 'cornertopright') {
        transform = `translate3d(-50%,-50%,0) rotate3d(0,0,1,-135deg) translate3d(0,${pageDiagonal}px,0)`
      } else if (direction === 'cornerbottomleft') {
        transform = `translate3d(-50%,-50%,0) rotate3d(0,0,1,45deg) translate3d(0,${pageDiagonal}px,0)`
      } else if (direction === 'cornerbottomright') {
        transform = `translate3d(-50%,-50%,0) rotate3d(0,0,1,-45deg) translate3d(0,${pageDiagonal}px,0)`
      }
    } else if (direction === 'left' || direction === 'right') {
      widthVal = '100vh'
      heightVal = '100vw'
      transform = `translate3d(-50%,-50%,0) rotate3d(0,0,1,${
        direction === 'left' ? 90 : -90
      }deg) translate3d(0,100%,0)`
    } else if (direction === 'top' || direction === 'bottom') {
      widthVal = '100vw'
      heightVal = '100vh'
      transform = direction === 'top' ? 'rotate3d(0,0,1,180deg)' : 'none'
    }

    this.revealerWrapper.style.width = widthVal
    this.revealerWrapper.style.height = heightVal
    this.revealerWrapper.style.WebkitTransform = this.revealerWrapper.style.transform = transform
    this.revealerWrapper.style.opacity = 1

    // add direction and animate classes to parent
    classie.add(
      this.revealerWrapper,
      `revealer--${direction}` || 'revealer--right'
    )
    classie.add(this.revealerWrapper, 'revealer--animate')

    // track the end of the animation for all layers
    const self = this

    let layerscomplete = 0
    this.layers.forEach(layer => {
      onEndAnimation(layer, () => {
        ++layerscomplete
        if (layerscomplete === self.options.nmbLayers) {
          classie.remove(
            self.revealerWrapper,
            `revealer--${direction}` || 'revealer--right'
          )
          classie.remove(self.revealerWrapper, 'revealer--animate')

          self.revealerWrapper.style.opacity = 0
          self.isAnimating = false

          // callback
          self.options.onEnd(self.direction)
        }
      })
    })

    // reveal fn callback
    if (typeof callback === 'function') {
      if (this.callbacktimeout) {
        clearTimeout(this.callbacktimeout)
      }
      this.callbacktimeout = setTimeout(callback, callbacktime)
    }
  }

  /**
   * destroy method
   */
  destroy() {
    classie.remove(bodyEl, this.options.effect)
    window.removeEventListener('resize', this.debounceResize)
    bodyEl.removeChild(this.revealerWrapper)
  }
}

/**
 * Revealer default options
 */
Revealer.prototype.options = {
  // total number of revealing layers (min is 1)
  nmbLayers: 1,
  // bg color for the revealing layers
  bgcolor: '#fff',
  // effect classname
  effect: 'anim--effect-1',
  // callback
  onStart(direction) {
    return false
  },
  // callback
  onEnd(direction) {
    return false
  },
}

window.Revealer = Revealer

export default Revealer
