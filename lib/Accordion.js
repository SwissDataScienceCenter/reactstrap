"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("./utils");

var _AccordionContext = require("./AccordionContext");

var propTypes = {
  tag: _utils.tagPropType,
  className: _propTypes.default.string,
  cssModule: _propTypes.default.object,
  innerRef: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string, _propTypes.default.func]),
  children: _propTypes.default.node,
  openId: _propTypes.default.string.isRequired,
  toggle: _propTypes.default.func.isRequired
};
var defaultProps = {
  tag: 'div'
};

var Accordion = function Accordion(props) {
  var openId = props.openId,
      toggle = props.toggle,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = (0, _objectWithoutPropertiesLoose2.default)(props, ["openId", "toggle", "className", "cssModule", "tag", "innerRef"]);
  var classes = (0, _utils.mapToCssModules)((0, _classnames.default)(className, 'accordion'), cssModule);
  var accordionContext = (0, _react.useMemo)(function () {
    return {
      openId: openId,
      toggle: toggle
    };
  });
  return /*#__PURE__*/_react.default.createElement(_AccordionContext.AccordionContext.Provider, {
    value: accordionContext
  }, /*#__PURE__*/_react.default.createElement(Tag, (0, _extends2.default)({}, attributes, {
    className: classes,
    ref: innerRef
  })));
};

Accordion.propTypes = propTypes;
Accordion.defaultProps = defaultProps;
var _default = Accordion;
exports.default = _default;