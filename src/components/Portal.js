import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
// OLD
// import { render, unmountComponentAtNode } from 'react-dom'
// NEW
import { createRoot } from 'react-dom/client'


export default class Portal extends Component {
  constructor() {
    super()
    this.portalElement = null
    // NEW
    this.root = null
  }
  componentDidMount() {
    const div = document.createElement('div')
    document.body.appendChild(div)
    this.portalElement = div
    this.componentDidUpdate()
  }
  componentDidUpdate() {
    // Animate fade on mount/unmount
    const duration = 200
    const styles = `
				.fade-enter { opacity: 0.01; }
				.fade-enter.fade-enter-active { opacity: 1; transition: opacity ${duration}ms; }
				.fade-leave { opacity: 1; }
				.fade-leave.fade-leave-active { opacity: .01; transition: opacity ${duration}ms; }
		`

    // OLD
    // render(
    //   <div>
    //     <style>{styles}</style>
    //     <TransitionGroup
    //       {...this.props}>
    //       <CSSTransition timeout={{ enter: duration, exit: duration }} className="fade">
    //         <div>{this.props.children}</div>
    //       </CSSTransition>
    //     </TransitionGroup>
    //   </div>,
    //   this.portalElement
    // )
    // NEW (FOR REACT 18)
    this.root = createRoot(this.portalElement)
    this.root.render(
      <div>
        <style>{styles}</style>
        <TransitionGroup
          {...this.props}>
          <CSSTransition timeout={{ enter: duration, exit: duration }} className="fade">
            <div>{this.props.children}</div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    )
  }
  componentWillUnmount() {
    // OLD
    // unmountComponentAtNode(this.portalElement)
    // NEW
    this.root.unmount()
    document.body.removeChild(this.portalElement)
  }
  render() {
    return null
  }
}

Portal.propTypes = {
  children: PropsTypes.arrayOf(PropsTypes.any),
}
