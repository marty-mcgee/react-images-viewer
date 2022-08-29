'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTransitionGroup = require('react-transition-group');

var _client = require('react-dom/client');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// OLD
// import { render, unmountComponentAtNode } from 'react-dom'
// NEW


var Portal = function (_Component) {
  _inherits(Portal, _Component);

  function Portal() {
    _classCallCheck(this, Portal);

    var _this = _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).call(this));

    _this.portalElement = null;
    // NEW
    _this.root = null;
    return _this;
  }

  _createClass(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var div = document.createElement('div');
      document.body.appendChild(div);
      this.portalElement = div;
      this.componentDidUpdate();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      // Animate fade on mount/unmount
      var duration = 200;
      var styles = '\n\t\t\t\t.fade-enter { opacity: 0.01; }\n\t\t\t\t.fade-enter.fade-enter-active { opacity: 1; transition: opacity ' + duration + 'ms; }\n\t\t\t\t.fade-leave { opacity: 1; }\n\t\t\t\t.fade-leave.fade-leave-active { opacity: .01; transition: opacity ' + duration + 'ms; }\n\t\t';

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
      this.root = (0, _client.createRoot)(this.portalElement);
      this.root.render(_react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'style',
          null,
          styles
        ),
        _react2.default.createElement(
          _reactTransitionGroup.TransitionGroup,
          this.props,
          _react2.default.createElement(
            _reactTransitionGroup.CSSTransition,
            { timeout: { enter: duration, exit: duration }, className: 'fade' },
            _react2.default.createElement(
              'div',
              null,
              this.props.children
            )
          )
        )
      ));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // OLD
      // unmountComponentAtNode(this.portalElement)
      // NEW
      this.root.unmount();
      document.body.removeChild(this.portalElement);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Portal;
}(_react.Component);

exports.default = Portal;


Portal.propTypes = {
  children: _propTypes2.default.arrayOf(_propTypes2.default.any)
};