"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("./utils");

var propTypes = {
  tag: _utils.tagPropType,
  className: _propTypes.default.string,
  cssModule: _propTypes.default.object,
  innerRef: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string, _propTypes.default.func]),
  children: _propTypes.default.node
};
var defaultProps = {
  tag: 'div'
};

var AccordionItem = function AccordionItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = (0, _objectWithoutPropertiesLoose2.default)(props, ["className", "cssModule", "tag", "innerRef"]);
  var classes = (0, _utils.mapToCssModules)((0, _classnames.default)(className, 'accordion-item'), cssModule);
  return /*#__PURE__*/_react.default.createElement(Tag, (0, _extends2.default)({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

AccordionItem.propTypes = propTypes;
AccordionItem.defaultProps = defaultProps;
var _default = AccordionItem;
exports.default = _default;