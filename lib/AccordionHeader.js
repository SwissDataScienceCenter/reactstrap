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
  targetId: _propTypes.default.string.isRequired
};
var defaultProps = {
  tag: 'h2'
};

var AccordionHeader = function AccordionHeader(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      innerRef = props.innerRef,
      children = props.children,
      targetId = props.targetId,
      attributes = (0, _objectWithoutPropertiesLoose2.default)(props, ["className", "cssModule", "tag", "innerRef", "children", "targetId"]);

  var _useContext = (0, _react.useContext)(_AccordionContext.AccordionContext),
      openId = _useContext.openId,
      toggle = _useContext.toggle;

  var classes = (0, _utils.mapToCssModules)((0, _classnames.default)(className, 'accordion-header'), cssModule);
  var buttonClasses = (0, _utils.mapToCssModules)((0, _classnames.default)('accordion-button', {
    collapsed: openId !== targetId
  }), cssModule);
  return /*#__PURE__*/_react.default.createElement(Tag, (0, _extends2.default)({}, attributes, {
    className: classes,
    ref: innerRef
  }), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: buttonClasses,
    onClick: function onClick() {
      return toggle(targetId);
    }
  }, children));
};

AccordionHeader.propTypes = propTypes;
AccordionHeader.defaultProps = defaultProps;
var _default = AccordionHeader;
exports.default = _default;