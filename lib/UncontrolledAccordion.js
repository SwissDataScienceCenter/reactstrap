"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("./utils");

var _Accordion = _interopRequireDefault(require("./Accordion"));

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

var UncntrolledAccordion = function UncntrolledAccordion(props) {
  var _useState = (0, _react.useState)(),
      openId = _useState[0],
      setOpenId = _useState[1];

  var toggle = function toggle(id) {
    openId === id ? setOpenId(undefined) : setOpenId(id);
  };

  return /*#__PURE__*/_react.default.createElement(_Accordion.default, (0, _extends2.default)({}, props, {
    openId: openId,
    toggle: toggle
  }));
};

_Accordion.default.propTypes = propTypes;
_Accordion.default.defaultProps = defaultProps;
var _default = UncntrolledAccordion;
exports.default = _default;