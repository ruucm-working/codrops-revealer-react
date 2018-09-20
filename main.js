import React from 'react'
import ReactDOM from 'react-dom'
import './styles/appStyle'

import Revealer from './js/Revealer'
import classie from './js/classie'
import { log } from 'ruucm-util'
import styled from 'styled-components'

import logo from './img/harbor-logo.svg'

var revealer
var pages
var revealerOpts
var currentPage = 0

const Logo = styled.img`
  width: 30px;
`

class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
  }
  handleChange(event) {
    this.setState({ name: event.target.value })
  }
  // triggers the effect by calling instance.reveal(direction, callbackTime, callbackFn)
  reveal(direction) {
    var callbackTime = 750,
      callbackFn = function() {
        classie.remove(pages[currentPage], 'page--current')
        currentPage = currentPage === 0 ? 1 : 0
        classie.add(pages[currentPage], 'page--current')
      }
    revealer.reveal(direction, callbackTime, callbackFn)
  }

  componentDidMount() {
    ;(pages = [].slice.call(document.querySelectorAll('.pages > .page'))),
      (revealerOpts = {
        // the layers are the elements that move from the sides
        nmbLayers: 3,
        // bg color of each layer
        bgcolor: ['#0092DD', '#fff', '#3E3A35'],
        // effect classname
        effect: 'anim--effect-3',
        onStart: function(direction) {
          // next page gets class page--animate-[direction]
          var nextPage = pages[currentPage === 0 ? 1 : 0]
          classie.add(nextPage, 'page--animate-' + direction)
        },
        onEnd: function(direction) {
          // remove class page--animate-[direction] from next page
          var nextPage = pages[currentPage === 0 ? 1 : 0]
          nextPage.className = 'page'
        },
      })

    revealer = new Revealer(revealerOpts)

    // changing the effect..
    var effectCtrl = document.getElementById('select-effect')
    effectCtrl.addEventListener('change', changeEffect)
    // force it to be the first opt as default
    effectCtrl.value = 'effect-3'

    function changeEffect() {
      revealer.destroy()
      var revealerOpts = {
        // the layers are the elements that move from the sides
        nmbLayers: Number(
          this.options[this.selectedIndex].getAttribute('data-layers')
        ),
        // bg color of each layer
        bgcolor: this.options[this.selectedIndex]
          .getAttribute('data-colors')
          .split(','),
        // effect classname
        effect: 'anim--' + this.value,
        onStart: function(direction) {
          // next page gets class page--animate-[direction]
          var nextPage = pages[currentPage === 0 ? 1 : 0]
          classie.add(nextPage, 'page--animate-' + direction)
        },
        onEnd: function(direction) {
          // remove class page--animate-[direction] from next page
          var nextPage = pages[currentPage === 0 ? 1 : 0]
          nextPage.className = 'page'
        },
      }

      revealer = new Revealer(revealerOpts)
    }
  }
  render() {
    return (
      <div className="js">
        {/* <!-- SVG symbol used for navigation arrows --> */}
        <svg className="hidden">
          <defs>
            <symbol id="icon-arrow" viewBox="0 0 39 51.43">
              <title>Arrow Left</title>
              <polygon
                points="7 25.71 36 45.71 36 26.08 36 5.71 7 25.71"
                strokeMiterlimit="10"
                strokeWidth="6"
              />
              <line
                x1="3"
                y1="5.71"
                x2="3"
                y2="45.71"
                fill="none"
                strokeMiterlimit="10"
                strokeWidth="6"
              />
            </symbol>
          </defs>
        </svg>
        <main className="container">
          <div className="pages">
            <div className="page page--current">
              {/* <!-- intro page --> */}
              <header className="codrops-header">
                <div className="codrops-links">
                  <a
                    className="codrops-icon codrops-icon--prev"
                    href="http://tympanus.net/Development/IsometricGrids/"
                    title="Previous Demo"
                  >
                    <span>Previous Demo</span>
                  </a>
                  <a
                    className="codrops-icon codrops-icon--drop"
                    href="http://tympanus.net/codrops/?p=27125"
                    title="Back to the article"
                  >
                    <span>Back to the Codrops article</span>
                  </a>
                </div>
                <h1 className="codrops-header__title">
                  Multi-Layer Page Transition Effects
                </h1>
                <div className="codrops-header__subbox">
                  <span>Choose an effect:</span>
                  <div className="custom-select">
                    <select name="select" id="select-effect">
                      <option
                        value="effect-3"
                        data-layers="3"
                        data-colors="#0092DD,#fff,#3E3A35"
                        selected
                      >
                        Triple Swoosh
                      </option>
                      <option
                        value="effect-1"
                        data-layers="1"
                        data-colors="#202023"
                      >
                        Simple
                      </option>
                      <option
                        value="effect-2"
                        data-layers="2"
                        data-colors="#202023,#3D4A41"
                      >
                        Duo Move
                      </option>
                      <option
                        value="effect-4"
                        data-layers="3"
                        data-colors="#202023,#555,#d1d1d1"
                      >
                        Content Move
                      </option>
                    </select>
                  </div>
                </div>
              </header>
              <a className="pater">
                <Logo className="pater__img" src={logo} alt="Hack Reactor" />
                <div className="pater__text">
                  <p>{this.state.name}</p>
                  <span>Say Hello to World : </span>
                  <input
                    type="text"
                    value={this.state.name}
                    onChange={e => this.handleChange(e)}
                  />
                  <h2 className="pater__title">Your CS success starts here.</h2>
                  <p className="pater__desc">
                    Hack Reactor's 12-week immersive coding school is accepting
                    applications for onsite and online courses.{' '}
                    <strong>Apply now and become a software engineer.</strong>
                  </p>
                </div>
              </a>
            </div>
            {/* <!-- /page --> */}
            <div className="page">
              <blockquote className="quote">
                <p>
                  A good programmer is someone who always looks both ways before
                  crossing a one-way street.{' '}
                </p>
                <footer>Doug Linder</footer>
              </blockquote>
            </div>
          </div>
          {/* <!-- /pages --> */}
          <nav className="pagenav">
            <button
              className="pagenav__button pagenav__button--top"
              aria-label="Navigate top"
              onClick={() => this.reveal('top')}
            >
              <svg className="icon icon--rtop">
                <use xlinkHref="#icon-arrow" />
              </svg>
            </button>
            <button
              className="pagenav__button pagenav__button--left"
              aria-label="Navigate left"
              onClick={() => this.reveal('left')}
            >
              <svg className="icon">
                <use xlinkHref="#icon-arrow" />
              </svg>
            </button>
            <button
              className="pagenav__button pagenav__button--right"
              aria-label="Navigate right"
              onClick={() => this.reveal('right')}
            >
              <svg className="icon icon--rright">
                <use xlinkHref="#icon-arrow" />
              </svg>
            </button>
            <button
              className="pagenav__button pagenav__button--bottom"
              aria-label="Navigate bottom"
              onClick={() => this.reveal('bottom')}
            >
              <svg className="icon icon--rbottom">
                <use xlinkHref="#icon-arrow" />
              </svg>
            </button>
            <button
              className="pagenav__button pagenav__button--cornertopleft"
              aria-label="Navigate top left"
              onClick={() => this.reveal('cornertopleft')}
            >
              <svg className="icon icon--rtopleft">
                <use xlinkHref="#icon-arrow" />
              </svg>
            </button>
            <button
              className="pagenav__button pagenav__button--cornertopright"
              aria-label="Navigate top right"
              onClick={() => this.reveal('cornertopright')}
            >
              <svg className="icon icon--rtopright">
                <use xlinkHref="#icon-arrow" />
              </svg>
            </button>
            <button
              className="pagenav__button pagenav__button--cornerbottomleft"
              aria-label="Navigate bottom left"
              onClick={() => this.reveal('cornerbottomleft')}
            >
              <svg className="icon icon--rbottomleft">
                <use xlinkHref="#icon-arrow" />
              </svg>
            </button>
            <button
              className="pagenav__button pagenav__button--cornerbottomright"
              aria-label="Navigate bottom right"
              onClick={() => this.reveal('cornerbottomright')}
            >
              <svg className="icon icon--rbottomright">
                <use xlinkHref="#icon-arrow" />
              </svg>
            </button>
          </nav>
        </main>
      </div>
    )
  }
}
ReactDOM.render(<Greeting />, document.getElementById('root'))
